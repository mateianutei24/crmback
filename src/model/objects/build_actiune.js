const buildActiune = (actiuneValidator) => {
  return ({
    actiune_id,
    tip_actiune,
    status,
    receptor_id,
    emitator_id,
    descriere,
    data_creare_initiala,
    data_emitere,
    due_date,
    oportunitate_id,
  } = {}) => {
    let { error } = actiuneValidator({
      actiune_id,
      tip_actiune,
      status,
      receptor_id,
      emitator_id,
      descriere,
      data_creare_initiala,
      data_emitere,
      due_date,
      oportunitate_id,
    });
    if (error) throw new Error(error);

    return {
      getActiuneId: () => actiune_id,
      getTipActiune: () => tip_actiune,
      getStatus: () => status,
      getReceptorId: () => receptor_id,
      getEmitatorId: () => emitator_id,
      getDescriere: () => descriere,
      getDataCreareInitiala: () => data_creare_initiala,
      getDataEmitere: () => data_emitere,
      getDataLimita: () => due_date,
      getOportunitateId: () => oportunitate_id,
    };
  };
};

module.exports = buildActiune;
