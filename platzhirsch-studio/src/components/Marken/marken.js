"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Marken = () => {
  const [marken, setMarken] = useState([]); // Ruaj ngjarjet nga API

  // Merr të dhënat nga API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.marken.api.marken_data"
        );

        // Kontrollo nëse përgjigja është e suksesshme
        if (!response.ok) {
          throw new Error("Gabim gjatë marrjes së të dhënave");
        }

        // Kthe përgjigjen në JSON
        const data = await response.json();

        // Formato ngjarjet për FullCalendar
        const formattedEvents = data.message
          .slice() // copy to avoid mutating original
          .reverse() // reverse if the API sends it in the wrong order
          .map((marke) => ({
            title: marke.name1,
            images: marke.logo,
            status: marke.status,
          }));

        // Vendos ngjarjet në state
        setMarken(formattedEvents);
      } catch (error) {
        console.error("Gabim gjatë marrjes së ngjarjeve:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className={`text-lg mb-5 text-[var(--primary)] text-left uppercase`}>Marken</h2>
      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Starke Marken</h4>
      <p className="text-md text-[var(--secondary)]/80 mb-5">
        Unser Portfolio umfasst eine exklusive Auswahl an renommierten Marken, die für zeitlose Eleganz, höchste
        Handwerkskunst und wegweisendes Design stehen.
      </p>
      <p className="text-md text-[var(--secondary)]/80 mb-5">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {marken
          .filter((item) => item.status === "Aktiv")
          .map((item, index) => (
            <Link
              href={`/ueber-uns/marken/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              key={index}
              className="group overflow-hidden transition-shadow duration-300 border flex items-center justify-center"
            >
              <div className="relative aspect-square w-[60%] h-[auto] max-h-[150px]">
                <img
                  src={`http://192.168.68.197:8000${item?.images}`}
                  alt={item.title}
                  className="w-full h-full hover:cursor-pointer object-contain transition-transform duration-500 "
                />
              </div>
              {/* <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-[var(--secondary)] hover:text-[var(--primary)]">
                  {item.title}
                </h3>
              </div> */}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Marken;
