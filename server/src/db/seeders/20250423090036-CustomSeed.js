"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "CustomOrders",
      [
        {
          user_id: 1,
          img_url: "../assets/diamond.jpg",
          phone: null,
        },
        {
          user_id: 3,
          img_url: "../assets/garnet.jpg",
          phone: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CustomOrders", null, {});
  },
};
