const dataController = (database) => {
  const addIntoDatabase = async (table, object) => {
    return await database.addIntoDatabase(table, object);
  };

  const deleteFromDatabase = async (table, columnName, columnValue) => {
    return await database.deleteFromDatabase(table, columnName, columnValue);
  };

  const updateOneObject = async (table, columnName, columnValue, newObject) => {
    return await database.updateOneObject(
      table,
      columnName,
      columnValue,
      newObject
    );
  };

  const getObject = async (table, columnName, columnValue) => {
    return await database.getObject(table, columnName, columnValue);
  };

  const getAllObjects = async (table) => {
    return await database.getAllObjects(table);
  };

  const login = async (credentials) => {
    return await database.login(credentials);
  };

  const register = async (credentials) => {
    return await database.register(credentials);
  };

  const callProcedure = async (procedure, values) => {
    return await database.callProcedure(procedure, values);
  };
  const performQuery = async (query, values) => {
    const res = await database.performQuery(query, values);
    return res;
  };
  const getObjectsPagination = async (colection, limit, last_id, fieldName) => {
    return await database.getObjectsPagination(
      colection,
      limit,
      last_id,
      fieldName
    );
  };
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

module.exports = dataController;
