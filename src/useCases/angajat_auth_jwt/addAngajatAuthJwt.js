module.exports = async function addAngajatAuthJwtUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"AngajatAuthJwt"(email,hash,salt) VALUES($1,$2,$3)`,
    [requestObject.getEmail(), requestObject.getHash(), requestObject.getSalt()]
  );
  return response;
};
