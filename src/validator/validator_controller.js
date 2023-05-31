const Joi = require("joi");

const JoiValidator = (payload, schema) => {
  const { error } = schema.validate(payload);
  if (error) {
    const message = error.details.map((el) => el.message).join("\n");
    return {
      error: message,
    };
  }
  return true;
};

module.exports = function validator_controller() {
  // OBJECTS IMPORT //

  const actiune_schema = require("./schemas/objects/actiune_schema");
  const activitate_companie_schema = require("./schemas/objects/activitate_companie_schema");
  const angajat_schema = require("./schemas/objects/angajat_schema");
  const companie_schema = require("./schemas/objects/companie_schema");
  const lead_schema = require("./schemas/objects/lead_schema");
  const marime_companie_schema = require("./schemas/objects/marime_companie_schema");
  const nisa_schema = require("./schemas/objects/nisa_schema");
  const obiectiv_schema = require("./schemas/objects/obiectiv_schema");
  const oportunitate_schema = require("./schemas/objects/oportunitate_schema");
  const persoana_contact_schema = require("./schemas/objects/persoana_contact_schema");
  const produs_schema = require("./schemas/objects/produs_schema");
  const punct_lucru_schema = require("./schemas/objects/punct_lucru_schema");
  const rezultat_actiune_schema = require("./schemas/objects/rezultat_actiune_schema");
  const tip_actiune_schema = require("./schemas/objects/tip_actiune_schema");
  const tip_rezultat_actiune_schema = require("./schemas/objects/tip_rezultat_actiune_schema");
  const vanzare_schema = require("./schemas/objects/vanzare_schema");
  const functie_angajat_schema = require("./schemas/objects/functie_angajat_schema");
  const match_tip_rezultat_tip_actiune_schema = require("./schemas/objects/match_tip_rezultat_tip_actiune");
  const status_actiune_schema = require("./schemas/objects/status_actiune_schema");
  const tip_oportunitate_schema = require("./schemas/objects/tip_oportunitate_schema");
  const tip_obiectiv_schema = require("./schemas/objects/tip_obiectiv_schema");

  // ACTIUNE REQUEST
  const create_actiune_req_schema = require("./schemas/requests/actiuneReq/create_actiune_req_schema");
  const read_actiune_req_schema = require("./schemas/requests/actiuneReq/read_actiune_req_schema");
  const update_actiune_req_schema = require("./schemas/requests/actiuneReq/update_actiune_req_schema");
  const delete_actiune_req_schema = require("./schemas/requests/actiuneReq/delete_actiune_req_schema");

  // ACTIVITATE REQUEST
  const create_activitate_req_schema = require("./schemas/requests/activitateReq/create_activitate_req_schema");
  const delete_activitate_req_schema = require("./schemas/requests/activitateReq/delete_activitate_req_schema");
  const read_activitate_req_schema = require("./schemas/requests/activitateReq/read_activitate_req_schema");
  const update_activitate_req_schema = require("./schemas/requests/activitateReq/update_activitate_req_schema");

  //ANGAJAT REQUEST
  const create_angajat_req_schema = require("./schemas/requests/angajatReq/create_angajat_req_schema");
  const read_angajat_req_schema = require("./schemas/requests/angajatReq/read_angajat_req_schema");
  const update_angajat_req_schema = require("./schemas/requests/angajatReq/update_angajat_req_schema");
  const delete_angajat_req_schema = require("./schemas/requests/angajatReq/delete_angajat_req_schema");

  // COMPANIE REQUEST
  const create_companie_req_schema = require("./schemas/requests/companieReq/create_companie_req_schema");
  const delete_companie_req_schema = require("./schemas/requests/companieReq/delete_companie_req_schema");
  const read_companie_req_schema = require("./schemas/requests/companieReq/read_companie_req_schema");
  const update_companie_req_schema = require("./schemas/requests/companieReq/update_companie_req_schema");

  //LEAD REQUESTS
  const create_lead_req_schema = require("./schemas/requests/leadReq/create_lead_req_schema");
  const delete_lead_req_schema = require("./schemas/requests/leadReq/delete_lead_req_schema");
  const read_lead_req_schema = require("./schemas/requests/leadReq/read_lead_req_schema");
  const update_lead_req_schema = require("./schemas/requests/leadReq/update_lead_req_schema");

  //MARIME COMPANIE REQUEST

  const create_marime_companie_req_schema = require("./schemas/requests/marimeCompanieReq/create_marime_companie_req_schema");
  const read_marime_companie_req_schema = require("./schemas/requests/marimeCompanieReq/read_marime_companie_req_schema");
  const update_marime_companie_req_schema = require("./schemas/requests/marimeCompanieReq/update_marime_companie_req_schema");
  const delete_marime_companie_req_schema = require("./schemas/requests/marimeCompanieReq/delete_marime_companie_req_schema");

  //NISA REQUEST
  const create_nisa_req_schema = require("./schemas/requests/nisaReq/create_nisa_req_schema");
  const read_nisa_req_schema = require("./schemas/requests/nisaReq/read_nisa_req_schema");
  const update_nisa_req_schema = require("./schemas/requests/nisaReq/update_nisa_req_schema");
  const delete_nisa_req_schema = require("./schemas/requests/nisaReq/delete_nisa_req_schema");

  //OBIECTIV REQUESTS
  const create_obiectiv_req_schema = require("./schemas/requests/obiectivReq/create_obiectiv_req_schema");
  const read_obiectiv_req_schema = require("./schemas/requests/obiectivReq/read_obiectiv_req_schema");
  const update_obiectiv_req_schema = require("./schemas/requests/obiectivReq/update_obiectiv_req_schema");
  const delete_obiectiv_req_schema = require("./schemas/requests/obiectivReq/delete_obiectiv_req_schema");

  //OPORTUNITATE REQUESTS SCHEMAS
  const create_oportunitate_req_schema = require("./schemas/requests/oportunitateReq/create_oportunitate_req_schema");
  const read_oportunitate_req_schema = require("./schemas/requests/oportunitateReq/read_oportunitate_req_schema");
  const update_oportunitate_req_schema = require("./schemas/requests/oportunitateReq/update_oportunitate_req_schema");
  const delete_oportunitate_req_schema = require("./schemas/requests/oportunitateReq/delete_oportunitate_req_schema");

  //PERSOANA CONTACT REQUEST SCHEMAS
  const create_persoana_contact_req_schema = require("./schemas/requests/persoanaContactReq/create_persoana_contact_req_schema");
  const read_persoana_contact_req_schema = require("./schemas/requests/persoanaContactReq/read_persoana_contact_req_schema");
  const update_persoana_contact_req_schema = require("./schemas/requests/persoanaContactReq/update_persoana_contact_req_schema");
  const delete_persoana_contact_req_schema = require("./schemas/requests/persoanaContactReq/delete_persoana_contact_req_schema");

  // PRODUS REQUEST SCHEMAS
  const create_produs_req_schema = require("./schemas/requests/produsReq/create_produs_req_schema");
  const read_produs_req_schema = require("./schemas/requests/produsReq/read_produs_req_schema");
  const update_produs_req_schema = require("./schemas/requests/produsReq/update_produs_req_schema");
  const delete_produs_req_schema = require("./schemas/requests/produsReq/delete_produs_req_schema");

  //PUNCT LUCRU REQUEST SCHEMAS

  const create_punct_lucru_req_schema = require("./schemas/requests/punctLucruReq/create_punct_lucru_req_schema");
  const read_punct_lucru_req_schema = require("./schemas/requests/punctLucruReq/read_punct_lucru_req_schema");
  const update_punct_lucru_req_schema = require("./schemas/requests/punctLucruReq/update_punct_lucru_req_schema");
  const delete_punct_lucru_req_schema = require("./schemas/requests/punctLucruReq/delete_punct_lucru_req_schema");

  //REZULTAT ACTIUNE REQUEST SCHEMAS
  const create_rezultat_actiune_req_schema = require("./schemas/requests/rezultatActiuneReq/create_rezultat_actiune_req_schema");
  const read_rezultat_actiune_req_schema = require("./schemas/requests/rezultatActiuneReq/read_rezultat_actiune_req_schema");
  const update_rezultat_actiune_req_schema = require("./schemas/requests/rezultatActiuneReq/update_rezultat_actiune_req_schema");
  const delete_rezultat_actiune_req_schema = require("./schemas/requests/rezultatActiuneReq/delete_rezultat_actiune_req_schema");

  // TIP ACTIUNE REQUEST SCHEMAS
  const create_tip_actiune_req_schema = require("./schemas/requests/tipActiuneReq/create_tip_actiune_req_schema");
  const read_tip_actiune_req_schema = require("./schemas/requests/tipActiuneReq/read_tip_actiune_req_schema");
  const update_tip_actiune_req_schema = require("./schemas/requests/tipActiuneReq/update_tip_actiune_req_schema");
  const delete_tip_actiune_req_schema = require("./schemas/requests/tipActiuneReq/delete_tip_actiune_req_schema");

  // TIP REZULTAT ACTIUNE REQ
  const create_tip_rezultat_actiune_req_schema = require("./schemas/requests/tipRezultatActiuneReq/create_tip_rezultat_actiune_req_schema");
  const read_tip_rezultat_actiune_req_schema = require("./schemas/requests/tipRezultatActiuneReq/read_tip_rezultat_actiune_req_schema");
  const update_tip_rezultat_actiune_req_schema = require("./schemas/requests/tipRezultatActiuneReq/update_tip_rezultat_actiune_req_schema");
  const delete_tip_rezultat_actiune_req_schema = require("./schemas/requests/tipRezultatActiuneReq/delete_tip_rezultat_actiune_req_schema");

  // VANZARE ACTIUNE REQ

  const create_vanzare_req_schema = require("./schemas/requests/vanzareReq/create_vanzare_req_schema");
  const read_vanzare_req_schema = require("./schemas/requests/vanzareReq/read_vanzare_req_schema");
  const update_vanzare_req_schema = require("./schemas/requests/vanzareReq/update_vanzare_req_schema");
  const delete_vanzare_req_schema = require("./schemas/requests/vanzareReq/delete_vanzare_req_schema");

  //FUNCTIE ANGAJAT REQ SCHEMAS
  const create_functie_angajat_req_schema = require("./schemas/requests/functieAngajatReq/create_functie_angajat_req_schema");
  const read_functie_angajat_req_schema = require("./schemas/requests/functieAngajatReq/read_functie_angajat_req_schema");
  const update_functie_angajat_req_schema = require("./schemas/requests/functieAngajatReq/update_functie_angajat_req_schema");
  const delete_functie_angajat_req_schema = require("./schemas/requests/functieAngajatReq/delete_functie_angajat_req_schema");

  //TIP ANGAJAT REQ SCHEMAS
  const create_tip_angajat_req_schema = require("./schemas/requests/tipAngajatReq/create_tip_angajat_req_schema");
  const read_tip_angajat_req_schema = require("./schemas/requests/tipAngajatReq/read_tip_angajat_req_schema");
  const update_tip_angajat_req_schema = require("./schemas/requests/tipAngajatReq/update_tip_angajat_req_schema");
  const delete_tip_angajat_req_schema = require("./schemas/requests/tipAngajatReq/delete_tip_angajat_req_schema");

  // STATUS ACTIUNE REQ
  const create_status_actiune_req_schema = require("./schemas/requests/statusActiuneReq/create_status_actiune_req_schema");
  const read_status_actiune_req_schema = require("./schemas/requests/statusActiuneReq/read_status_actiune_req_schema");
  const update_status_actiune_req_schema = require("./schemas/requests/statusActiuneReq/update_status_actiune_req_schema");
  const delete_status_actiune_req_schema = require("./schemas/requests/statusActiuneReq/delete_status_actiune_req_schema");

  //TIP OPORTUNITATE REQ
  const create_tip_oportunitate_req_schema = require("./schemas/requests/tipOportunitateReq/create_tip_oportunitate_req_schema");
  const read_tip_oportunitate_req_schema = require("./schemas/requests/tipOportunitateReq/read_tip_oportunitate_req_schema");
  const update_tip_oportunitate_req_schema = require("./schemas/requests/tipOportunitateReq/update_tip_oportunitate_req_schema");
  const delete_tip_oportunitate_req_schema = require("./schemas/requests/tipOportunitateReq/delete_tip_oportunitate_req_schema");

  //TIP OBIECTIV REQ
  const create_tip_obiectiv_req_schema = require("./schemas/requests/tipObiectivReq/create_tip_obiectiv_req_schema");
  const read_tip_obiectiv_req_schema = require("./schemas/requests/tipObiectivReq/read_tip_obiectiv_req_schema");
  const update_tip_obiectiv_req_schema = require("./schemas/requests/tipObiectivReq/update_tip_obiectiv_req_schema");
  const delete_tip_obiectiv_req_schema = require("./schemas/requests/tipObiectivReq/delete_tip_obiectiv_req_schema");

  const pagination_request = require("./schemas/requests/pagination_request_validator");

  //authentification
  const createAngajatAuthJwt = require("./schemas/requests/angajatAuthJwtReq/createAngajatAuthJwt");
  return {
    // OBJECTS VALIDATORS //

    actiuneValidator: (payload) => JoiValidator(payload, actiune_schema),
    activitateCompanieValidator: (payload) =>
      JoiValidator(payload, activitate_companie_schema),
    angajatValidator: (payload) => JoiValidator(payload, angajat_schema),
    companieValidator: (payload) => JoiValidator(payload, companie_schema),
    leadValidator: (payload) => JoiValidator(payload, lead_schema),
    marimeCompanieValidator: (payload) =>
      JoiValidator(payload, marime_companie_schema),
    nisaValidator: (payload) => JoiValidator(payload, nisa_schema),
    obiectivValidator: (payload) => JoiValidator(payload, obiectiv_schema),
    oportunitateValidator: (payload) =>
      JoiValidator(payload, oportunitate_schema),
    persoanaContactValidator: (payload) =>
      JoiValidator(payload, persoana_contact_schema),
    produsValidator: (payload) => JoiValidator(payload, produs_schema),
    punctLucruValidator: (payload) => JoiValidator(payload, punct_lucru_schema),
    rezultatActiuneValidator: (payload) =>
      JoiValidator(payload, rezultat_actiune_schema),
    tipActiuneValidator: (payload) => JoiValidator(payload, tip_actiune_schema),
    tipRezultatActiuneValidator: (payload) =>
      JoiValidator(payload, tip_rezultat_actiune_schema),
    vanzareValidator: (payload) => JoiValidator(payload, vanzare_schema),
    functieAngajatValidator: (payload) =>
      JoiValidator(payload, functie_angajat_schema),
    matchTipRezultatTipActiuneValidator: (payload) =>
      JoiValidator(payload, match_tip_rezultat_tip_actiune_schema),
    statusActiuneValidator: (payload) =>
      JoiValidator(payload, status_actiune_schema),
    tipOportunitateValidator: (payload) =>
      JoiValidator(payload, tip_oportunitate_schema),
    tipObiectivValidator: (payload) =>
      JoiValidator(payload, tip_obiectiv_schema),
    //request validators

    //ACTIUNE REQUEST VALIDATORS
    createActiuneReqValidator: (payload) =>
      JoiValidator(payload, create_actiune_req_schema),
    readActiuneReqValidator: (payload) =>
      JoiValidator(payload, read_actiune_req_schema),
    updateActiuneReqValidator: (payload) =>
      JoiValidator(payload, update_actiune_req_schema),
    deleteActiuneReqValidator: (payload) =>
      JoiValidator(payload, delete_actiune_req_schema),

    //ACTIVITATE REQUEST VALIDATORS
    createActivitateReqValidator: (payload) =>
      JoiValidator(payload, create_activitate_req_schema),
    readActivitateReqValidator: (payload) =>
      JoiValidator(payload, read_activitate_req_schema),
    deleteActivitateReqValidator: (payload) =>
      JoiValidator(payload, delete_activitate_req_schema),
    updateActivitateReqValidator: (payload) =>
      JoiValidator(payload, update_activitate_req_schema),

    // ANGAJAT REQUEST VALIDATORS
    createAngajatReqValidator: (payload) =>
      JoiValidator(payload, create_angajat_req_schema),
    readAngajatReqValidator: (payload) =>
      JoiValidator(payload, read_angajat_req_schema),
    updateAngajatReqValidator: (payload) =>
      JoiValidator(payload, update_angajat_req_schema),
    deleteAngajatReqValidator: (payload) =>
      JoiValidator(payload, delete_angajat_req_schema),

    //COMPANIE REQUEST VALIDATORS
    createCompanieReqValidator: (payload) =>
      JoiValidator(payload, create_companie_req_schema),
    readCompanieReqValidator: (payload) =>
      JoiValidator(payload, read_companie_req_schema),
    updateCompanieReqValidator: (payload) =>
      JoiValidator(payload, update_companie_req_schema),
    deleteCompanieReqValidator: (payload) =>
      JoiValidator(payload, delete_companie_req_schema),

    //LEAD REQUEST VALIDATORS
    createLeadReqValidator: (payload) =>
      JoiValidator(payload, create_lead_req_schema),
    readLeadReqValidator: (payload) =>
      JoiValidator(payload, read_lead_req_schema),
    updateLeadReqValidator: (payload) =>
      JoiValidator(payload, update_lead_req_schema),
    deleteLeadReqValidator: (payload) =>
      JoiValidator(payload, delete_lead_req_schema),

    // MARIME COMPANIE REQUEST VALIDATORS

    createMarimeCompanieReqValidator: (payload) =>
      JoiValidator(payload, create_marime_companie_req_schema),
    readMarimeCompanieReqValidator: (payload) =>
      JoiValidator(payload, read_marime_companie_req_schema),
    updateMarimeCompanieReqValidator: (payload) =>
      JoiValidator(payload, update_marime_companie_req_schema),
    deleteMarimeCompanieReqValidator: (payload) =>
      JoiValidator(payload, delete_marime_companie_req_schema),

    //NISA REQUEST VALIDATOR
    createNisaReqValidator: (payload) =>
      JoiValidator(payload, create_nisa_req_schema),
    readNisaReqValidator: (payload) =>
      JoiValidator(payload, read_nisa_req_schema),
    updateNisaReqValidator: (payload) =>
      JoiValidator(payload, update_nisa_req_schema),
    deleteNisaReqValidator: (payload) =>
      JoiValidator(payload, delete_nisa_req_schema),

    //OBIECTIV REQUEST VALIDATOR
    createObiectivReqValidator: (payload) =>
      JoiValidator(payload, create_obiectiv_req_schema),
    readObiectivReqValidator: (payload) =>
      JoiValidator(payload, read_obiectiv_req_schema),
    updateObiectivReqValidator: (payload) =>
      JoiValidator(payload, update_obiectiv_req_schema),
    deleteObiectivReqValidator: (payload) =>
      JoiValidator(payload, delete_obiectiv_req_schema),

    //OPORTUNITATE REQUEST VALIDATOR
    createOportunitateReqValidator: (payload) =>
      JoiValidator(payload, create_oportunitate_req_schema),
    readOportunitateReqValidator: (payload) =>
      JoiValidator(payload, read_oportunitate_req_schema),
    updateOportunitateReqValidator: (payload) =>
      JoiValidator(payload, update_oportunitate_req_schema),
    deleteOportunitateReqValidator: (payload) =>
      JoiValidator(payload, delete_oportunitate_req_schema),

    //PERSOANA CONTACT REQUEST VALIDATOR
    createPersoanaContactReqValidator: (payload) =>
      JoiValidator(payload, create_persoana_contact_req_schema),
    readPersoanaContactReqValidator: (payload) =>
      JoiValidator(payload, read_persoana_contact_req_schema),
    updatePersoanaContactReqValidator: (payload) =>
      JoiValidator(payload, update_persoana_contact_req_schema),
    deletePersoanaContactReqValidator: (payload) =>
      JoiValidator(payload, delete_persoana_contact_req_schema),

    //PRODUS REQUEST VALIDATOR
    createProdusReqValidator: (payload) =>
      JoiValidator(payload, create_produs_req_schema),
    readProdusReqValidator: (payload) =>
      JoiValidator(payload, read_produs_req_schema),
    updateProdusReqValidator: (payload) =>
      JoiValidator(payload, update_produs_req_schema),
    deleteProdusReqValidator: (payload) =>
      JoiValidator(payload, delete_produs_req_schema),

    //PUNCT LUCRU REQUEST VALIDATOR
    createPunctLucruReqValidator: (payload) =>
      JoiValidator(payload, create_punct_lucru_req_schema),
    readPunctLucruReqValidator: (payload) =>
      JoiValidator(payload, read_punct_lucru_req_schema),
    updatePunctLucruReqValidator: (payload) =>
      JoiValidator(payload, update_punct_lucru_req_schema),
    deletePunctLucruReqValidator: (payload) =>
      JoiValidator(payload, delete_punct_lucru_req_schema),

    // REZULTAT ACITUNE REQUEST VALIDATOR
    createRezultatActiuneReqValidator: (payload) =>
      JoiValidator(payload, create_rezultat_actiune_req_schema),
    readRezultatActiuneReqValidator: (payload) =>
      JoiValidator(payload, read_rezultat_actiune_req_schema),
    updateRezultatActiuneReqValidator: (payload) =>
      JoiValidator(payload, update_rezultat_actiune_req_schema),
    deleteRezultatActiuneReqValidator: (payload) =>
      JoiValidator(payload, delete_rezultat_actiune_req_schema),

    // TIP ACTIUNE REQUEST VALIDATOR
    createTipActiuneReqValidator: (payload) =>
      JoiValidator(payload, create_tip_actiune_req_schema),
    readTipActiuneReqValidator: (payload) =>
      JoiValidator(payload, read_tip_actiune_req_schema),
    updateTipActiuneReqValidator: (payload) =>
      JoiValidator(payload, update_tip_actiune_req_schema),
    deleteTipActiuneReqValidator: (payload) =>
      JoiValidator(payload, delete_tip_actiune_req_schema),

    //TIP REZULTAT ACTIUNE REQUEST VALIDATORS
    createTipRezultatActiuneReqValidator: (payload) =>
      JoiValidator(payload, create_tip_rezultat_actiune_req_schema),
    readTipRezultatActiuneReqValidator: (payload) =>
      JoiValidator(payload, read_tip_rezultat_actiune_req_schema),
    updateTipRezultatActiuneReqValidator: (payload) =>
      JoiValidator(payload, update_tip_rezultat_actiune_req_schema),
    deleteTipRezultatActiuneReqValidator: (payload) =>
      JoiValidator(payload, delete_tip_rezultat_actiune_req_schema),

    // VANZARE REQUEST VALIDATORS
    createVanzareReqValidator: (payload) =>
      JoiValidator(payload, create_vanzare_req_schema),
    readVanzareReqValidator: (payload) =>
      JoiValidator(payload, read_vanzare_req_schema),
    updateVanzareReqValidator: (payload) =>
      JoiValidator(payload, update_vanzare_req_schema),
    deleteVanzareReqValidator: (payload) =>
      JoiValidator(payload, delete_vanzare_req_schema),

    //FUNCTIE ANGAJAT REQ VALIDATORS
    createFunctieAngajatReqValidator: (payload) =>
      JoiValidator(payload, create_functie_angajat_req_schema),
    readFunctieAngajatReqValidator: (payload) =>
      JoiValidator(payload, read_functie_angajat_req_schema),
    updateFunctieAngajatReqValidator: (payload) =>
      JoiValidator(payload, update_functie_angajat_req_schema),
    deleteFunctieAngajatReqValidator: (payload) =>
      JoiValidator(payload, delete_functie_angajat_req_schema),

    //TIP ANGAJAT REQ VALIDATOR
    createTipAngajatReqValidator: (payload) =>
      JoiValidator(payload, create_tip_angajat_req_schema),
    readTipAngajatReqValidator: (payload) =>
      JoiValidator(payload, read_tip_angajat_req_schema),
    updateTipAngajatReqValidator: (payload) =>
      JoiValidator(payload, update_tip_angajat_req_schema),
    deleteTipAngajatReqValidator: (payload) =>
      JoiValidator(payload, delete_tip_angajat_req_schema),

    //STATUS ACTIUNE REQ VALIDATOR
    createStatusActiuneReqValidator: (payload) =>
      JoiValidator(payload, create_status_actiune_req_schema),
    readStatusActiuneReqValidator: (payload) =>
      JoiValidator(payload, read_status_actiune_req_schema),
    updateStatusActiuneReqValidator: (payload) =>
      JoiValidator(payload, update_status_actiune_req_schema),
    deleteStatusActiuneReqValidator: (payload) =>
      JoiValidator(payload, delete_status_actiune_req_schema),

    //TIP OPORTUNITATE REQUESTS
    createTipOportunitateReqValidator: (payload) =>
      JoiValidator(payload, create_tip_oportunitate_req_schema),
    readTipOportunitateReqValidator: (payload) =>
      JoiValidator(payload, read_tip_oportunitate_req_schema),
    updateTipOportunitateReqValidator: (payload) =>
      JoiValidator(payload, update_tip_oportunitate_req_schema),
    deleteTipOportunitateReqValidator: (payload) =>
      JoiValidator(payload, delete_tip_oportunitate_req_schema),

    //TIP OBIECTIV REQUEST

    createTipObiectivReqValidator: (payload) =>
      JoiValidator(payload, create_tip_obiectiv_req_schema),
    readTipObiectivReqValidator: (payload) =>
      JoiValidator(payload, read_tip_obiectiv_req_schema),
    updateTipObiectivReqValidator: (payload) =>
      JoiValidator(payload, update_tip_obiectiv_req_schema),
    deleteTipObiectivReqValidator: (payload) =>
      JoiValidator(payload, delete_tip_obiectiv_req_schema),

    paginationRequestValidator: (payload) =>
      JoiValidator(payload, pagination_request),

    //auth requests
    createAngajatAuthJwtRequestValidator: (payload) =>
      JoiValidator(payload, createAngajatAuthJwt),
  };
};
