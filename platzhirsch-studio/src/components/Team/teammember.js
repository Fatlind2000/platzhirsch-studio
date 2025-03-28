"use client";
import { useState, useEffect } from "react";

import React from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";

const TeamMember = () => {
  const [team, setTeam] = useState([]); // Ruaj ngjarjet nga API

  // Merr të dhënat nga API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.teams.api.teams_data"
        );

        // Kontrollo nëse përgjigja është e suksesshme
        if (!response.ok) {
          throw new Error("Gabim gjatë marrjes së të dhënave");
        }

        // Kthe përgjigjen në JSON
        const data = await response.json();

        // Formato ngjarjet për FullCalendar
        const formattedEvents = data.message.map((member) => ({
          title: member.name1,
          role: member.positionsart,
          image: member.bild_anhagen,
          email: member.e_mail,
          status: member.status,
        }));

        // Vendos ngjarjet në state
        setTeam(formattedEvents);
      } catch (error) {
        console.error("Gabim gjatë marrjes së ngjarjeve:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <p className="text-[#daa14c] uppercase tracking-widest font-semibold mb-2">unser Team kennen</p>
      <h2 className="text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-12">
        Wir gestalten Lebensräume,
        <br className="hidden md:block" /> die begeistern.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {team
          .filter((item) => item.status === "Aktiv")
          .map((member, index) => (
            <div key={index} className="text-center group overflow-hidden">
              {/* Image container */}
              <div className="relative w-full h-[400px] overflow-hidden">
                <img
                  src={`http://192.168.68.197:8000${member?.image}`}
                  alt={member?.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={`mailto:${member?.email}`} className="text-white text-3xl hover:text-[#daa14c] transition">
                    <HiOutlineMail />
                  </a>
                </div>
              </div>

              <p className="font-bold mt-4 text-[#1f1f1f]">{member?.title}</p>
              <p className="text-sm text-gray-500">{member?.role}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamMember;
