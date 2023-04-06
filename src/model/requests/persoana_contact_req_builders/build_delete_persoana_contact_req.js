const buildDeletePersoanaContactReq = (deletePersoanaContactReqValidator) => {
  return ({ persoana_contact_id } = {}) => {
    let { error } = deletePersoanaContactReqValidator({
      persoana_contact_id,
    });
    if (error) throw new Error(error);

    return {
      getPersoanaContactId: () => persoana_contact_id,
    };
  };
};

module.exports = buildDeletePersoanaContactReq;
