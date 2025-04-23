"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Watches",
      [
        {
          model: "Emerald",
          img: "../assets/emerald.jpg",
          description:
            "Мужские механические наручные часы в крупном хромированном корпусе. Механизм работает на 19-ти рубиновых камнях. Стекло минеральное, устойчиво к царапинам. Часы сохраняют свой механический точный ход до 39 часов подряд от одного завода пружины.",
          price: 1000,
        },
        {
          model: "Ruby",
          img: "../assets/ruby.jpg",
          description:
            "Очаровательный женский скелетон. По спирали времени вьются нити мыслей, воспоминаний и предчувствий, сплетая орнамент жизни, полной незабываемых событий, чудесных свершений и важных решений.",
          price: 1400,
        },
        {
          model: "Sapphire",
          img: "../assets/sapphire.jpg",
          description:
            "Эксклюзивные люксовые мужские часы из белого золота с механизмом-драконом. Корпус из благородного белого золота подчеркивает статус владельца.",
          price: 1700,
        },
        {
          model: "Diamond",
          img: "../assets/diamond.jpg",
          description: "Наручные часы с бриллиантами",
          price: 2200,
        },
        {
          model: "Pearl",
          img: "../assets/pearl.jpg",
          description:
            "Стальные ювелирные часы, камни - топаз белый - 7шт. вес 0.03 карата, перламутр",
          price: 500,
        },
        {
          model: "Garnet",
          img: "../assets/garnet.jpg",
          description:
            "Материал: серебро 925 пробы. Камни: натуральный гранат, белый топаз. Родина камней: Мозамбик. Циферблат: 15 х 15 мм. Масса изделия: 34 грамма. Механизм: кварцевый, Япония. Водонепроницаемые: да. Ширина браслета: 13 мм.",
          price: 150,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Watches", null, {});
  },
};
