'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    title: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    urlmap: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    createby_id: DataTypes.INTEGER,
   
  }, {});
  event.associate = function(models) {
    // associations can be defined here
    event.belongsTo(models.user,{
      as : 'createdBy',
      foreignKey : 'createby_id'
  },
    event.belongsTo (models.category,{
      as : 'categoryId',
      foreignKey : 'category_id'
    })
  
  )
  };
  return event;
};