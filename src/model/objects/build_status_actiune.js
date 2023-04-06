const buildStatusActiune = (statusActiuneValidator) => {
  return ({ status_actiune_id, nume_status_actiune } = {}) => {
    let { error } = statusActiuneValidator({
      status_actiune_id,
      nume_status_actiune,
    });
    if (error) throw new Error(error);

    return {
      getStatusActiuneId: () => status_actiune_id,
      getNumeStatusActiune: () => nume_status_actiune,
    };
  };
};

module.exports = buildStatusActiune;
