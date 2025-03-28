"use client";
import { useState, useEffect } from "react";
import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Arbeiten/bannerImageArbeiten1.jpg",
    "/Images/Arbeiten/bannerImageArbeiten2.jpg",
    "/Images/Arbeiten/bannerImageArbeiten3.jpg",
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
        const filteredData = data.message.filter((sale) => sale.typen === "Indoor" && sale.indoor_typen === "Arbeiten");
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
    title: "Home Office – Arbeitsplatz der",
    secondTitle: "Zukunft",
    description: [
      "Die Rückkehr an den gewohnten Arbeitsplatz hat mittlerweile wieder stattgefunden. Dennoch haben viele Menschen die Vorzüge des Homeoffice erkannt. Das Covid Experiment hat gezeigt, dass die erforderlichen Technologien funktionieren und dass produktive Teamarbeit auch so möglich ist. Deswegen wird ein Großteil der arbeitenden Bevölkerung auch weiterhin einen Teil ihrer Arbeitszeit von zu Hause erledigen.",
      "Wer nicht über einen eigenen Büroraum verfügt, ist zunächst gefordert den richtigen Platz und das perfekte Umfeld zu schaffen. Um Ordnung und Ruhe zu sichern, müssen Regale und Trennwände her, die sich perfekt in die Wohnung einpassen.",
      "Gerne setzen wir mit wohldosierten und gezielten (Farb)Tupfen Ihr Refugium in ein ganz besonders Licht.",
    ],
    brands: ["Minotti", "Classicon", "Eichholz", "Poliform", "Rimadesio"],
    image: "/Images/Arbeiten/bannerImageArbeiten3.jpg",
  };
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection second={SecondPart} />
      <AlternatingLayoutGrid data={data} />
    </div>
  );
}
