/** Zentrale Firmendaten für Impressum und Datenschutz. */
export const company = {
  legalName: "Medienfair GmbH",
  street: "Detmolder Str. 630a",
  zip: "33699",
  city: "Bielefeld",
  country: "Deutschland",
  email: "info@medienfair.de",
  phone: "",
  website: "https://medienfair.de",
  registerEntry: "Noch nicht erteilt",
  vatId: "Noch nicht erteilt",
  managingDirectors: ["Anton Spreemann"],
  contentResponsible: "Anton Spreemann",
} as const;

export function companyAddressLine() {
  return `${company.street}, ${company.zip} ${company.city}`;
}

export function managingDirectorsLine() {
  return company.managingDirectors.join(", ");
}
