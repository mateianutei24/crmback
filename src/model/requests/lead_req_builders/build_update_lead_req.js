const buildUpdateLeadReq = (updateLeadReqValidator) => {
  return ({ lead_id, companie_id, identificat_de, descriere } = {}) => {
    let { error } = updateLeadReqValidator({
      lead_id,
      companie_id,
      identificat_de,
      descriere,
    });
    if (error) throw new Error(error);

    return {
      getLeadId: () => lead_id,
      getCompanieId: () => companie_id,
      getIdentificatDe: () => identificat_de,
      getDescriere: () => descriere,
    };
  };
};

module.exports = buildUpdateLeadReq;
