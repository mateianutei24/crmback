const buildCreateAngajatAuthJwtReq = (createAngajatAuthJwtReqValidator) => {
  return ({ email, salt, hash } = {}) => {
    let { error } = createAngajatAuthJwtReqValidator({
      email,
      salt,
      hash,
    });
    if (error) throw new Error(error);

    return {
      getEmail: () => email,
      getSalt: () => salt,
      getHash: () => hash,
    };
  };
};

module.exports = buildCreateAngajatAuthJwtReq;
