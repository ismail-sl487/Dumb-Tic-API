'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    userImage: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here

    user.hasMany(models.event,{
      as : 'createBy',
      foreignKey : 'createby_id'
  })
  };
  return user;
};