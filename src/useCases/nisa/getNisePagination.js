module.exports = async function getNisePaginationUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

  var query = 'SELECT * FROM "Nisa"';
  query +=
    ' LEFT JOIN "Angajat" on "Nisa".nisa_persoana_responsabila = "Angajat".angajat_id';

  if (last_id == "start") {
    query += ` ORDER BY nisa_id LIMIT ${limita};`;
  } else {
    query += ` WHERE nisa_id > '${last_id}' ORDER BY nisa_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
};
