const buildCreateStatusActiuneReq = (createStatusActiuneReqValidator) => {
  return ({ nume_status_actiune } = {}) => {
    let { error } = createStatusActiuneReqValidator({
      nume_status_actiune,
    });
    if (error) throw new Error(error);

    return {
      getNumeStatusActiune: () => nume_status_actiune,
    };
  };
};

module.exports = buildCreateStatusActiuneReq;
