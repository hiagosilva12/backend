const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/app.bd",
});

module.exports = sequelize;
