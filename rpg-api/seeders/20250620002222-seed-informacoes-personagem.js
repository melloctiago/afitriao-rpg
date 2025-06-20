'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'informacoes_personagem',
      [
        {
          personagem_id: 1,
          pontos_vida: 100,
          pontos_esforco: 50,
          defesa: 15,
          sanidade: 80
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('informacoes_personagem', null, {});
  }
};
