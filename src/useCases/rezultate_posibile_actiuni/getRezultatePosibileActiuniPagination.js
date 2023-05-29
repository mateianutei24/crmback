module.exports = async function getRezultatePosibileActiuniPagination(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.getLimita());
  const last_id = requestObject.getLastId();

  var query = `SELECT * FROM "Rezultat posibil actiune"`;
  query +=
    ' INNER JOIN "Tip actiune" ON "Rezultat posibil actiune".tip_actiune_id = "Tip actiune".tip_actiune_id';
  query +=
    ' INNER JOIN "Tip rezultat" ON "Rezultat posibil actiune".tip_rezultat_id = "Tip rezultat".tip_rezultat_id';

  if (last_id == "start") {
    query += ` ORDER BY "Rezultat posibil actiune".tip_actiune_id LIMIT ${limita};`;
  } else {
    query += ` WHERE "Rezultat posibil actiune".tip_actiune_id > '${last_id}' ORDER BY "Rezultat posibil actiune".tip_actiune_id LIMIT ${limita};`;
  }

  const response = await dataController.performQuery(query);
  return response;
};
