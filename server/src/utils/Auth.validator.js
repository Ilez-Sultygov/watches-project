class AuthValidator {
  static validateSignUp({ username, email, password }) {
    if (
      !username ||
      username.trim().length === 0 ||
      typeof username !== "string"
    ) {
      return {
        isValid: false,
        error: "Требуется указать имя пользователя",
      };
    }

    if (
      !email ||
      email.trim().length === 0 ||
      typeof email !== "string" ||
      !this.validateEmail(email)
    ) {
      return {
        isValid: false,
        error: "Требуется указать допустимый адрес эл. почты",
      };
    }

    if (
      !password ||
      password.trim().length === 0 ||
      typeof password !== "string" ||
      !this.validatePassword(password)
    )
      return {
        isValid: false,
        error:
          "Укажите пароль. Пароль должен содержать не менее 8 символов, в том числе хотя бы одну заглавную и одну строчную букву, одну цифру и один специальный символ.",
      };

    return {
      isValid: true,
      error: null,
    };
  }

  static validateSignIn({ email, password }) {
    if (!email || email.trim().length === 0 || typeof email !== "string") {
      return {
        isValid: false,
        error: "Требуется указать допустимый адрес эл. почты",
      };
    }

    if (
      !password ||
      password.trim().length === 0 ||
      typeof password !== "string"
    ) {
      return {
        isValid: false,
        error:
          "Укажите пароль. Пароль должен содержать не менее 8 символов, в том числе хотя бы одну заглавную и одну строчную букву, одну цифру и один специальный символ.",
      };
    }
    return {
      isValid: true,
      error: null,
    };
  }

  static validateEmail(email) {
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegExp.test(email);
  }

  static validatePassword(password) {
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumbers = /\d/;
    const hasSpecChars = /[!@#$%^&*()-,.?":{}|<>]/;
    const hasValidLength = password.length >= 8;

    if (
      !hasUpperCase.test(password) ||
      !hasLowerCase.test(password) ||
      !hasNumbers.test(password) ||
      !hasSpecChars.test(password) ||
      !hasValidLength
    ) {
      return false;
    }
    return true;
  }
}

module.exports = AuthValidator;
