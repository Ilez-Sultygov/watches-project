"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Максим К.",
          email: "max@max.com",
          password: "123@Maxim",
          
          isAdmin: false,
        },
        {
          username: "Денис О.",
          email: "denis@denis.com",
          password: "123@Denis",

          isAdmin: false,
        },
        {
          username: "Дарья Л.",
          email: "darya@darya.com",
          password: "123@Darya",

          isAdmin: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
