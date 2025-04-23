const { User } = require("../db/models/user");

class UserService {
  static async getByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  static async create(userData) {
    return await User.create(userData);
  }

  static async getAllUsers() {
    return await User.findAll();
  }

  static async deleteUser(email) {
    const user = await this.getByEmail(email);
    if (user) {
      await user.destroy();
    }
    return user;
  }

  //   static async updateUser(email, data) {
  //     const user = await this.getByEmail(email);
  //     if (user) {
  //       user.username = data.username;
  //       user.email = data.email;
  //       user.password = data.password;
  //       user.phone = data.phone;
  //       user.isAdmin = data.isAdmin;
  //       await user.save();
  //     }
  //     return user;
  //   }

  static async setUserPhone(email, data) {
    const user = await this.getByEmail(email);
    if (user) {
      user.phone = data.phone;
      await user.save();
    }
    return user;
  }

  static async adminToggle(email) {
    const user = await this.getByEmail(email);
    if (user) {
      user.isAdmin = !user.isAdmin;
      await user.save();
    }
    return user;
  }
}

module.exports = UserService;
