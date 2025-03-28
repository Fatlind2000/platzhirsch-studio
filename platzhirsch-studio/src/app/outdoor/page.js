"use client";
import { useState, useEffect } from "react";
import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Outdoor/bannerImage1.jpg",
    "/Images/Outdoor/bannerImage2.jpg",
    "/Images/Outdoor/bannerImage3.jpg",
    "/Images/Outdoor/bannerImage4.jpg",
    "/Images/Outdoor/bannerImage5.jpg",
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
        const filteredData = data.message.filter((sale) => sale.typen === "Outdoor");
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
    title: "Verlängern Sie Ihr ",
    secondTitle: "Wohnzimmer",
    description: [
      "Und zwar nach draußen. Wie? Mit unseren witterungsbeständigen, hightech Outdoormöbeln und -Accessoires. Denn wir wollen unseren Outdoor Bereich ja nicht nur im Sommer, sondern an schönen Tagen im Frühling, im Spätsommer und auch im goldenem Herbst geniessen können. Verwandeln Sie Ihren Garten, Balkon oder Ihre Terrasse in ein kleines Paradies, in das Sie sich zurückziehen, wenn Sie einmal Ruhe vom Alltag suchen. Was ist entspannender, als einen lauen Frühlings-, Sommer- oder Herbstabend mit einem Glas Wein zu genießen, mit lieben Freunden zu plaudern oder einfach nur die Seele baumeln zu lassen.",
      "Wir haben eine Reihe von internationalen Marken, die jedem Wetter trotzen und Ihrem Garten oder der Terrasse das gewisse Extra verleihen. Den letzten Schliff erzielen wir mit weichen Outdoor-Textilien, stylischen Sonnenschirmen, exzentrischen Heizstrahlern und mit kabellosen LED Bodenleuchten für eine perfekte Beleuchtung.",
      "Ob klassisch, zeitgenössisch oder voller Farbe – wir lassen Ihr Wünsche wahr werden mit Marken wie Minotti, Paola Lenti, Solpuri, Desalto, Sifas, Livintwist, Heatsail und Tuuci.",
    ],
    brands: ["Minotti", "Paola Lenti", "Solpuri", "Desalto", "Sifas", "Livintwist", "Umbrosa", "Tuuci", "Heatsail"],
    image: "/Images/Outdoor/bannerImage5.jpg",
  };
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection second={SecondPart} />
      <AlternatingLayoutGrid data={data} />
    </div>
  );
}
