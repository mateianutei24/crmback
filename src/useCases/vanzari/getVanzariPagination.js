module.exports = async function getTipObiectivPaginationUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

  var query = 'SELECT * FROM "Vanzare"';
  query += ' LEFT JOIN "Produs" on "Produs".produs_id = "Vanzare".produs_id';
  query +=
    ' LEFT JOIN "Companie" on "Companie".companie_id = "Vanzare".companie_id';

  if (last_id == "start") {
    query += ` ORDER BY vanzare_id LIMIT ${limita};`;
  } else {
    query += ` WHERE vanzare_id > '${last_id}' ORDER BY vanzare_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
};
