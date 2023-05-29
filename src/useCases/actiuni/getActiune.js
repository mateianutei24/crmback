module.exports = async function getAngajatUseCase(
  dataController,
  requestObject
) {
  var query = 'SELECT * FROM "Actiune"';
  query +=
    ' LEFT JOIN "Tip actiune" ON "Tip actiune".tip_actiune_id = "Actiune".tip_actiune_id';
  query +=
    '	LEFT JOIN "Status actiune" ON "Status actiune".status_actiune_id = "Actiune".status_actiune_id';
  query +=
    ' LEFT JOIN "Oportunitate" ON "Oportunitate".oportunitate_id = "Actiune".oportunitate_id';

  query += ` WHERE actiune_id = '${requestObject.getActiuneId()}'`;

  const response = await dataController.performQuery(query);
  return response;
};
