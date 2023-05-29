module.exports = async function addRezultatPosibilActiune(
  dataController,
  requestObject
) {
  const response = await dataController.performQuery(
    `INSERT INTO "Rezultat posibil actiune"(tip_actiune_id,tip_rezultat_id) VALUES($1,$2)`,
    [requestObject.getTipActiuneId(), requestObject.getTipRezultatId()]
  );
  return response;
};
