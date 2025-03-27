import Image from "next/image";

const Marken = () => {
  const items = [
    { id: 1, title: "Modern Living Room", image: "/Images/Home/download.jpg" },
    { id: 2, title: "Contemporary Kitchen", image: "/Images/Home/download.jpg" },
    { id: 3, title: "Luxury Bedroom", image: "/Images/Home/download.jpg" },
    { id: 4, title: "Spa Bathroom", image: "/Images/Home/download.jpg" },
    { id: 5, title: "Home Office", image: "/Images/Home/download.jpg" },
    { id: 6, title: "Outdoor Patio", image: "/Images/Home/download.jpg" },
    { id: 7, title: "Dining Area", image: "/Images/Home/download.jpg" },
    { id: 8, title: "Kids Room", image: "/Images/Home/download.jpg" },
    { id: 9, title: "Guest Suite", image: "/Images/Home/download.jpg" },
    { id: 10, title: "Rooftop Terrace", image: "/Images/Home/download.jpg" },
  ];

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className={`text-lg mb-3 text-[var(--primary)] text-left uppercase`}>Marken</h2>
      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Starke Marken</h4>
      <p className="text-md text-[var(--secondary)]/80 mb-3">
        Unser Portfolio umfasst eine exklusive Auswahl an renommierten Marken, die für zeitlose Eleganz, höchste
        Handwerkskunst und wegweisendes Design stehen.
      </p>
      <p className="text-md text-[var(--secondary)]/80 mb-3">
        Jede Marke, die wir führen, erzählt ihre eigene Geschichte und bringt ihre einzigartige Handschrift in die Welt
        des Designs ein. Ob luxuriöse Möbel, raffinierte Accessoires oder moderne Wohnlösungen – unsere Marken vereinen
        Funktionalität mit Ästhetik und inspirieren zu außergewöhnlichen Wohnkonzepten.
      </p>

      <p className="text-md text-[var(--secondary)]/80 mb-3">
        Entdecken Sie bei uns die Vielfalt und Exklusivität von Marken, die international für ihren herausragenden Ruf
        bekannt sind. Lassen Sie sich von visionären Kollektionen begeistern, die nicht nur Räume verschönern, sondern
        auch ein Statement für Stil und Persönlichkeit setzen.
      </p>

      <p className="text-md text-[var(--secondary)]/80 mb-10">
        Wir sind stolz darauf, unseren Kunden Marken zu präsentieren, die höchsten Ansprüchen gerecht werden und die
        Essenz von Luxus und Innovation verkörpern. Besuchen Sie uns und lassen Sie sich von unserer Markenwelt
        inspirieren – hier finden Sie alles, um Ihr Zuhause zu einem Ort der Schönheit und Harmonie zu machen.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group overflow-hidden rounded-lg transition-shadow duration-300">
            <div className="relative aspect-square w-[100%] h-[auto] max-h-[300px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 "
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-[var(--secondary)] hover:text-[var(--primary)]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marken;
