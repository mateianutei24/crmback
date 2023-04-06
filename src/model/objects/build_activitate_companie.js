const buildActivitateCompanie = (activitateCompanieValidator) => {
  return ({ activitate_companie_id, activitate_companie } = {}) => {
    let { error } = activitateCompanieValidator({
      activitate_companie_id,
      activitate_companie,
    });
    if (error) throw new Error(error);

    return {
      getActivitateCompanieId: () => activitate_companie_id,
      getActivitateCompanie: () => activitate_companie,
    };
  };
};

module.exports = buildActivitateCompanie;
