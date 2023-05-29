module.exports = async function getCompanie(dataController, requestObject) {
  const companieId = requestObject.getCompanieId();
  var query = 'SELECT * FROM "Companie"';
  query += ' LEFT JOIN "Nisa" on "Companie".nisa_id = "Nisa".nisa_id';
  query +=
    ' LEFT JOIN "Marime companie" on "Companie".marime_companie_id = "Marime companie".marime_companie_id';
  query +=
    ' LEFT JOIN "Activitate companie" on "Companie".activitate_companie_id = "Activitate companie".activitate_companie_id';
  query +=
    ' LEFT JOIN "Angajat" on "Companie".angajat_responsabil = "Angajat".angajat_id';
  query +=
    ' LEFT JOIN "Punct de lucru" on "Companie".punct_lucru_id = "Punct de lucru".punct_lucru_id';
  query += ` WHERE "Companie".companie_id = '${companieId}';
  `;
  const response = await dataController.performQuery(query);

  return response;
};
