const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // CPF deve ser único para cada usuário
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // RG deve ser único para cada usuário
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Email deve ser único para cada usuário
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  registro: {
    type: DataTypes.STRING,
    allowNull: true
  },
  diplomas: {
    type: DataTypes.STRING,
    allowNull: true
  },
  certificado: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cartaovacina: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contatoemergencia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contratos:{
    type: DataTypes.STRING,
    allowNull: true
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  },
  nivel:{
    type: DataTypes.STRING,
    allowNull: false
  },
  imageName: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = User;