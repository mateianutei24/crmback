module.exports = async function getAngajatUseCase(
  dataController,
  requestObject
) {
  var query = 'SELECT * FROM "Angajat"';
  query +=
    ' LEFT JOIN "Tip angajat" ON "Angajat".angajat_tip = "Tip angajat".tip_angajat_id';
  query +=
    '	LEFT JOIN "Functie angajat" ON "Angajat".angajat_functie = "Functie angajat".functie_angajat_id';
  query +=
    ' LEFT JOIN "Punct de lucru" ON "Angajat".angajat_punct_lucru_id = "Punct de lucru".punct_lucru_id';
  query += ` WHERE angajat_id = '${requestObject.getAngajatId()}'`;

  const response = await dataController.performQuery(query);
  return response;
};
