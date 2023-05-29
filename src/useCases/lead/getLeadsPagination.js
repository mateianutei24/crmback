module.exports = async function getLeadsUseCase(dataController, requestObject) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

  var query = 'SELECT * FROM "Lead"';
  query +=
    ' LEFT JOIN "Companie" ON "Companie".companie_id = "Lead".companie_id';
  query +=
    '	LEFT JOIN "Angajat" ON "Angajat".angajat_id = "Lead".identificat_de';

  if (last_id == "start") {
    query += ` ORDER BY lead_id LIMIT ${limita};`;
  } else {
    query += ` WHERE lead_id > '${last_id}' ORDER BY lead_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
};
