export default class UserApi {
  static async signUp(userData) {
    const response = await fetch("/api/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  }

  static async signIn(userData) {
    const response = await fetch("/api/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  }

  static async signOut() {
    const response = await fetch("/api/auth/signOut");
    return await response.json();
  }
}
