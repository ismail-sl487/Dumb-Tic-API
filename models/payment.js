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
  };
  return payment;
};