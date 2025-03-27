const FeaturesSection = () => {
  const features = [
    {
      title: "Erstkontakt",
      description: "Was können wir für Sie tun? Ihre Kontaktaufnahme.",
      bullets: ["E-Mail", "Telefon", "persönlich"],
    },
    {
      title: "Besuch im Store",
      description: "Schön, Sie bei uns zu haben. Ihr Besuch im Platzhirsch Wohnstudio.",
      bullets: ["Besuch im Store mit oder ohne Terminvereinbarung", "auch außerhalb der Geschäftszeiten möglich"],
    },
    {
      title: "Analyse",
      description: "Was wünschen Sie sich? Was brauchen Sie? Unsere Beratung.",
      bullets: ["Bedarfsanalyse", "Wunschanalyse"],
    },
    {
      title: "Planung",
      description: "Sie brauchen Unterstützung bei der Vorstellung? Unsere Grobplanung und Visualisierung.",
      bullets: [
        "Grobplanung anhand der Pläne",
        "Grobplanung vor Ort",
        "Visualisierung mit Handzeichnung",
        "Visualisierung mit 3D-Rendering",
      ],
    },
    {
      title: "Angebot",
      description: "Sie wollen die Kosten für Ihren Traum erfahren? Unser Angebot.",
      bullets: ["Angebotslegung", "Auftragserteilung"],
    },
    {
      title: "Umsetzung",
      description: "Schön, dass Sie sich für uns entschieden haben. Die Umsetzung Ihres Projekts.",
      bullets: ["Detail- und Ausführungsplanung", "Rundumbetreuung", "Koordination der Handwerker"],
    },
    {
      title: "Abnahme",
      description: "Es ist wunderbar geworden. Danke für Ihr Vertrauen.",
      bullets: ["Abnahme des Projekts"],
    },
  ];

  return (
    <section className="py-16 pt-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-lg mb-2 text-[var(--primary)] uppercase tracking-wider">Unser Prozess</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[var(--quinary)]">Beratung und Plannung</h3>
        <p className="max-w-200 text-center mx-auto mt-5 text-[var(--secondary)] ">
          Sie träumen von einem einzigartigen Interieur, wollen Ihr Zuhause in eine Wohlfühloase verwandeln oder planen
          eine umfassende Renovierung? Unser Designstudio setzt Ihre Ideen mit Fokus auf Stil, Funktionalität und
          Qualität um. Geben Sie uns Ihre Schlüssel – wir kümmern uns alle Schritte.
        </p>
      </div>

      {/* Feature Boxes with Minimal Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-left">
              {/* Minimal line-style number */}
              <div className="relative mb-6">
                <span className="text-5xl font-light text-[var(--primary)]">{index + 1}</span>
              </div>

              <h4 className="text-xl font-semibold mb-2 text-[var(--secondary)]">{feature.title}</h4>
              <p className="text-[var(--secondary)] mb-4">{feature.description}</p>

              {/* Bullet points */}
              <ul className="text-left text-[var(--secondary)] space-y-2">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
