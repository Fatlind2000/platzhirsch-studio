"use client";
import { useState, useEffect } from "react";
import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Licht/bannerImageLicht1.jpg",
    "/Images/Licht/bannerImageLicht2.jpg",
    "/Images/Licht/bannerImageLicht3.jpg",
    "/Images/Licht/bannerImageLicht4.jpg",
    "/Images/Licht/bannerImageLicht5.jpg",
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
        const filteredData = data.message.filter((item) => item.typen === "Indoor" && item.indoor_typen === "Licht");
        const formattedEvents = filteredData.map((item) => ({
          title: item.title,
          description: item.beschreibung,
          image: item.bild_anhagen,
          status: item.status,
        }));
        setData(formattedEvents);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    };
    fetchEvents();
  }, []);
  const SecondPart = {
    title: "Licht ",
    secondTitle: "inszeniert",
    description: [
      "Licht illuminiert. Licht beeinflusst Wahrnehmungen und Emotionen. Licht schafft Atmosphäre und Stimmungen. Daher sollte jeder Raum so ausgeleuchtet sein, dass er positive Empfindungen weckt. Denn nur Licht gelingt es, Räume zu verändern, Akzente zu setzen und Szenen zu schaffen. Eine optimale Lichtberatung ist das Um und Auf, wenn der Raumcharakter gezielt unterstrichen und erstklassiges Design mit höchster Funktionalität verbunden werden soll.",
    ],
    brands: ["Flos", "Brand van Egmond", "Tom Dixon", "Quasar"],
    image: "/Images/Licht/bannerImageLicht5.jpg",
  };
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection second={SecondPart} />
      <AlternatingLayoutGrid data={data} />
    </div>
  );
}
