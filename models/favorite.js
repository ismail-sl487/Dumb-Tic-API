'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    id__user: DataTypes.INTEGER,
    id_event: DataTypes.INTEGER
  }, {});
  favorite.associate = function(models) {
    
  };
  return favorite;
};