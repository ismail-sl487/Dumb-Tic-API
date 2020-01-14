'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('events', 
        [
            {

                title       : 'Raisa Concert',
                start_time  : '2020-01-14 14:40:42',
                end_time    : '2020-01-14 18:40:42',
                price       :  30000,
                description : 'Raisa bersama JUNI Concert akan menggelar konser tunggal di Stadion Utama Gelora Bung Karno pada 27 Juni 2020 yang bertajuk Raisa Live in Concert Stadion Utama Gelora Bung Karno. Konser ini akan menjadi saksi nyata tentang cerita perjalanan, perjuangan, dan harapannya di industri musik, serta memberikan pesan kuat bahwa setiap orang, terutama generasi muda khususnya perempuan, bisa bermimpi dan menggapai impiannya dan bahkan menciptakan sejarah. Dalam rangka menyambut 5 tahun ada di industri musik, Raisa membuat konser tunggalnya, "Raisa Live in Concert at Istora Senayan", Jakarta. Kesuksesan konser yang diselenggarakan di tahun 2015 ini merupakan langkah awal Raisa untuk memasuki konser skala stadium',
                address     : 'Bintaro, Tangerang',
                urlmap      : 'https://goo.gl/maps/EDHGVq1ZygbcsmDb8',
                image       : 'https://id.bookmyshow.com/blog-hiburan/wp-content/uploads/2019/01/Java-Jazz.jpg',
                category_id :  1,
                createby_id :  1
        

            },

            {

                title       : 'Didi Kempot',
                start_time  : '2020-01-15 14:40:42',
                end_time    : '2020-01-15 18:40:42',
                price       :  30000,
                description : 'Raisa bersama JUNI Concert akan menggelar konser tunggal di Stadion Utama Gelora Bung Karno pada 27 Juni 2020 yang bertajuk Raisa Live in Concert Stadion Utama Gelora Bung Karno. Konser ini akan menjadi saksi nyata tentang cerita perjalanan, perjuangan, dan harapannya di industri musik, serta memberikan pesan kuat bahwa setiap orang, terutama generasi muda khususnya perempuan, bisa bermimpi dan menggapai impiannya dan bahkan menciptakan sejarah. Dalam rangka menyambut 5 tahun ada di industri musik, Raisa membuat konser tunggalnya, "Raisa Live in Concert at Istora Senayan", Jakarta. Kesuksesan konser yang diselenggarakan di tahun 2015 ini merupakan langkah awal Raisa untuk memasuki konser skala stadium',
                address     : 'Bintaro, Tangerang',
                urlmap      : 'https://goo.gl/maps/EDHGVq1ZygbcsmDb8',
                image       : 'https://id.bookmyshow.com/blog-hiburan/wp-content/uploads/2019/01/Java-Jazz.jpg',
                category_id :  1,
                createby_id :  1
        

            },

            

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
