"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          user_id: 1,
          watch_id: 1,
        },
        {
          user_id: 1,
          watch_id: 3,
        },
        {
          user_id: 2,
          watch_id: 2,
        },
        {
          user_id: 3,
          watch_id: 4,
        },
        {
          user_id: 3,
          watch_id: 5,
        },
        {
          user_id: 3,
          watch_id: 6,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
