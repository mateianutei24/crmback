const webserverImport = require("./webserver/server");
const connectToDatabase = require("./database/postgres/db_connection");
const validatorsImport = require("./validator/validator_controller");
const modelImport = require("./model/modelImplementation");
const dataControllerImport = require("./controller/data_controller");
const postgresImport = require("./database/postgres/postgres");

async function main() {
  const connection = await connectToDatabase();
  const test_connection = await connection.query("SELECT $1::text as message", [
    "POSTGRES WORKS",
  ]);

  const postgres = postgresImport(connection);

  const controller = dataControllerImport(postgres);

  const validators = validatorsImport();
  const model = modelImport(validators);

  const webserver = webserverImport(controller, model);

  console.log(test_connection.rows[0].message); // Hello world!
  webserver.run();
}

main();
