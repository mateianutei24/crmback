module.exports = async function getRezultatePosibileActiune(
  dataController,
  requestObject
) {
  const limita = parseInt(requestObject.paginationObject.getLimita());
  const last_id = requestObject.paginationObject.getLastId();
  const tipActiuneId = requestObject.readTipActiuneReqObject.getTipActiuneId();

  var query = `SELECT * FROM "Rezultat posibil actiune"`;
  query +=
    ' INNER JOIN "Tip actiune" ON "Rezultat posibil actiune".tip_actiune_id = "Tip actiune".tip_actiune_id';
  query +=
    ' INNER JOIN "Tip rezultat" ON "Rezultat posibil actiune".tip_rezultat_id = "Tip rezultat".tip_rezultat_id';

  if (last_id == "start") {
    query += ` WHERE "Rezultat posibil actiune".tip_actiune_id = '${tipActiuneId}'`;
    query += ` ORDER BY "Rezultat posibil actiune".tip_rezultat_id LIMIT ${limita};`;
  } else {
    query += ` WHERE "Rezultat posibil actiune".tip_rezultat_id > '${last_id}' AND "Rezultat posibil actiune".tip_actiune_id = '${tipActiuneId}' ORDER BY "Rezultat posibil actiune".tip_rezultat_id LIMIT ${limita};`;
  }

  const response = await dataController.performQuery(query);
  return response;
};
