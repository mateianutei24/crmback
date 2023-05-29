module.exports = async function getPersoaneContactPaginationUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

  var query = `SELECT * FROM "Persoana contact"`;
  query +=
    ' LEFT JOIN "Companie" ON "Persoana contact".companie_id = "Companie".companie_id';

  if (last_id == "start") {
    query += ` ORDER BY persoana_contact_id LIMIT ${limita};`;
  } else {
    query += ` WHERE persoana_contact_id > '${last_id}' ORDER BY persoana_contact_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
};
