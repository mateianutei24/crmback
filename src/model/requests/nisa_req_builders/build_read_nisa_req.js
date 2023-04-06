const buildReadNisaReq = (readNisaReqValidator) => {
  return ({ nisa_id } = {}) => {
    let { error } = readNisaReqValidator({
      nisa_id,
    });
    if (error) throw new Error(error);

    return {
      getNisaId: () => nisa_id,
    };
  };
};

module.exports = buildReadNisaReq;
