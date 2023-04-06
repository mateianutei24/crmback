const buildCreateActivitateCompanieReq = (
  createActivitateCompanieReqValidator
) => {
  return ({ activitate_companie } = {}) => {
    let { error } = createActivitateCompanieReqValidator({
      activitate_companie,
    });
    if (error) throw new Error(error);

    return {
      getActivitateCompanie: () => activitate_companie,
    };
  };
};

module.exports = buildCreateActivitateCompanieReq;
