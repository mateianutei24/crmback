const buildReadObiectivReq = (readObiectivReqValidator) => {
  return ({ obiectiv_id } = {}) => {
    let { error } = readObiectivReqValidator({
      obiectiv_id,
    });
    if (error) throw new Error(error);

    return {
      getObiectivId: () => obiectiv_id,
    };
  };
};

module.exports = buildReadObiectivReq;
