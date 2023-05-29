module.exports = async function getAngajatiPaginationUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

  var query = 'SELECT * FROM "Angajat"';
  query +=
    ' LEFT JOIN "Tip angajat" ON "Angajat".angajat_tip = "Tip angajat".tip_angajat_id';
  query +=
    '	LEFT JOIN "Functie angajat" ON "Angajat".angajat_functie = "Functie angajat".functie_angajat_id';
  query +=
    ' LEFT JOIN "Punct de lucru" ON "Angajat".angajat_punct_lucru_id = "Punct de lucru".punct_lucru_id';

  if (last_id == "start") {
    query += ` ORDER BY angajat_id LIMIT ${limita};`;
  } else {
    query += ` WHERE angajat_id > '${last_id}' ORDER BY angajat_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
};
