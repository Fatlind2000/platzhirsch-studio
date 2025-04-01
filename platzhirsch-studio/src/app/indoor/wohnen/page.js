"use client";
import { useState, useEffect } from "react";
import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Wohnen/bannerImage1.jpg",
    "/Images/Wohnen/bannerImage2.jpg",
    "/Images/Wohnen/bannerImage3.jpg",
    "/Images/Wohnen/bannerImage4.jpg",
    "/Images/Wohnen/bannerImage5.jpg",
    "/Images/Wohnen/bannerImage6.jpg",
    "/Images/Wohnen/bannerImage7.jpg",
    "/Images/Wohnen/bannerImage8.jpg",
    "/Images/Wohnen/bannerImage9.jpg",
    "/Images/Wohnen/bannerImage10.jpg",
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
        const filteredData = data.message.filter((item) => item.typen === "Indoor" && item.indoor_typen === "Wohnen");
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
    title: "Wohnzimmer – Spiegel Ihrer ",
    secondTitle: "Persönlichkeit",
    description: [
      "Das Wohn- und Schlafzimmer sind die wichtigsten Räume. Das Wohnzimmer befriedigt die meisten Bedürfnisse. Hier wird relaxt, gelesen und Musik gehört, hier treffen Familie und Freunde zusammen. Deswegen muss es einladend und gemütlich sein. Das Schlafzimmer ist unser privater und intimer Rückzugsort.",
      "Die wichtigsten Möbelstücke sind Sofas oder Lounges und Sessel, Betten, Beistell- und Nachttische, Regale, Vitrinen, Sideboards und gegebenenfalls ein Raumteiler. Alles das vereinen wir in unseren international bekannten Marken wie Minotti, Poliform, Classicon, Rimadesio, Paola Lenti, Treca Paris und Eichholtz. Für das gewisse Etwas erstellen wir ein passendes Farbkonzept mit Tapeten und Wandfarben, finden die perfekte Beleuchtung und flauschige Teppiche.",
    ],
    brands: ["Minotti", "Poliform", "ClassiCon", "Rimadesio", "Eichholtz", "Treca Paris"],
    image: "/Images/Wohnen/bannerImage10.jpg",
  };
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection second={SecondPart} />
      <AlternatingLayoutGrid data={data} />
    </div>
  );
}
