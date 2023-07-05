const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectou com sucesso com o Sequelize");
} catch (err) {
  console.log("Não foi possivel conectar:", error);
}

module.exports = sequelize