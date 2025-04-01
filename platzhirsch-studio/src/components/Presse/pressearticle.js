import React from 'react';
import Image from "next/image";

const magazines = [
  { title: "New Collections", src: "/Images/Presse/mag1.jpg" },
  { title: "Auf Wolken gebettet", src: "/Images/Presse/mag2.jpg" },
  { title: "Home of Minotti", src: "/Images/Presse/mag3.jpg" },
  { title: "Minotti 2022 Collection", src: "/Images/Presse/mag4.jpg" },
  { title: "Schlafen auf Treca Paris", src: "/Images/Presse/mag5.jpg" },
  { title: "Küchenkultur für Jahre", src: "/Images/Presse/mag6.jpg" },
  { title: "Für ein schönes Zuhause", src: "/Images/Presse/mag7.jpg" },
  { title: "Design Ton in Ton", src: "/Images/Presse/mag8.jpg" },
  { title: "Cooler Outdoor-Style", src: "/Images/Presse/mag9.jpg" },
  { title: "Mehr als nur Möbel", src: "/Images/Presse/mag10.jpg" },
  { title: "Indoor & Outdoor", src: "/Images/Presse/mag11.jpg" },
  { title: "Talk: Susanne Messmer", src: "/Images/Presse/mag12.jpg" },
  { title: "Die individuelle Küche", src: "/Images/Presse/mag12.jpg" },
  { title: "Die Platzhirsch(in)", src: "/Images/Presse/mag13.jpg" },
  { title: "Stilvolles Kochen", src: "/Images/Presse/mag14.jpeg" },
  { title: "In Sommerlaune", src: "/Images/Presse/mag14.jpeg" },
  { title: "Neueröffnung: Platzhirsch Home Living", src: "/Images/Presse/mag16.jpg" },
];

const PresseArticle = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {magazines.map((mag, index) => (
          <div key={index}>
            <div className="relative w-full h-[400px]">
              <Image
                src={mag.src}
                alt={mag.title}
                fill
                className="object-cover shadow-md"
              />
            </div>
            <p className="mt-4 text-sm text-[#1f1f1f] font-medium">{mag.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresseArticle;
