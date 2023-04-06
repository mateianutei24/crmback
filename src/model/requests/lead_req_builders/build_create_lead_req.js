const buildCreateLeadReq = (createLeadReqValidator) => {
  return ({ companie_id, identificat_de, descriere } = {}) => {
    let { error } = createLeadReqValidator({
      companie_id,
      identificat_de,
      descriere,
    });
    if (error) throw new Error(error);

    return {
      getCompanieId: () => companie_id,
      getIdentificatDe: () => identificat_de,
      getDescriere: () => descriere,
    };
  };
};

module.exports = buildCreateLeadReq;
