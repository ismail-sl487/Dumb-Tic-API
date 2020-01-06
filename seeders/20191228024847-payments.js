'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('payments', [{
        qty         : 3,
        total_price : 90000,
        status      : 'comfrimed',
        attachment  : 'optional',
        payment_creatby_id :1,
        payment_event_id :1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
