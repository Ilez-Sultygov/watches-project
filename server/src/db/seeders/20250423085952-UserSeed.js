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
          password:
            "$2b$10$lpO6k7Xgaeoeejayq2X3t.sCdENlFvt1DpoiSzXHXqykriguOFfD.",

          isAdmin: false,
        },
        {
          username: "Денис О.",
          email: "denis@denis.com",
          password:
            "$2b$10$iDzQNROqjfeHkqNRk1P8p.Qhyp4k.Je3ocNN4MtHCtkCAXODwfQ4S",

          isAdmin: false,
        },
        {
          username: "Дарья Л.",
          email: "darya@darya.com",
          password:
            "$2b$10$nqdIVIQIf9qh/jscAa1hGOr0Dwys4CAwMaHpKgna0rFN8w4Vl8q1S",

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
