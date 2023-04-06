const buildReadPersoanaContactReq = (readPersoanaContactReqValidator) => {
  return ({ persoana_contact_id } = {}) => {
    let { error } = readPersoanaContactReqValidator({
      persoana_contact_id,
    });
    if (error) throw new Error(error);

    return {
      getPersoanaContactId: () => persoana_contact_id,
    };
  };
};

module.exports = buildReadPersoanaContactReq;
