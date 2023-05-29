module.exports = async function getOportunitateCase(
  dataController,
  requestObject
) {
  const response = await dataController.getObject(
    '"Oportunitate"',
    "oportunitate_id",
    requestObject.getOportunitateId()
  );
  return response;
};
