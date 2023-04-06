const buildDeleteNisaReq = (deleteNisaReqValidator) => {
  return ({ nisa_id } = {}) => {
    let { error } = deleteNisaReqValidator({
      nisa_id,
    });
    if (error) throw new Error(error);

    return {
      getNisaId: () => nisa_id,
    };
  };
};

module.exports = buildDeleteNisaReq;
