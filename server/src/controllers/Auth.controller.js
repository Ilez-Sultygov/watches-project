const UserService = require("../services/User.service");
const AuthValidator = require("../utils/Auth.validator");
const formatResponse = require("../utils/formatResponse");
const cookiesConfig = require("../config/cookiesConfig");
const bcrypt = require("bcrypt");
const generateTokens = require("../utils/generateTokens");

class AuthController {
  static async signUp(req, res) {
    const { email, username, password } = req.body;

    const { isValid, error } = AuthValidator.validateSignUp({
      email,
      username,
      password,
    });

    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }

    const normalizedEmail = email.toLowerCase();

    try {
      const userFound = await UserService.getByEmail(normalizedEmail);

      if (userFound) {
        return res
          .status(400)
          .json(
            formatResponse(
              400,
              "user already exists",
              null,
              "user already exists"
            )
          );
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await UserService.create({
        username,
        email: normalizedEmail,
        password: hashedPassword,
      });

      if (!newUser) {
        return res
          .status(400)
          .json(formatResponse(400, "SignUp failed", null, "SignUp Failed"));
      }

      const plainUser = newUser.get({ plain: true });
      delete plainUser.password;

      const { accessToken, refreshToken } = generateTokens({ user: plainUser });

      res
        .status(201)
        .cookie("refreshToken", refreshToken, cookiesConfig)
        .json(
          formatResponse(201, "SignUp Success", {
            user: plainUser,
            accessToken,
          })
        );
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async signIn(req, res) {
    const { email, password } = req.body;

    const { isValid, error } = AuthValidator.validateSignIn({
      email,
      password,
    });

    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "validation error", null, error));
    }

    const normalizedEmail = email.toLowerCase();

    try {
      const user = await UserService.getByEmail(normalizedEmail);

      if (!user) {
        return res
          .status(400)
          .json(formatResponse(400, "user not found", null, "user not found"));
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res
          .status(400)
          .json(
            formatResponse(400, "invalid password", null, "invalid password")
          );
      }

      const plainUser = user.get({ plain: true });
      delete plainUser.password;

      const { accessToken, refreshToken } = generateTokens({ user: plainUser });

      res
        .status(200)
        .cookie("refreshToken", refreshToken, cookiesConfig)
        .json(
          formatResponse(200, "Log in success", {
            user: plainUser,
            accessToken,
          })
        );
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "internal server error", null, message));
    }
  }

  static async signOut(req, res) {
    try {
      res
        .status(200)
        .clearCookie("refreshToken")
        .json(formatResponse(200, "Log out seccess"));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "internal server error", null, message));
    }
  }
}

module.exports = AuthController;
