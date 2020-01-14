'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', 
        [

          {
            name: 'Music',
            categoryImage: 'https://pngimage.net/wp-content/uploads/2018/06/public-concert-png-2.png'
          },
          {
            name: 'Science',
            categoryImage: 'https://clipartart.com/images/car-crash-clipart-transparent-10.png'
          },
          {
            name: 'Sports',
            categoryImage: 'https://i.dlpng.com/static/png/1303758-free-attendance-sports-png-1995_1081_preview.png'
          },
          {
            name: 'Programing',
            categoryImage: 'https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
          }


        ], {});
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
