'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {//esto no afecta workbench
      // define association here
      Category.hasMany(models.Product,{//una categ tiene muchos productos
        as : 'products',
        foreignKey : 'categoryId' //esta fk esta en el modelo de productos
      })
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};