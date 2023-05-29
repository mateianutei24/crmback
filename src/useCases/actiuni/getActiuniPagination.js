module.exports = async function getAngajatiPaginationUseCase(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

  var query = 'SELECT * FROM "Actiune"';
  query +=
    ' LEFT JOIN "Tip actiune" ON "Tip actiune".tip_actiune_id = "Actiune".tip_actiune_id';
  query +=
    '	LEFT JOIN "Status actiune" ON "Status actiune".status_actiune_id = "Actiune".status_actiune_id';
  query +=
    ' LEFT JOIN "Oportunitate" ON "Oportunitate".oportunitate_id = "Actiune".oportunitate_id';

  if (last_id == "start") {
    query += ` ORDER BY actiune_id LIMIT ${limita};`;
  } else {
    query += ` WHERE actiune_id > '${last_id}' ORDER BY actiune_id LIMIT ${limita};`;
  }

  return await dataController.performQuery(query);
};
