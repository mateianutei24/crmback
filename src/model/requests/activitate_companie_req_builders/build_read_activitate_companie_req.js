const buildReadActivitateCompanieReq = (readActivitateCompanieReqValidator) => {
  return ({ activitate_companie_id } = {}) => {
    let { error } = readActivitateCompanieReqValidator({
      activitate_companie_id,
    });
    if (error) throw new Error(error);

    return {
      getActivitateCompanieId: () => activitate_companie_id,
    };
  };
};

module.exports = buildReadActivitateCompanieReq;
