const buildOportunitate = (oportunitateValidator) => {
  return ({
    oportunitate_id,
    descriere,
    titlu_oportunitate,
    data_creare_initiala,
    data_emitere,
    perioada_desfasurare,
    data_limita,
    obiectiv_id,
    identificat_de,
    vanzari_totale,
  } = {}) => {
    let { error } = oportunitateValidator({
      oportunitate_id,
      descriere,
      titlu_oportunitate,
      data_creare_initiala,
      data_emitere,
      perioada_desfasurare,
      data_limita,
      obiectiv_id,
      identificat_de,
      vanzari_totale,
    });
    if (error) throw new Error(error);

    return {
      getOportunitateId: () => oportunitate_id,
      getDescriere: () => descriere,
      getTitluOportunitate: () => titlu_oportunitate,
      getDataCreareInitiala: () => data_creare_initiala,
      getDataEmitere: () => data_emitere,
      getPerioadaDesfasurare: () => perioada_desfasurare,
      getVanzariTotale: () => vanzari_totale,
      getDataLimita: () => data_limita,
      getObiectivId: () => obiectiv_id,
      getIdentificatDe: () => identificat_de,
      getVanzariTotale: () => vanzari_totale,
    };
  };
};

module.exports = buildOportunitate;
