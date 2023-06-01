module.exports = async function getCompaniiPagination(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

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

  if (last_id == "start") {
    query += ` ORDER BY companie_id LIMIT ${limita + 1};`;
  } else {
    query += ` WHERE companie_id > '${last_id}' ORDER BY companie_id LIMIT ${
      limita + 1
    };`;
  }

  const res = await dataController.performQuery(query);
  var data = res.rows;

  var hasMore = true;
  if (res.rows.length != limita + 1) {
    hasMore = false;
  } else {
    data.splice(limita);
  }
  return {
    hasMore: hasMore,
    data: data,
  };
};
