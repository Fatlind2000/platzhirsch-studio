"use client";
import { useState, useEffect } from "react";
import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Kuche/bannerImageKuche1.jpg",
    "/Images/Kuche/bannerImageKuche2.jpg",
    "/Images/Kuche/bannerImageKuche3.jpg",
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
        const filteredData = data.message.filter((sale) => sale.typen === "Indoor" && sale.indoor_typen === "Kuche");
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
    title: "DIE Küche – Symbiose von Planung und",
    secondTitle: "Umsetzung",
    description: [
      "Die Küche ist schon längst zum Mittelpunkt des Hauses avanciert, als Ort der Nahrungsaufnahme und als Lebensmittelpunkt. Kein Wunder: in ihr passiert so viel wie in keinem anderen Raum des Hauses. Die Küche ist Treffpunkt für Familie und Freunde, es wird gemeinsam gegessen, getrunken und gelacht und mit allen Sinnen genossen. Sie ist Dreh- und Angelpunkt eines übergreifenden Lebensraumes zum Kochen, Essen und Wohnen.",
      "Im Fokus stehen unsere Designküchen. Sie kombinieren Ästhetik mit hoher Technologie und werden immer öfter auch von preisbewussten Käufern vorgezogen im Wissen um Qualität und einer daraus resultierenden langen Lebensdauer.",
      "Luxus und Leidenschaft, Technologie und Nachhaltigkeit: Bei uns bekommen Sie das ganze Programm geboten. Wir planen gemeinsam mit Ihnen und setzen um, was Sie sich wünschen.",
    ],
    brands: ["Poliform", "Next125", "Schüller"],
    image: "/Images/Kuche/bannerImageKuche3.jpg",
  };
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection second={SecondPart} />
      <AlternatingLayoutGrid data={data} />
    </div>
  );
}
