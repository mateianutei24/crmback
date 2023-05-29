const { Client } = require("pg");

module.exports = async function dbConnection() {
  const client = new Client({
    host: "136.255.168.27",
    port: 5432,
    user: "primagra_nodeserver",
    password: "test12",
    database: "crm_primagra",
  });
  const response = await client.connect();
  console.log("response" + response);
  return client;
};
