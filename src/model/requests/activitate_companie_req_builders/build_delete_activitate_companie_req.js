const buildDeleteActivitateCompanieReq = (
  createActivitateCompanieReqValidator
) => {
  return ({ activitate_companie_id } = {}) => {
    let { error } = createActivitateCompanieReqValidator({
      activitate_companie_id,
    });
    if (error) throw new Error(error);

    return {
      getActivitateCompanieId: () => activitate_companie_id,
    };
  };
};

module.exports = buildDeleteActivitateCompanieReq;
