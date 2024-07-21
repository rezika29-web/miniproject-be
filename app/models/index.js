//mulai kembali dari index models
const dbConfig = require("../config/peserta.db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

// membuat module
const db = {};

// sequelize
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// model
db.peserta = require("./peserta.model")(sequelize, Sequelize);
module.exports = db;