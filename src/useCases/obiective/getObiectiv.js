module.exports = async function getNisaUseCase(dataController, requestObject) {
  const response = await dataController.getObject(
    '"Obiectiv"',
    "obiectiv_id",
    requestObject.getObiectivId()
  );
  return response;
};
