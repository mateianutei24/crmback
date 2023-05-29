module.exports = async function getRezultateForActiunePaginationUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.paginationObject.getLimita());
  const last_id = requestObject.paginationObject.getLastId();
  const actiune_id = requestObject.getActiuneReqObj.getActiuneId();
  var query = 'SELECT * FROM "Rezultate actiune"';
  query +=
    ' LEFT JOIN "Actiune" on "Actiune".actiune_id = "Rezultate actiune".actiune_id';
  query +=
    ' LEFT JOIN "Tip rezultat" on "Tip rezultat".tip_rezultat_id = "Rezultate actiune".tip_rezultat_id';

  if (last_id == "start") {
    query += ` WHERE "Rezultate actiune".actiune_id = '${actiune_id}' ORDER BY rezultat_id LIMIT ${limita};`;
  } else {
    query += ` WHERE rezultat_id > '${last_id}' AND "Rezultate actiune".actiune_id = '${actiune_id}'  ORDER BY rezultat_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
  return response;
};
