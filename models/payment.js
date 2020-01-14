'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    qty: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING,
    payment_creatby_id: DataTypes.INTEGER,
    payment_event_id:DataTypes.INTEGER
  }, {});
  payment.associate = function(models) {
    // associations can be defined here
    payment.belongsTo(models.event,{
        as: 'paymentEvent',
        foreignKey : 'payment_event_id'
    },
    payment.belongsTo(models.user,{
        as:'paymentUser',
        foreignKey:'payment_creatby_id'
    })
    )
  };
  return payment;
};