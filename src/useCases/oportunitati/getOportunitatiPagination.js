module.exports = async function getOportunitatiPaginationUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();
  var query = 'SELECT * FROM "Oportunitate"';
  query +=
    ' LEFT JOIN "Tip oportunitate" on "Tip oportunitate".tip_oportunitate_id = "Oportunitate".tip_oportunitate';
  query +=
    ' LEFT JOIN "Obiectiv" on "Obiectiv".obiectiv_id = "Obiectiv".obiectiv_id';
  query +=
    ' LEFT JOIN "Angajat" on "Angajat".angajat_id = "Oportunitate".identificat_de';

  if (last_id == "start") {
    query += ` ORDER BY oportunitate_id LIMIT ${limita};`;
  } else {
    query += ` WHERE oportunitate_id > '${last_id}' ORDER BY oportunitate_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
};
