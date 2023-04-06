module.exports = function postgresDB(postgresConnection) {
  async function addIntoDatabase(table, object) {
    console.log(object);

    const query = `INSERT INTO ${table} RETURNING *`;
    console.log(query);
    const res = await postgresConnection.query(query, object);
    return true;
  }

  async function getObject(table, columnName, columnValue) {
    console.log(table, columnName, columnValue);
    const query = `SELECT * FROM ${table} WHERE ${columnName} = '${columnValue}' `;
    const res = await postgresConnection.query(query, []);
    return res.rows[0];
  }

  async function getAllObjects(table) {
    const query = `SELECT * FROM ${table}`;
    const res = await postgresConnection.query(query, []);
    return res.rows;
  }

  async function updateOneObject(table, columnName, columnValue, newObject) {
    const query = `UPDATE ${table} WHERE ${columnName} = '${columnValue}' `;
    console.log(query);
    console.log(newObject);
    const res = await postgresConnection.query(query, newObject);
    return res;
  }

  async function deleteFromDatabase(table, columnName, columnValue) {
    console.log(table, columnName, columnValue);
    const query = `DELETE FROM ${table} WHERE ${columnName} = '${columnValue}' `;
    const res = await postgresConnection.query(query, []);
    return res;
  }

  async function login(credentials) {}

  async function callProcedure(procedure, values) {
    const res = await postgresConnection.query(procedure, values);
    return res;
  }
  async function performQuery(query, values) {
    const res = await postgresConnection.query(query, values);
    return res.rows;
  }
  async function register(credentials) {}

  async function getObjectsPagination(colection, limit, last_id, fieldName) {
    var query;
    if (last_id == "start") {
      query = `SELECT * FROM ${colection} ORDER BY ${fieldName} LIMIT ${limit}`;
    } else {
      query = `SELECT * FROM ${colection} WHERE ${fieldName} > '${last_id}' ORDER BY ${fieldName}  LIMIT ${limit}`;
    }

    const res = await postgresConnection.query(query, []);
    return res.rows;
  }
  return {
    addIntoDatabase,
    getObject,
    getAllObjects,
    updateOneObject,
    deleteFromDatabase,
    login,
    register,
    callProcedure,
    performQuery,
    getObjectsPagination,
  };
};
