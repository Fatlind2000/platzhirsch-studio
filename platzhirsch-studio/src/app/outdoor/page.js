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
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection />
      <AlternatingLayoutGrid data={data} />
    </div>
  );
}
