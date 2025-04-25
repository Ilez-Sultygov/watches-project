export default class UserValidator {
  static validateSignUp({ username, email, password, repeatPassword }) {
    if (
      !username ||
      username.trim().length === 0 ||
      typeof username !== "string"
    ) {
      return {
        isValid: false,
        error: "Укажите имя пользователя",
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
        error: "Укажите корректный адрес эл. почты",
      };
    }

    if (
      !password ||
      password.trim().length === 0 ||
      typeof password !== "string" ||
      !this.validatePassword(password)
    ) {
      return {
        isValid: false,
        error:
          "Требуется пароль (8 символов, как минимум одна заглавная буква, одна строчная буква, одна цифра и один специальный символ).",
      };
    }

    if (repeatPassword !== password) {
      return {
        isValid: false,
        error: "Пароли не совпадают",
      };
    }

    return {
      isValid: true,
      error: null,
    };
  }

  static validateSignIn({ email, password }) {
    if (!email || email.trim().length === 0 || typeof email !== "string") {
      return {
        isValid: false,
        error: "Укажите корректный адрес эл. почты.",
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
          "Требуется пароль (8 символов, как минимум одна заглавная буква, одна строчная буква, одна цифра и один специальный символ).",
      };
    }

    return {
      isValid: true,
      error: null,
    };
  }

  static validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  static validatePassword(password) {
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumbers = /\d/;
    const hasSpecialCharacters = /[!@#$%^&*()-,.?":{}|<>]/;
    const isValidLength = password.length >= 8;

    if (
      !hasUpperCase.test(password) ||
      !hasLowerCase.test(password) ||
      !hasNumbers.test(password) ||
      !hasSpecialCharacters.test(password) ||
      !isValidLength
    ) {
      return false;
    }
    return true;
  }
}
