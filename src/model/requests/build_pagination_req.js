const buildPaginationReq = (paginationRequestValidator) => {
  return ({ limita, last_id } = {}) => {
    let { error } = paginationRequestValidator({
      limita,
      last_id,
    });
    if (error) throw new Error(error);

    return {
      getLimita: () => limita,
      getLastId: () => last_id,
    };
  };
};

module.exports = buildPaginationReq;
