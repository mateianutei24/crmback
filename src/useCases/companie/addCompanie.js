module.exports = async function addCompanieUseCase(
  dataController,
  requestObject
) {
  const response = await dataController.addIntoDatabase(
    `"Companie"(companie_denumire,companie_numar_inregistrare,nisa_id,marime_companie_id,activitate_companie_id,companie_vanzari_totale,companie_adresa_livrare,companie_adresa_facturare,companie_numar_angajati,companie_cifra_afaceri,companie_locatie_gps,angajat_responsabil,punct_lucru_id,companie_email,companie_numar_telefon) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)`,
    [
      requestObject.getNume(),
      requestObject.getNumarInregistrare(),
      requestObject.getNisa(),
      requestObject.getMarimeCompanie(),
      requestObject.getActivitateCompanie(),
      requestObject.getVanzariTotale(),
      requestObject.getAdresaLivrare(),
      requestObject.getAdresaFacturare(),
      requestObject.getNumarAngajati(),
      requestObject.getCifraAfaceri(),
      requestObject.getLocatieGps(),
      requestObject.getAngajatResponsabil(),
      requestObject.getPunctLucruId(),
      requestObject.getEmail(),
      requestObject.getNumarTelefon(),
    ]
  );
  return response;
};
