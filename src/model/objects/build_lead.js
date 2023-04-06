const buildLead = (leadValidator) => {
  return ({ lead_id, companie_id, identificat_de, descriere } = {}) => {
    let { error } = leadValidator({
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

module.exports = buildLead;
