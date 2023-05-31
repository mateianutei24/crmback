module.exports = async function getAngajatAuthJwtUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"AngajatAuthJwt"',
    "email",
    requestObject.getAngajatId()
  );
  return response;
};
