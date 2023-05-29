module.exports = async function getRezultatePaginationUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

  var query = 'SELECT * FROM "Rezultate actiune"';
  query +=
    ' LEFT JOIN "Actiune" on "Actiune".actiune_id = "Rezultate actiune".actiune_id';
  query +=
    ' LEFT JOIN "Tip rezultat" on "Tip rezultat".tip_rezultat_id = "Rezultate actiune".tip_rezultat_id';

  if (last_id == "start") {
    query += ` ORDER BY rezultat_id LIMIT ${limita};`;
  } else {
    query += ` WHERE rezultat_id > '${last_id}' ORDER BY rezultat_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
};
