const { Client } = require("pg");

module.exports = async function dbConnection() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "fb7e8d72400",
    database: "crmprimagra_dev",
  });
  await client.connect();

  return client;
};
