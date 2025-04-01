import Image from "next/image";
import React from "react";

const partners = [
  {
    name: "SM Immobilienverwaltung GmbH",
    logo: "/Images/Partner/partner1.png",
    role: "Partner für Immobilienprojekte",
    address: ["Grünegger 10", "6911 Lochau"],
    phone: "+43 5574 46255",
    email: "info@platzhirsch.studio"
  },
  {
    name: "Wertz Immobilien GmbH",
    logo: "/Images/Partner/partner2.png",
    role: "Partner für exklusive Immobilien in Lindau",
    address: ["Am Schönbühl 1", "88131 Lindau (Bodensee)"],
    phone: "+49 8382 911 211 3",
    website: "https://wertz-immobilien.de",
  },
  {
    name: "FB Future Bauart Immobilien",
    logo: "/Images/Partner/partner3.png",
    role: "Projektentwickler der Bahnhofcity Feldkirch",
    address: ["Rosamichlweg 10", "6800 Feldkirch"],
    phone: "+43 5574 581 58",
    website: "https://bauart.at",
  },
  {
    name: "Ökovolt Solartechnik GmbH",
    logo: "/Images/Partner/partner4.png",
    role: "Partner für Solar- und Photovoltaik Systeme, Planungen und Finanzierungen",
    address: ["Gewerbegebiet 10", "5121 Ostermiething"],
    phone: "+43 6278 71030",
    website: "https://oekovolt.at",
  },
  {
    name: "Rusch Abdichter, Spengler + Dachdecker GmbH",
    logo: "/Images/Partner/partner5.png",
    role: "Partner für Dach- und Spenglerarbeiten",
    address: ["Funkenstraße 8", "6923 Lauterach"],
    phone: "+43 5574 716 70",
    website: "https://rusch.at",
  },
  {
    name: "Stecher Elektrotechnik",
    logo: "/Images/Partner/partner6.png",
    role: "Partner für Elektrotechnik aus Lochau",
    address: ["Alberlochstraße 7", "6911 Lochau"],
    phone: "+43 5574 53565",
    website: "https://elektro-stecher.at",
  },
  {
    name: "Platzhirsch Café Lounge",
    logo: "/Images/Partner/partner1.png",
    role: "",
    address: ["Landstrasse 11", "6911 Lochau"],
    phone: "+43 5574 46257",
    website: "https://platzhirsch.studio/cafe",
  },
  {
    name: "Gasthaus Moosegg",
    logo: "/Images/Partner/partner8.png",
    role: "Bergrestaurant am Pfänder",
    address: ["Moosegg 1", "6911 Lochau"],
    phone: "+43 5574 58696",
    website: "https://moosegg.at",
  },
];

const PartnerSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">Unsere Partner</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Bei Platzhirsch Home Living planen und gestalten wir exklusive Räume und Orte.
          Unsere Projekte realisieren wir mit ausgewählten Partnern.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
        {partners.map((partner, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Logo */}
            <div className="relative w-[160px] h-[80px] mb-6">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Info */}
            <div className="text-sm text-gray-700">
              <p className="font-semibold">{partner.name}</p>
              {partner.role && <p className="mb-2">{partner.role}</p>}
              {partner.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              {partner.phone && (
                <p className="mt-2">
                  Tel: <a href={`tel:${partner.phone}`} className="text-[#daa14c] hover:underline">{partner.phone}</a>
                </p>
              )}
              {partner.email && (
                <p>
                  E-Mail: <a href={`mailto:${partner.email}`} className="text-[#daa14c] hover:underline">{partner.email}</a>
                </p>
              )}
              {partner.website && (
                <p>
                  <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-[#daa14c] hover:underline">
                    Website besuchen
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
