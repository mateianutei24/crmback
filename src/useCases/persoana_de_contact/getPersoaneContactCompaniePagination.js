module.exports = async function addPersoaneContactCompanieUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.paginationObject.getLimita());
  const last_id = requestObject.paginationObject.getLastId();
  const companieId = requestObject.companieIdReqObj.getCompanieId();

  var query = `SELECT * FROM "Persoana contact"`;
  query +=
    ' LEFT JOIN "Companie" ON "Persoana contact".companie_id = "Companie".companie_id';

  if (last_id == "start") {
    query += ` WHERE "Persoana contact".companie_id = '${companieId}'`;
    query += ` ORDER BY "Persoana contact".persoana_contact_id LIMIT ${limita};`;
  } else {
    query += ` WHERE "Persoana contact".persoana_contact_id > '${last_id}' AND "Persoana contact".companie_id = '${companieId}' ORDER BY "Persoana contact".persoana_contact_id LIMIT ${limita};`;
  }
  const response = await dataController.performQuery(query);
  return response;
};
