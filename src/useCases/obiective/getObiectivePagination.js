module.exports = async function getNisePaginationUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

  var query = 'SELECT * FROM "Obiectiv"';
  query +=
    ' LEFT JOIN "Tip obiectiv" on "Tip obiectiv".tip_obiectiv_id = "Obiectiv".obiectiv_tip';
  query += ' LEFT JOIN "Nisa" on "Nisa".nisa_id = "Obiectiv".nisa_id';
  query +=
    ' LEFT JOIN "Punct de lucru" on "Punct de lucru".punct_lucru_id = "Obiectiv".punct_lucru_id';
  query +=
    ' LEFT JOIN "Companie" on "Companie".companie_id = "Obiectiv".companie_id';

  if (last_id == "start") {
    query += ` ORDER BY obiectiv_id LIMIT ${limita};`;
  } else {
    query += ` WHERE obiectiv_id > '${last_id}' ORDER BY obiectiv_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
};
