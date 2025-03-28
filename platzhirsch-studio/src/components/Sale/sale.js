"use client";
import { useState, useEffect } from "react";

const SaleSection = () => {
  const saleItems = [
    {
      id: 1,
      imageUrl: "/Images/Home/download.jpg",
      title: "Modern Comfort Sofa",
      originalPrice: "€1,299",
      salePrice: "€799",
    },
    {
      id: 2,
      imageUrl: "/Images/Home/download.jpg",
      title: "Oak Dining Table",
      originalPrice: "€899",
      salePrice: "€499",
    },
    {
      id: 3,
      imageUrl: "/Images/Home/download.jpg",
      title: "Velvet Armchair",
      originalPrice: "€599",
      salePrice: "€349",
    },
    {
      id: 4,
      imageUrl: "/Images/Home/download.jpg",
      title: "Glass Coffee Table",
      originalPrice: "€450",
      salePrice: "€269",
    },
    {
      id: 5,
      imageUrl: "/Images/Home/download.jpg",
      title: "Minimalist Bookshelf",
      originalPrice: "€399",
      salePrice: "€239",
    },
    {
      id: 6,
      imageUrl: "/Images/Home/download.jpg",
      title: "King Size Bed Frame",
      originalPrice: "€1,199",
      salePrice: "€719",
    },
  ];
  const [sales, setSales] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.sale.api.sale_data"
        );
        if (!response.ok) throw new Error("Fehler beim Abrufen der Daten");

        const data = await response.json();
        const formattedEvents = await data.message.map((sale) => ({
          title: sale.name1,
          originalPrice: sale.fruher_preis,
          salePrice: sale.preis,
          imageUrl: sale.bild_anhagen,
          status: sale.status,
        }));
        await setSales(formattedEvents);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      {/* Title and Description */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-6">Sale</h2>
        <div className="text-md md:text-xl text-[var(--secondary)]/80 space-y-4 text-left">
          <p className="font-semibold [var(--secondary)] ">
            Sortimentswechsel bei Platzhirsch Home Living: Jetzt bis zu 60 % sparen.
          </p>
          <p className="text-md">
            Es ist wieder soweit – unser Sortimentswechsel steht an, und das bedeutet für Sie: hochwertige Möbel und
            stilvolle Accessoires zu unschlagbaren Preisen! Profitieren Sie von Rabatten bis zu 60 % auf ausgewählte
            Stücke und sichern Sie sich exklusive Design-Highlights, die Ihr Zuhause aufwerten und begeistern.
          </p>
          <p className="text-md">
            In unserem Sale finden Sie eine sorgfältige Auswahl an Möbeln und Accessoires renommierter Marken, die nicht
            nur durch ihre Qualität, sondern auch durch ihre zeitlose Eleganz überzeugen. Ob gemütliche Sofas, elegante
            Esstische, komfortable Sessel oder raffinierte Wohnaccessoires – hier ist für jeden Geschmack etwas dabei.
          </p>
          <p className="text-md">
            Unsere Sale-Stücke sind nur in begrenzter Stückzahl verfügbar – also zögern Sie nicht zu lange. Besuchen Sie
            uns vor Ort oder entdecken Sie die aktuellen Angebote online und lassen Sie sich inspirieren.
          </p>
          <p className="text-md">
            Platzhirsch Home Living steht für Design, Qualität und Stil – und jetzt auch für unglaubliche Preise. Machen
            Sie Ihr Zuhause zu etwas Besonderem und profitieren Sie von unserem Sortimentswechsel.
          </p>
        </div>
      </div>

      {/* Sale Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sales.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden ">
            {/* Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={`http://192.168.68.197:8000${item.imageUrl}`}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-gray-500 line-through">€{item.originalPrice.toFixed(2)}</span>
                <span className="text-[var(--primary)] font-bold underline text-lg">€{item.salePrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaleSection;
