const buildDeleteObiectivReq = (deleteObiectivReqValidator) => {
  return ({ obiectiv_id } = {}) => {
    let { error } = deleteObiectivReqValidator({
      obiectiv_id,
    });
    if (error) throw new Error(error);

    return {
      getObiectivId: () => obiectiv_id,
    };
  };
};

module.exports = buildDeleteObiectivReq;
