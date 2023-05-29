module.exports = function modelImplementation(validators) {
  // BUILDERS FOR OBJECTS
  const buildActiune = require("./objects/build_actiune");
  const buildActivitateCompanie = require("./objects/build_activitate_companie");
  const buildAngajat = require("./objects/build_angajat");
  const buildCompanie = require("./objects/build_companie");
  const buildLead = require("./objects/build_lead");
  const buildMarimeCompanie = require("./objects/build_marime_companie");
  const buildNisa = require("./objects/build_nisa");
  const buildObiectiv = require("./objects/build_obiectiv");
  const buildOportunitate = require("./objects/build_oportunitate");
  const buildPersoanaContact = require("./objects/build_persoana_contact");
  const buildProdus = require("./objects/build_produs");
  const buildPunctLucru = require("./objects/build_punct_lucru");
  const buildRezultatActiune = require("./objects/build_rezultat_actiune");
  const buildTipActiune = require("./objects/build_tip_actiune");
  const buildTipRezultatActiune = require("./objects/build_tip_rezultat_actiune");
  const buildVanzare = require("./objects/build_vanzare");
  const buildTipAngajat = require("./objects/build_tip_angajat");
  const buildFunctieAngajat = require("./objects/build_functie_angajat");
  const buildMatchTipRezultatTipActiune = require("./objects/build_match_tip_rezultat_tip_actiune");
  const buildStatusActiune = require("./objects/build_status_actiune");
  const buildTipOportunitate = require("./objects/build_tip_oportunitate");

  // ACTIUNE REQUEST BUILDERS
  const buildCreateActiuneReq = require("./requests/actiune_req_builders/build_create_actiune_req");
  const buildReadActiuneReq = require("./requests/actiune_req_builders/build_read_actiune_req");
  const buildUpdateActiuneReq = require("./requests/actiune_req_builders/build_update_actiune_req");
  const buildDeleteActiuneReq = require("./requests/actiune_req_builders/build_delete_actiune_req");

  // ACTIVITATE COMPANIE REQ BUILDERS
  const buildCreateActivitateCompanieReq = require("./requests/activitate_companie_req_builders/build_create_activitate_companie_req");
  const buildReadActivitateCompanieReq = require("./requests/activitate_companie_req_builders/build_read_activitate_companie_req");
  const buildUpdateActivitateCompanieReq = require("./requests/activitate_companie_req_builders/build_update_activitate_companie_req");
  const buildDeleteActivitateCompanieReq = require("./requests/activitate_companie_req_builders/build_delete_activitate_companie_req");

  // ANGAJAT REQUEST BUILDERS
  const buildCreateAngajatReq = require("./requests/angajat_req_builders/build_create_angajat_req");
  const buildReadAngajatReq = require("./requests/angajat_req_builders/build_read_angajat_req");
  const buildUpdateAngajatReq = require("./requests/angajat_req_builders/build_update_angajat_req");
  const buildDeleteAngajatReq = require("./requests/angajat_req_builders/build_delete_angajat_req");

  // COMPANIE REQUEST BUILDERS
  const buildCreateCompanieReq = require("./requests/companie_req_builders/build_create_companie_req");
  const buildReadCompanieReq = require("./requests/companie_req_builders/build_read_companie_req");
  const buildUpdateCompanieReq = require("./requests/companie_req_builders/build_update_companie_req");
  const buildDeleteCompanieReq = require("./requests/companie_req_builders/build_delete_companie_req");

  // LEAD REQUEST BUILDERS
  const buildCreateLeadReq = require("./requests/lead_req_builders/build_create_lead_req");
  const buildReadLeadReq = require("./requests/lead_req_builders/build_read_lead_req");
  const buildUpdateLeadReq = require("./requests/lead_req_builders/build_update_lead_req");
  const buildDeleteLeadReq = require("./requests/lead_req_builders/build_delete_lead_req");

  //MARIME COMPANIE REQUEST BUILDERS
  const buildCreateMarimeCompanieReq = require("./requests/marime_companie_req_builders/build_create_marime_companie_req");
  const buildReadMarimeCompanieReq = require("./requests/marime_companie_req_builders/build_read_marime_companie_req");
  const buildUpdateMarimeCompanieReq = require("./requests/marime_companie_req_builders/build_update_marime_companie_req");
  const buildDeleteMarimeCompanieReq = require("./requests/marime_companie_req_builders/build_delete_marime_companie_req");

  // NISA REQUEST BUILDERS
  const buildCreateNisaReq = require("./requests/nisa_req_builders/build_create_nisa_req");
  const buildReadNisaReq = require("./requests/nisa_req_builders/build_read_nisa_req");
  const buildUpdateNisaReq = require("./requests/nisa_req_builders/build_update_nisa_req");
  const buildDeleteNisaReq = require("./requests/nisa_req_builders/build_delete_nisa_req");

  //OBIECTIV REQUEST BUILDERS
  const buildCreateObiectivReq = require("./requests/obiectiv_req_builders/build_create_obiectiv_req");
  const buildReadObiectivReq = require("./requests/obiectiv_req_builders/build_read_obiectiv_req");
  const buildUpdateObiectivReq = require("./requests/obiectiv_req_builders/build_update_obiectiv_req");
  const buildDeleteObiectivReq = require("./requests/obiectiv_req_builders/build_delete_obiectiv_req");

  //OPORTUNITATE REQUEST BUILDERS
  const buildCreateOportunitateReq = require("./requests/oportunitate_req_buildres/build_create_oportunitate_req");
  const buildReadOportunitateReq = require("./requests/oportunitate_req_buildres/build_read_oportunitate_req");
  const buildUpdateOportunitateReq = require("./requests/oportunitate_req_buildres/build_update_oportunitate_req");
  const buildDeleteOportunitateReq = require("./requests/oportunitate_req_buildres/build_delete_oportunitate_req");

  // PERSOANA CONTACT REQUEST BUILDERS
  const buildCreatePersoanaContactReq = require("./requests/persoana_contact_req_builders/build_create_persoana_contact_req");
  const buildReadPersoanaContactReq = require("./requests/persoana_contact_req_builders/build_read_persoana_contact_req");
  const buildUpdatePersoanaContactReq = require("./requests/persoana_contact_req_builders/build_update_persoana_contact_req");
  const buildDeletePersoanaContactReq = require("./requests/persoana_contact_req_builders/build_delete_persoana_contact_req");

  // PRODUS REQUEST BUILDERS
  const buildCreateProdusReq = require("./requests/produs_req_builders/build_create_produs_req");
  const buildReadProdusReq = require("./requests/produs_req_builders/build_read_produs_req");
  const buildUpdateProdusReq = require("./requests/produs_req_builders/build_update_produs_req");
  const buildDeleteProdusReq = require("./requests/produs_req_builders/build_delete_produs_req");

  // PUNCT LUCRU REQ BUILDERS
  const buildCreatePunctLucruReq = require("./requests/punct_lucru_builders/build_create_punct_lucru_req");
  const buildReadPunctLucruReq = require("./requests/punct_lucru_builders/build_read_punct_lucru_req");
  const buildUpdatePunctLucruReq = require("./requests/punct_lucru_builders/build_update_punct_lucru_req");
  const buildDeletePunctLucruReq = require("./requests/punct_lucru_builders/build_delete_punct_lucru_req");

  //REZULTAT ACTIUNE REQ BUILDERS
  const buildCreateRezultatActiuneReq = require("./requests/rezultat_actiune_builders/build_create_rezultat_actiune_req");
  const buildReadRezultatActiuneReq = require("./requests/rezultat_actiune_builders/build_read_rezultat_actiune_req");
  const buildUpdateRezultatActiuneReq = require("./requests/rezultat_actiune_builders/build_update_rezultat_actiune_req");
  const buildDeleteRezultatActiuneReq = require("./requests/rezultat_actiune_builders/build_delete_rezultat_actiune_req");

  //TIP ACTIUNE REQ BUILDERS
  const buildCreateTipActiuneReq = require("./requests/tip_actiune_builders/build_create_tip_actiune_req");
  const buildReadTipActiuneReq = require("./requests/tip_actiune_builders/build_read_tip_actiune_req");
  const buildUpdateTipActiuneReq = require("./requests/tip_actiune_builders/build_update_tip_actiune_req");
  const buildDeleteTipActiuneReq = require("./requests/tip_actiune_builders/build_delete_tip_actiune_req");

  // TIP REZULTAT ACTIUNE REQ BUILDERS

  const buildCreateTipRezultatActiuneReq = require("./requests/tip_rezultat_actiune_builders/build_create_tip_rezultat_actiune_req");
  const buildReadTipRezultatActiuneReq = require("./requests/tip_rezultat_actiune_builders/build_read_tip_rezultat_actiune_req");
  const buildUpdateTipRezultatActiuneReq = require("./requests/tip_rezultat_actiune_builders/build_update_tip_rezultat_actiune_req");
  const buildDeleteTipRezultatActiuneReq = require("./requests/tip_rezultat_actiune_builders/build_delete_tip_rezultat_actiune_req");

  //VANZARE REQ BUILDERS
  const buildCreateVanzareReq = require("./requests/vanzare_req_builders/build_create_vanzare_req");
  const buildReadVanzareReq = require("./requests/vanzare_req_builders/build_read_vanzare_req");
  const buildUpdateVanzareReq = require("./requests/vanzare_req_builders/build_update_vanzare_req");
  const buildDeleteVanzareReq = require("./requests/vanzare_req_builders/build_delete_vanzare_req");

  // TIP ANGAJAT REQ BUILDERS
  const buildCreateTipAngajatReq = require("./requests/tip_angajat_req_builders/build_create_tip_angajat_req");
  const buildReadTipAngajatReq = require("./requests/tip_angajat_req_builders/build_read_tip_angajat_req");
  const buildUpdateTipAngajatReq = require("./requests/tip_angajat_req_builders/build_update_tip_angajat_req");
  const buildDeleteTipAngajatReq = require("./requests/tip_angajat_req_builders/build_delete_tip_angajat_req");

  //FUNCTIE ANGAJAT REQ BUILDERS
  const buildCreateFunctieAngajatReq = require("./requests/functie_angajat_req_builders/build_create_functie_angajat_req");
  const buildReadFunctieAngajatReq = require("./requests/functie_angajat_req_builders/build_read_functie_angajat_req");
  const buildUpdateFunctieAngajatReq = require("./requests/functie_angajat_req_builders/build_update_functie_angajat_req");
  const buildDeleteFunctieAngajatReq = require("./requests/functie_angajat_req_builders/build_delete_functie_angajat_req");

  //STATUS ACTIUNE REQ BUILDERS
  const buildCreateStatusActiuneReq = require("./requests/status_actiune_req_builders/create_status_actiune_req");
  const buildReadStatusActiuneReq = require("./requests/status_actiune_req_builders/read_status_actiune_req");
  const buildUpdateStatusActiuneReq = require("./requests/status_actiune_req_builders/update_status_actiune_req");
  const buildDeleteStatusActiuneReq = require("./requests/status_actiune_req_builders/delete_status_actiune_req");

  //TIP OPORTUNITATE REQ BUILDERS
  const buildCreateTipOportunitateReq = require("./requests/tip_oportunitate_builders/build_create_tip_oportunitate_req");
  const buildReadTipOportunitateReq = require("./requests/tip_oportunitate_builders/build_read_tip_oportunitate_req");
  const buildUpdateTipOportunitateReq = require("./requests/tip_oportunitate_builders/build_update_tip_oportunitate_req");
  const buildDeleteTipOportunitateReq = require("./requests/tip_oportunitate_builders/build_delete_tip_oportunitate_req");

  //TIP OBIECTIV REQ BUILDERS
  const buildCreateTipObiectivReq = require("./requests/tip_obiectiv_req_builders/build_create_tip_obiectiv_req");
  const buildDeleteTipObiectivReq = require("./requests/tip_obiectiv_req_builders/build_delete_tip_obiectiv_req");
  const buildReadTipObiectivReq = require("./requests/tip_obiectiv_req_builders/build_read_tip_obiectiv_req");
  const buildUpdateTipObiectivReq = require("./requests/tip_obiectiv_req_builders/build_update_tip_obiectiv_req");

  const buildPaginationReq = require("./requests/build_pagination_req");
  return {
    buildActiune: buildActiune(validators.actiuneValidator),
    buildActivitateCompanie: buildActivitateCompanie(
      validators.activitateCompanieValidator
    ),
    buildAngajat: buildAngajat(validators.angajatValidator),
    buildCompanie: buildCompanie(validators.companieValidator),
    buildLead: buildLead(validators.leadValidator),
    buildMarimeCompanie: buildMarimeCompanie(
      validators.marimeCompanieValidator
    ),
    buildNisa: buildNisa(validators.nisaValidator),
    buildObiectiv: buildObiectiv(validators.obiectivValidator),
    buildOportunitate: buildOportunitate(validators.oportunitateValidator),
    buildPersoanaContact: buildPersoanaContact(
      validators.persoanaContactValidator
    ),
    buildProdus: buildProdus(validators.produsValidator),
    buildPunctLucru: buildPunctLucru(validators.punctLucruValidator),
    buildRezultatActiune: buildRezultatActiune(
      validators.rezultatActiuneValidator
    ),
    buildTipActiune: buildTipActiune(validators.tipActiuneValidator),
    buildTipRezultatActiune: buildTipRezultatActiune(
      validators.tipRezultatActiuneValidator
    ),
    buildVanzare: buildVanzare(validators.vanzareValidator),
    buildTipAngajat: buildTipAngajat(validators.tipAngajatValidator),
    buildFunctieAngajat: buildFunctieAngajat(
      validators.functieAngajatValidator
    ),
    buildMatchTipRezultatTipActiune: buildMatchTipRezultatTipActiune(
      validators.matchTipRezultatTipActiuneValidator
    ),
    buildStatusActiune: buildStatusActiune(validators.statusActiuneValidator),
    buildTipOportunitate: buildTipOportunitate(
      validators.tipOportunitateValidator
    ),

    //ACTIUNE REQUEST BUILDERS
    buildCreateActiuneReq: buildCreateActiuneReq(
      validators.createActiuneReqValidator
    ),
    buildReadActiuneReq: buildReadActiuneReq(
      validators.readActiuneReqValidator
    ),
    buildUpdateActiuneReq: buildUpdateActiuneReq(
      validators.updateActiuneReqValidator
    ),
    buildDeleteActiuneReq: buildDeleteActiuneReq(
      validators.deleteActiuneReqValidator
    ),

    //ACTIVITATE REQUEST BUILDERS
    buildCreateActivitateCompanieReq: buildCreateActivitateCompanieReq(
      validators.createActivitateReqValidator
    ),
    buildReadActivitateCompanieReq: buildReadActivitateCompanieReq(
      validators.readActivitateReqValidator
    ),
    buildUpdateActivitateCompanieReq: buildUpdateActivitateCompanieReq(
      validators.updateActivitateReqValidator
    ),
    buildDeleteActivitateCompanieReq: buildDeleteActivitateCompanieReq(
      validators.deleteActivitateReqValidator
    ),

    // ANGAJAT REQUEST BUILDERS
    buildCreateAngajatReq: buildCreateAngajatReq(
      validators.createAngajatReqValidator
    ),
    buildReadAngajatReq: buildReadAngajatReq(
      validators.readAngajatReqValidator
    ),
    buildUpdateAngajatReq: buildUpdateAngajatReq(
      validators.updateAngajatReqValidator
    ),
    buildDeleteAngajatReq: buildDeleteAngajatReq(
      validators.deleteAngajatReqValidator
    ),

    // COMPANIE REQUEST BUILDERS
    buildCreateCompanieReq: buildCreateCompanieReq(
      validators.createCompanieReqValidator
    ),
    buildReadCompanieReq: buildReadCompanieReq(
      validators.readCompanieReqValidator
    ),
    buildUpdateCompanieReq: buildUpdateCompanieReq(
      validators.updateCompanieReqValidator
    ),
    buildDeleteCompanieReq: buildDeleteCompanieReq(
      validators.deleteCompanieReqValidator
    ),

    //LEAD REQUEST BUILDERS
    buildCreateLeadReq: buildCreateLeadReq(validators.createLeadReqValidator),
    buildReadLeadReq: buildReadLeadReq(validators.readLeadReqValidator),
    buildUpdateLeadReq: buildUpdateLeadReq(validators.updateLeadReqValidator),
    buildDeleteLeadReq: buildDeleteLeadReq(validators.deleteLeadReqValidator),

    // MARIME COOMPANIE BUILDERS

    buildCreateMarimeCompanieReq: buildCreateMarimeCompanieReq(
      validators.createMarimeCompanieReqValidator
    ),
    buildReadMarimeCompanieReq: buildReadMarimeCompanieReq(
      validators.readMarimeCompanieReqValidator
    ),
    buildUpdateMarimeCompanieReq: buildUpdateMarimeCompanieReq(
      validators.updateMarimeCompanieReqValidator
    ),
    buildDeleteMarimeCompanieReq: buildDeleteMarimeCompanieReq(
      validators.deleteMarimeCompanieReqValidator
    ),

    // NISA REQUEST BUILDERS
    buildCreateNisaReq: buildCreateNisaReq(validators.createNisaReqValidator),
    buildReadNisaReq: buildReadNisaReq(validators.readNisaReqValidator),
    buildUpdateNisaReq: buildUpdateNisaReq(validators.updateNisaReqValidator),
    buildDeleteNisaReq: buildDeleteNisaReq(validators.deleteNisaReqValidator),

    // OBIECTIV REQUEST BUILDERS
    buildCreateObiectivReq: buildCreateObiectivReq(
      validators.createObiectivReqValidator
    ),
    buildReadObiectivReq: buildReadObiectivReq(
      validators.readObiectivReqValidator
    ),
    buildUpdateObiectivReq: buildUpdateObiectivReq(
      validators.updateObiectivReqValidator
    ),
    buildDeleteObiectivReq: buildDeleteObiectivReq(
      validators.deleteObiectivReqValidator
    ),

    //OPORTUNITATE REQUEST BUILDERS
    buildCreateOportunitateReq: buildCreateOportunitateReq(
      validators.createOportunitateReqValidator
    ),
    buildReadOportunitateReq: buildReadOportunitateReq(
      validators.readOportunitateReqValidator
    ),
    buildUpdateOportunitateReq: buildUpdateOportunitateReq(
      validators.updateOportunitateReqValidator
    ),
    buildDeleteOportunitateReq: buildDeleteOportunitateReq(
      validators.deleteOportunitateReqValidator
    ),

    //PERSOANE CONTACT REQUEST BUILDERS
    buildCreatePersoanaContactReq: buildCreatePersoanaContactReq(
      validators.createPersoanaContactReqValidator
    ),
    buildReadPersoanaContactReq: buildReadPersoanaContactReq(
      validators.readPersoanaContactReqValidator
    ),
    buildUpdatePersoanaContactReq: buildUpdatePersoanaContactReq(
      validators.updatePersoanaContactReqValidator
    ),
    buildDeletePersoanaContactReq: buildDeletePersoanaContactReq(
      validators.deletePersoanaContactReqValidator
    ),

    //PRODUS REQUEST BUILDERS
    buildCreateProdusReq: buildCreateProdusReq(
      validators.createProdusReqValidator
    ),
    buildReadProdusReq: buildReadProdusReq(validators.readProdusReqValidator),
    buildUpdateProdusReq: buildUpdateProdusReq(
      validators.updateProdusReqValidator
    ),
    buildDeleteProdusReq: buildDeleteProdusReq(
      validators.deleteProdusReqValidator
    ),

    //PUNTE DE LUCRU REQUEST BUILDERS
    buildCreatePunctLucruReq: buildCreatePunctLucruReq(
      validators.createPunctLucruReqValidator
    ),
    buildReadPunctLucruReq: buildReadPunctLucruReq(
      validators.readPunctLucruReqValidator
    ),
    buildUpdatePunctLucruReq: buildUpdatePunctLucruReq(
      validators.updatePunctLucruReqValidator
    ),
    buildDeletePunctLucruReq: buildDeletePunctLucruReq(
      validators.deletePunctLucruReqValidator
    ),

    //REZULTAT ACTIUNE REQ BUILDERS
    buildCreateRezultatActiuneReq: buildCreateRezultatActiuneReq(
      validators.createRezultatActiuneReqValidator
    ),
    buildReadRezultatActiuneReq: buildReadRezultatActiuneReq(
      validators.readRezultatActiuneReqValidato
    ),
    buildUpdateRezultatActiuneReq: buildUpdateRezultatActiuneReq(
      validators.updateRezultatActiuneReqValidator
    ),
    buildDeleteRezultatActiuneReq: buildDeleteRezultatActiuneReq(
      validators.deleteRezultatActiuneReqValidator
    ),

    // TIP ACTIUNE REQ BUILDERS
    buildCreateTipActiuneReq: buildCreateTipActiuneReq(
      validators.createTipActiuneReqValidator
    ),
    buildReadTipActiuneReq: buildReadTipActiuneReq(
      validators.readTipActiuneReqValidator
    ),
    buildUpdateTipActiuneReq: buildUpdateTipActiuneReq(
      validators.updateTipActiuneReqValidator
    ),
    buildDeleteTipActiuneReq: buildDeleteTipActiuneReq(
      validators.deleteTipActiuneReqValidator
    ),

    //TIP REZULTAT ACTIUNE REQ BUILDERS

    buildCreateTipRezultatActiuneReq: buildCreateTipRezultatActiuneReq(
      validators.createTipRezultatActiuneReqValidator
    ),
    buildReadTipRezultatActiuneReq: buildReadTipRezultatActiuneReq(
      validators.readTipRezultatActiuneReqValidator
    ),
    buildUpdateTipRezultatActiuneReq: buildUpdateTipRezultatActiuneReq(
      validators.updateTipRezultatActiuneReqValidator
    ),
    buildDeleteTipRezultatActiuneReq: buildDeleteTipRezultatActiuneReq(
      validators.deleteTipRezultatActiuneReqValidator
    ),

    //VANZARE  REQ BUILDERS
    buildCreateVanzareReq: buildCreateVanzareReq(
      validators.createVanzareReqValidator
    ),
    buildReadVanzareReq: buildReadVanzareReq(
      validators.readVanzareReqValidator
    ),
    buildUpdateVanzareReq: buildUpdateVanzareReq(
      validators.updateVanzareReqValidator
    ),
    buildDeleteVanzareReq: buildDeleteVanzareReq(
      validators.deleteVanzareReqValidator
    ),

    // TIP ANGAJAT REQUESTS
    buildCreateTipAngajatReq: buildCreateTipAngajatReq(
      validators.createTipAngajatReqValidator
    ),
    buildReadTipAngajatReq: buildReadTipAngajatReq(
      validators.readTipAngajatReqValidator
    ),
    buildUpdateTipAngajatReq: buildUpdateTipAngajatReq(
      validators.updateTipAngajatReqValidator
    ),
    buildDeleteTipAngajatReq: buildDeleteTipAngajatReq(
      validators.deleteTipAngajatReqValidator
    ),

    //FUNCTIE ANGAJAT REQUESTS

    buildCreateFunctieAngajatReq: buildCreateFunctieAngajatReq(
      validators.createFunctieAngajatReqValidator
    ),
    buildReadFunctieAngajatReq: buildReadFunctieAngajatReq(
      validators.readFunctieAngajatReqValidator
    ),
    buildUpdateFunctieAngajatReq: buildUpdateFunctieAngajatReq(
      validators.updateFunctieAngajatReqValidator
    ),
    buildDeleteFunctieAngajatReq: buildDeleteFunctieAngajatReq(
      validators.deleteFunctieAngajatReqValidator
    ),

    //STATUS ACTIUNI
    buildCreateStatusActiuneReq: buildCreateStatusActiuneReq(
      validators.createStatusActiuneReqValidator
    ),
    buildReadStatusActiuneReq: buildReadStatusActiuneReq(
      validators.readStatusActiuneReqValidator
    ),
    buildUpdateStatusActiuneReq: buildUpdateStatusActiuneReq(
      validators.updateStatusActiuneReqValidator
    ),
    buildDeleteStatusActiuneReq: buildDeleteStatusActiuneReq(
      validators.deleteStatusActiuneReqValidator
    ),

    //TIP OPORTUNITATE
    buildCreateTipOportunitateReq: buildCreateTipOportunitateReq(
      validators.createTipOportunitateReqValidator
    ),
    buildReadTipOportunitateReq: buildReadTipOportunitateReq(
      validators.readTipOportunitateReqValidator
    ),
    buildUpdateTipOportunitateReq: buildUpdateTipOportunitateReq(
      validators.updateTipOportunitateReqValidator
    ),
    buildDeleteTipOportunitateReq: buildDeleteTipOportunitateReq(
      validators.deleteTipOportunitateReqValidator
    ),

    // TIP OBIECTIV
    buildCreateTipObiectivReq: buildCreateTipObiectivReq(
      validators.createTipObiectivReqValidator
    ),
    buildReadTipObiectivReq: buildReadTipObiectivReq(
      validators.readTipObiectivReqValidator
    ),
    buildUpdateTipObiectivReq: buildUpdateTipObiectivReq(
      validators.updateTipObiectivReqValidator
    ),
    buildDeleteTipObiectivReq: buildDeleteTipObiectivReq(
      validators.deleteTipObiectivReqValidator
    ),

    buildPaginationReq: buildPaginationReq(
      validators.paginationRequestValidator
    ),
  };
};
