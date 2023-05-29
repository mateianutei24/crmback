module.exports = async function deleteRezultatPosibilActiune(
  dataController,
  requestObject
) {
  const response = await dataController.performQuery(
    `DELETE FROM "Rezultat posibil actiune" WHERE (tip_rezultat_id= $1 AND tip_actiune_id= $2)`,
    [requestObject.getTipRezultatId(), requestObject.getTipActiuneId()]
  );
  return response;
};
