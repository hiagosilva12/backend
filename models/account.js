const Sequelize = require("sequelize");
const db = require("../db/connection");

const Account = db.define("account", {
  name: {
    type: Sequelize.STRING,
  },
  surname: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.STRING,
  },
  companyName: {
    type: Sequelize.STRING,
  },
  cpf: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = Account;
