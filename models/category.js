'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    categoryImage: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    // associations can be defined here
    category.hasMany(models.event,{
      as : 'categoriesId',
      foreignKey : 'createby_id'
  })
  };
  return category;
};