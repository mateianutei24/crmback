module.exports = async function updateCompanieUseCase(
  dataController,
  requestObject
) {
  await dataController.updateOneObject(
    `"Companie" SET companie_denumire = $1,companie_numar_inregistrare=$2, nisa_id=$3, marime_companie_id=$4, activitate_companie_id=$5, companie_vanzari_totale=$6,companie_adresa_livrare=$7,companie_adresa_facturare=$8,companie_numar_angajati =$9,companie_cifra_afaceri=$10,companie_locatie_gps=$11, angajat_responsabil=$12 ,punct_lucru_id=$13, companie_email = $14, companie_numar_telefon = $15`,
    "companie_id",
    requestObject.getCompanieId(),
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
};
