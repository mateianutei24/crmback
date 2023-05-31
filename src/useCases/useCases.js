module.exports = function useCases(dataController) {
  //companie use Cases imports
  const readCompanie = require("./companie/getCompanie");
  const getCompaniiPagination = require("./companie/getCompaniiPagination");
  const addCompanie = require("./companie/addCompanie");
  const deleteCompanie = require("./companie/deleteCompanie");
  const updateCompanie = require("./companie/updateCompanie");

  //puncte de lucru use cases imports
  const addPunctLucru = require("./punct_de_lucru/addPunctLucru");
  const readPunctLucru = require("./punct_de_lucru/getPunctLucru");
  const getPuncteLucruPagination = require("./punct_de_lucru/getPuncteLucruPagination");
  const updatePunctLucru = require("./punct_de_lucru/updatePunctLucru");
  const deletePunctLucru = require("./punct_de_lucru/deletePunctLucru");

  //functii angajati use cases imports
  const addFunctieAngajat = require("./functii_angajati/addFunctieAngajat");
  const readFunctieAngajat = require("./functii_angajati/getFunctieAngajat");
  const updateFunctieAngajat = require("./functii_angajati/updateFunctieAngajat");
  const deleteFunctieAngajat = require("./functii_angajati/deleteFunctieAngajat");
  const getFunctiiAngajatiPagination = require("./functii_angajati/getFunctiiAngajatiPagination");

  // tipuri angajati use cases imports
  const addTipAngajat = require("./tipuri_angajati/addTipAngajat");
  const readTipAngajat = require("./tipuri_angajati/getTipAngajat");
  const updateTipAngajat = require("./tipuri_angajati/updateTipAngajat");
  const deleteTipAngajat = require("./tipuri_angajati/deleteTipAngajat");
  const getTipuriAngajatiPagination = require("./tipuri_angajati/getTipuriAngajatiPagination");

  //angati use cases import
  const addAngajat = require("./angajat/addAngajat");
  const getAngajat = require("./angajat/getAngajat");
  const getAngajatiPagination = require("./angajat/getAngajatiPagination");
  const updateAngajat = require("./angajat/updateAngajat");
  const deleteAngajat = require("./angajat/deleteAngajat");

  //tipuri actiune use cases
  const addTipActiune = require("./tip_actiune/addTipActiune");
  const getTipActiune = require("./tip_actiune/getTipActiune");
  const getTipuriActiuniPagination = require("./tip_actiune/getTipuriActiuniPagination");
  const updateTipActiune = require("./tip_actiune/updateTipActiune");
  const deleteTipActiune = require("./tip_actiune/deleteTipActiune");

  //tipuri rezultat use cases
  const addTipRezultat = require("./tip_rezultat/addTipRezultat");
  const getTipRezultat = require("./tip_rezultat/getTipRezultat");
  const getTipuriRezultatePagination = require("./tip_rezultat/getTipuriRezultatePagination");
  const updateTipRezultat = require("./tip_rezultat/updateTipRezultat");
  const deleteTipRezultat = require("./tip_rezultat/deleteTipRezultat");

  //rezultate posibile actiuni use cases
  const addRezultatPosibilActiune = require("./rezultate_posibile_actiuni/addRezultatPosibilActiune");
  const getRezultatePosibileActiune = require("./rezultate_posibile_actiuni/getRezultatePosibileActiune");
  const getRezultatePosibileActiuniPagination = require("./rezultate_posibile_actiuni/getRezultatePosibileActiuniPagination");
  const deleteRezultatPosibilActiune = require("./rezultate_posibile_actiuni/deleteRezultatPosibilActiune");
  const getRezultatPosibilActiune = require("./rezultate_posibile_actiuni/getRezultatPosibilActiune");

  //statusuri actiune use cases
  const getStatusActiune = require("./status_actiune/getStatusActiune");
  const addStatusActiune = require("./status_actiune/addStatusActiune");
  const updateStatusActiune = require("./status_actiune/updateStatusActiune");
  const deleteStatusActiune = require("./status_actiune/deleteStatusActiune");
  const getStatusuriActiune = require("./status_actiune/getStatusuriActiunePagination");

  //nise use cases
  const getNisa = require("./nisa/getNisa");
  const addNisa = require("./nisa/addNisa");
  const updateNisa = require("./nisa/updateNisa");
  const deleteNisa = require("./nisa/deleteNisa");
  const getNisePagination = require("./nisa/getNisePagination");

  //marime companie use cases
  const addMarimeCompanie = require("./marime_companie/addMarimeCompanie");
  const getMarimeCompanie = require("./marime_companie/getMarimeCompanie");
  const updateMarimeCompanie = require("./marime_companie/updateMarimeCompanie");
  const deleteMarimeCompanie = require("./marime_companie/deleteMarimeCompanie");
  const getMarimiCompaniePagination = require("./marime_companie/getMarimiCompaniePagination");

  // activitate companie use cases
  const addActivitateCompanie = require("./activitate_companie/addActivitateCompanie");
  const getActivitateCompanie = require("./activitate_companie/getActivitateCompanie");
  const updateActivitateCompanie = require("./activitate_companie/updateActivitateCompanie");
  const deleteActivitateCompanie = require("./activitate_companie/deleteActivitateCompanie");
  const getActivitatiCompaniePagination = require("./activitate_companie/getActivitatiCompaniePagination");

  //leaduri companie use cases
  const addLead = require("./lead/addLead");
  const getLead = require("./lead/readLead");
  const updateLead = require("./lead/updateLead");
  const deleteLead = require("./lead/deleteLead");
  const getLeadsPagination = require("./lead/getLeadsPagination");

  // persoana contact use cases
  const addPersoanaContact = require("./persoana_de_contact/addPersoanaContact");
  const getPersoanaContact = require("./persoana_de_contact/getPersoanaContact");
  const updatePersoanaContact = require("./persoana_de_contact/updatePersoanaContact");
  const deletePersoanaContact = require("./persoana_de_contact/deletePersoanaContact");
  const getPersoaneContactCompaniePagination = require("./persoana_de_contact/getPersoaneContactCompaniePagination");
  const getPersoaneContactPagination = require("./persoana_de_contact/getPersoaneContactPagination");

  //tip obiectiv use cases
  const addTipObiectiv = require("./tipuri_obiective/addTipObiectiv");
  const getTipObiectiv = require("./tipuri_obiective/getTipObiectiv");
  const updateTipObiectiv = require("./tipuri_obiective/updateTipObiectiv");
  const deleteTipObiectiv = require("./tipuri_obiective/deleteTipObiectiv");
  const getTipuriObiectivPagination = require("./tipuri_obiective/getTipuriObiectivPagination");

  //obiectiv use cases
  const addObiectiv = require("./obiective/addObiectiv");
  const getObiectiv = require("./obiective/getObiectiv");
  const updateObiectiv = require("./obiective/updateObiectiv");
  const deleteObiectiv = require("./obiective/deleteObiectiv");
  const getObiectivePagination = require("./obiective/getObiectivePagination");

  //tip oportunitate use cases
  const addTipOportunitate = require("./tipuri_oportunitati/addTipOportunitate");
  const getTipOportunitate = require("./tipuri_oportunitati/getTipOportunitate");
  const updateTipOportunitate = require("./tipuri_oportunitati/updateTipOportunitate");
  const deleteTipOportunitate = require("./tipuri_oportunitati/deleteTipOportunitte");
  const getTipuriOportunitatePagination = require("./tipuri_oportunitati/getTipuriOportunitatePagination");

  //oportunitate use cases
  const addOportunitate = require("./oportunitati/addOportunitate");
  const getOportunitate = require("./oportunitati/getOportunitate");
  const updateOportunitate = require("./oportunitati/updateOportunitate");
  const deleteOportunitate = require("./oportunitati/deleteOportunitate");
  const getOportunitatiPagination = require("./oportunitati/getOportunitatiPagination");

  // produse use cases
  const addProdus = require("./produse/addProdus");
  const getProdus = require("./produse/getProdus");
  const updateProdus = require("./produse/updateProdus");
  const deleteProdus = require("./produse/deleteProdus");
  const getProdusePagination = require("./produse/getProdusePagination");

  //vanzare use cases
  const addVanzare = require("./vanzari/addVanzare");
  const getVanzare = require("./vanzari/getVanzare");
  const updateVanzare = require("./vanzari/updateVanzare");
  const deleteVanzare = require("./vanzari/deleteVanzare");
  const getVanzariPagination = require("./vanzari/getVanzariPagination");

  //actiune use cases
  const addActiune = require("./actiuni/addActiune");
  const getActiune = require("./actiuni/getActiune");
  const updateActiune = require("./actiuni/updateActiune");
  const deleteActiune = require("./actiuni/deleteActiune");
  const getActiuniPagination = require("./actiuni/getActiuniPagination");

  //rezultat use cases
  const addRezultat = require("./rezultate_actiuni/addRezultatActiune");
  const getRezultat = require("./rezultate_actiuni/getRezultatActiune");
  const updateRezultat = require("./rezultate_actiuni/updateRezultatActiune");
  const deleteRezultat = require("./rezultate_actiuni/deleteRezultatActiune");
  const getRezultatePagination = require("./rezultate_actiuni/getRezultateActiunePagination");
  const getRezultateForActiunePagination = require("./rezultate_actiuni/getRezultateForActiunePagination");

  //auth use cases
  const addAngajatAuthJwt = require("./angajat_auth_jwt/addAngajatAuthJwt");
  const getAngajatAuthJwt = require("./angajat_auth_jwt/getAngajatAuthJwt");
  return {
    // use cases pentru companii
    readCompanieUseCase: (requestObject) =>
      readCompanie(dataController, requestObject),
    getCompaniiPaginationUseCase: (requestObject) =>
      getCompaniiPagination(dataController, requestObject),
    addCompanieUseCase: (requestObject) =>
      addCompanie(dataController, requestObject),
    deleteCompanieUseCase: (requestObject) =>
      deleteCompanie(dataController, requestObject),
    updateCompanieUseCase: (requestObject) =>
      updateCompanie(dataController, requestObject),

    //use cases pentru puncte de lucru

    addPunctLucruUseCase: (requestObject) =>
      addPunctLucru(dataController, requestObject),
    readPunctLucruUseCase: (requestObject) =>
      readPunctLucru(dataController, requestObject),
    getPuncteLucruPaginationUseCase: (requestObject) =>
      getPuncteLucruPagination(dataController, requestObject),
    updatePunctLucruUseCase: (requestObject) =>
      updatePunctLucru(dataController, requestObject),
    deletePunctLucruUseCase: (requestObject) =>
      deletePunctLucru(dataController, requestObject),

    //use cases pentru tipuri angajati

    addTipAngajatUseCase: (requestObject) =>
      addTipAngajat(dataController, requestObject),
    readTipAngajatUseCase: (requestObject) =>
      readTipAngajat(dataController, requestObject),
    updateTipAngajatUseCase: (requestObject) =>
      updateTipAngajat(dataController, requestObject),
    deleteTipAngajatUseCase: (requestObject) =>
      deleteTipAngajat(dataController, requestObject),
    getTipuriAngajatiPaginationUseCase: (requestObject) =>
      getTipuriAngajatiPagination(dataController, requestObject),

    //use cases pentru functii angajati
    addFunctieAngajatUseCase: (requestObject) =>
      addFunctieAngajat(dataController, requestObject),
    readFunctieAngajatUseCase: (requestObject) =>
      readFunctieAngajat(dataController, requestObject),
    updateFunctieAngajatUseCase: (requestObject) =>
      updateFunctieAngajat(dataController, requestObject),
    deleteFunctieAngajatUseCase: (requestObject) =>
      deleteFunctieAngajat(dataController, requestObject),
    getFunctiiAngajatiPaginationUseCase: (requestObject) =>
      getFunctiiAngajatiPagination(dataController, requestObject),

    // use cases pentru angajati
    addAngajatUseCase: (requestObject) =>
      addAngajat(dataController, requestObject),
    readAngajatUseCase: (requestObject) =>
      getAngajat(dataController, requestObject),
    updateAngajatUseCase: (requestObject) =>
      updateAngajat(dataController, requestObject),
    deleteAngajatUseCase: (requestObject) =>
      deleteAngajat(dataController, requestObject),
    getAngajatiPaginationUseCase: (requestObject) =>
      getAngajatiPagination(dataController, requestObject),

    //use cases pentru tipuri actiune
    addTipActiuneUseCase: (requestObject) =>
      addTipActiune(dataController, requestObject),
    readTipActiuneUseCase: (requestObject) =>
      getTipActiune(dataController, requestObject),
    getTipuriActiuniPaginationUseCase: (requestObject) =>
      getTipuriActiuniPagination(dataController, requestObject),
    updateTipActiuneUseCase: (requestObject) =>
      updateTipActiune(dataController, requestObject),
    deleteTipActiuneUseCase: (requestObject) =>
      deleteTipActiune(dataController, requestObject),

    //use cases pentru tipuri rezultat
    addTipRezultatUseCase: (requestObject) =>
      addTipRezultat(dataController, requestObject),
    getTipRezultatUseCase: (requestObject) =>
      getTipRezultat(dataController, requestObject),
    getTipuriRezultatePaginationUseCase: (requestObject) =>
      getTipuriRezultatePagination(dataController, requestObject),
    updateTipRezultatUseCase: (requestObject) =>
      updateTipRezultat(dataController, requestObject),
    deleteTipRezultatUseCase: (requestObject) =>
      deleteTipRezultat(dataController, requestObject),

    // use cases pentru rezultate posibile actiuni
    addRezultatPosibilActiuneUseCase: (requestObject) =>
      addRezultatPosibilActiune(dataController, requestObject),
    getRezultatePosibileActiuneUseCase: (requestObject) =>
      getRezultatePosibileActiune(dataController, requestObject),
    getRezultatePosibileActiuniPaginationUseCase: (requestObject) =>
      getRezultatePosibileActiuniPagination(dataController, requestObject),
    deleteRezultatPosibilActiuneUseCase: (requestObject) =>
      deleteRezultatPosibilActiune(dataController, requestObject),
    getRezultatPosibilActiuneUseCase: (requestObject) =>
      getRezultatPosibilActiune(dataController, requestObject),

    //use cases pentru statusuri actiune
    readStatusActiuneUseCase: (requestObject) =>
      getStatusActiune(dataController, requestObject),
    addStatusActiuneUseCase: (requestObject) =>
      addStatusActiune(dataController, requestObject),
    updateStatusActiuneUseCase: (requestObject) =>
      updateStatusActiune(dataController, requestObject),
    deleteStatusActiuneUseCase: (requestObject) =>
      deleteStatusActiune(dataController, requestObject),
    getStatusuriActiunePaginationUseCase: (requestObject) =>
      getStatusuriActiune(dataController, requestObject),

    //use cases pentru nise
    readNisaUseCase: (requestObject) => getNisa(dataController, requestObject),
    addNisaUseCase: (requestObject) => addNisa(dataController, requestObject),
    updateNisaUseCase: (requestObject) =>
      updateNisa(dataController, requestObject),
    deleteNisaUseCase: (requestObject) =>
      deleteNisa(dataController, requestObject),
    getNisePaginationUseCase: (requestObject) =>
      getNisePagination(dataController, requestObject),

    //use cases pentru marime companii
    addMarimeCompanieUseCase: (requestObject) =>
      addMarimeCompanie(dataController, requestObject),
    readMarimeCompanieUseCase: (requestObject) =>
      getMarimeCompanie(dataController, requestObject),
    updateMarimeCompanieUseCase: (requestObject) =>
      updateMarimeCompanie(dataController, requestObject),
    deleteMarimeCompanieUseCase: (requestObject) =>
      deleteMarimeCompanie(dataController, requestObject),
    getMarimiCompaniePaginationUseCase: (requestObject) =>
      getMarimiCompaniePagination(dataController, requestObject),

    //use cases pentru activitate companii
    getActivitateCompanieUseCase: (requestObject) =>
      getActivitateCompanie(dataController, requestObject),
    addActivitateCompanieUseCase: (requestObject) =>
      addActivitateCompanie(dataController, requestObject),
    updateActivitateCompanieUseCase: (requestObject) =>
      updateActivitateCompanie(dataController, requestObject),
    deleteActivitateCompanieUseCase: (requestObject) =>
      deleteActivitateCompanie(dataController, requestObject),
    getActivitatiCompaniePaginationUseCase: (requestObject) =>
      getActivitatiCompaniePagination(dataController, requestObject),

    //use cases pentru leads
    addLeadUseCase: (requestObject) => addLead(dataController, requestObject),
    readLeadUseCase: (requestObject) => getLead(dataController, requestObject),
    updateLeadUseCase: (requestObject) =>
      updateLead(dataController, requestObject),
    deleteLeadUseCase: (requestObject) =>
      deleteLead(dataController, requestObject),
    getLeadsPaginationUseCase: (requestObject) =>
      getLeadsPagination(dataController, requestObject),

    //persoana contact use cases
    addPersoanaContactUseCase: (requestObject) =>
      addPersoanaContact(dataController, requestObject),
    readPersoanaContactUseCase: (requestObject) =>
      getPersoanaContact(dataController, requestObject),
    updatePersoanaContactUseCase: (requestObject) =>
      updatePersoanaContact(dataController, requestObject),
    deleteTipObiectivUseCase: (requestObject) =>
      deleteTipObiectiv(dataController, requestObject),
    getPersoaneContactCompaniePaginationUseCase: (requestObject) =>
      getPersoaneContactCompaniePagination(dataController, requestObject),
    getPersoaneContactPaginationUseCase: (requestObject) =>
      getPersoaneContactPagination(dataController, requestObject),

    //tipuri obiectiv use cases
    addTipObiectivUseCase: (requestObject) =>
      addTipObiectiv(dataController, requestObject),
    readTipObiectivUseCase: (requestObject) =>
      getTipObiectiv(dataController, requestObject),
    updateTipObiectivUseCase: (requestObject) =>
      updateTipObiectiv(dataController, requestObject),
    deleteTipObiectivUseCase: (requestObject) =>
      deleteTipObiectiv(dataController, requestObject),
    getTipuriObiectivPaginationUseCase: (requestObject) =>
      getTipuriObiectivPagination(dataController, requestObject),

    // obiective use cases
    addObiectivUseCase: (requestObject) =>
      addObiectiv(dataController, requestObject),
    readObiectivUseCase: (requestObject) =>
      getObiectiv(dataController, requestObject),
    updateObiectivUseCase: (requestObject) =>
      updateObiectiv(dataController, requestObject),
    deleteObiectivUseCase: (requestObject) =>
      deleteObiectiv(dataController, requestObject),
    getObiectivePaginationCase: (requestObject) =>
      getObiectivePagination(dataController, requestObject),

    //tip oportunitate use cases
    addTipOportunitateUseCase: (requestObject) =>
      addTipOportunitate(dataController, requestObject),
    readTipOportunitateUseCase: (requestObject) =>
      getTipOportunitate(dataController, requestObject),
    updateTipOportunitateUseCase: (requestObject) =>
      updateTipOportunitate(dataController, requestObject),
    deleteTipOportunitateUseCase: (requestObject) =>
      deleteTipOportunitate(dataController, requestObject),
    getObiectivePaginationCase: (requestObject) =>
      getTipuriOportunitatePagination(dataController, requestObject),

    // oportunitate use cases
    addOportunitateUseCase: (requestObject) =>
      addOportunitate(dataController, requestObject),
    readOportunitateUseCase: (requestObject) =>
      getOportunitate(dataController, requestObject),
    updateOportunitateUseCase: (requestObject) =>
      updateOportunitate(dataController, requestObject),
    deleteOportunitateUseCase: (requestObject) =>
      deleteOportunitate(dataController, requestObject),
    getOportunitatiPaginationUseCase: (requestObject) =>
      getOportunitatiPagination(dataController, requestObject),

    //produs use cases
    addProdusUseCase: (requestObject) =>
      addProdus(dataController, requestObject),
    readProdusUseCase: (requestObject) =>
      getProdus(dataController, requestObject),
    updateProdusUseCase: (requestObject) =>
      updateProdus(dataController, requestObject),
    deleteProdusUseCase: (requestObject) =>
      deleteProdus(dataController, requestObject),
    getProdusePaginationUseCase: (requestObject) =>
      getProdusePagination(dataController, requestObject),

    // vanzare use cases
    addVanzareUseCase: (requestObject) =>
      addVanzare(dataController, requestObject),
    readVanzareUseCase: (requestObject) =>
      getVanzare(dataController, requestObject),
    updateVanzareUseCase: (requestObject) =>
      updateVanzare(dataController, requestObject),
    deleteVanzareUseCase: (requestObject) =>
      deleteVanzare(dataController, requestObject),
    getVanzariPaginationUseCase: (requestObject) =>
      getVanzariPagination(dataController, requestObject),

    // actiune use cases
    addActiuneUseCase: (requestObject) =>
      addActiune(dataController, requestObject),
    readActiuneUseCase: (requestObject) =>
      getActiune(dataController, requestObject),
    updateActiuneUseCase: (requestObject) =>
      updateActiune(dataController, requestObject),
    deleteActiuneUseCase: (requestObject) =>
      deleteActiune(dataController, requestObject),
    getActiuniPaginationUseCase: (requestObject) =>
      getActiuniPagination(dataController, requestObject),

    // rezultate actiune use cases
    addRezultatUseCase: (requestObject) =>
      addRezultat(dataController, requestObject),
    readRezultatUseCase: (requestObject) =>
      getRezultat(dataController, requestObject),
    updateRezultatUseCase: (requestObject) =>
      updateRezultat(dataController, requestObject),
    deleteRezultatUseCase: (requestObject) =>
      deleteRezultat(dataController, requestObject),
    getRezultatePaginationUseCase: (requestObject) =>
      getRezultatePagination(dataController, requestObject),
    getRezultateForActiunePaginationUseCase: (requestObject) =>
      getRezultateForActiunePagination(dataController, requestObject),

    //auth use cases
    addAngajatAuthUseCase: (requestObject) =>
      addAngajatAuthJwt(dataController, requestObject),
    getAngajatAuthUseCase: (requestObject) =>
      getAngajatAuthJwt(dataController, requestObject),
  };
};
