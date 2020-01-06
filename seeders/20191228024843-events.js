'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('events', [{
        title       :'Raisa',
        start_time  : '2019-12-22 14:40:42',
        end_time    : '2019-12-22 18:40:42',
        price       : 30000,
        description :'lorem ipsum',
        address     : 'bintaro tangerang',
        urlmap      : 'https://goo.gl/maps/EDHGVq1ZygbcsmDb8',
        image       :'https://id.bookmyshow.com/blog-hiburan/wp-content/uploads/2019/01/Java-Jazz.jpg',
        category_id : 1,
        createby_id  : 1
        

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
