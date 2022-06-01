const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minHeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxHeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    minWeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxWeight:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shortLifespan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longLifespan:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: ""
    },
    dbSource:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  },
      {timestamps: false});
};
