require('../bootstrap');

module.exports = {
  dialect: process.env.DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true, // Sequelize ira criar tabelas no formato user_groups
    underscoredAll: true, // O mesmo para colunas e relacionamenos
  },
};
