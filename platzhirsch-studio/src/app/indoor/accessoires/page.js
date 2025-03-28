"use client";
import { useState, useEffect } from "react";
import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Accessories/bannerImageAccessories1.jpg",
    "/Images/Accessories/bannerImageAccessories2.jpg",
    "/Images/Accessories/bannerImageAccessories3.jpg",
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.indoor_and_outdoor.api.indoor_outdoor_data"
        );
        if (!response.ok) throw new Error("Fehler beim Abrufen der Daten");

        const data = await response.json();
        const filteredData = data.message.filter(
          (sale) => sale.typen === "Indoor" && sale.indoor_typen === "Accessoires"
        );
        const formattedEvents = filteredData.map((sale) => ({
          title: sale.title,
          description: sale.beschreibung,
          image: sale.bild_anhagen,
          status: sale.status,
        }));
        setData(formattedEvents);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    };
    fetchEvents();
  }, []);

  const SecondPart = {
    title: "Die kleinen, feinen Dinge des",
    secondTitle: "Lebens",
    description: [
      "Ein schönes Haus, eine stylische Wohnung, ein paradiesischer Outdoor-Bereich – das alles bestückt mit schönen Möbelstücken. Wer träumt nicht davon. Aber halt! Da fehlt doch noch etwas. Was wäre ein Lebensraum ohne schmückendes Beiwerk. Ohne dem Tüpfelchen auf dem i.",
      "Es sind die Accessoires, die einem Raum das besondere Etwas geben: Vorhänge, Tapeten, Vasen und auch Plaids oder Decken, die ihre Nutzer mit wohliger Wärme umfangen. Wanddekoration, die dem künstlerischen Anspruch Ausdruck verleiht. Oder darf es eine Feuerstelle sein?",
      "Gerne setzen wir mit wohldosierten und gezielten (Farb)Tupfen Ihr Refugium in ein ganz besonders Licht.",
    ],
    additionally: "Platzhirsch – denkt ganzheitlich.",
  };
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection second={SecondPart} />
      <AlternatingLayoutGrid data={data} />
    </div>
  );
}
