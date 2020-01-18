'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    title: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
    urlmap: DataTypes.TEXT,
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
    },
    event.hasMany(models.payment,{
      as :'order_event',
      foreignKey :'payment_event_id'
    })
    
    )
  
  )
  };
  return event;
};