"use client";
import React, { useState, useEffect } from "react";
import { MdLocationOn, MdBusinessCenter, MdAttachMoney } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import teamImage from "../../../public/Images/Team/helmut.jpg";

const KarrierePosition = () => {
  const [openJobId, setOpenJobId] = useState(null);
  const [karriere, setKarriere] = useState([]);

  const toggleJob = (id) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.karriere.api.karriere_data"
        );
        if (!response.ok) throw new Error("Fehler beim Abrufen der Daten");

        const data = await response.json();
        const formattedEvents = data.message.map((member, index) => ({
          id: index,
          title: member.title,
          description: member.stellenbeschreibung,
          salary: member.gehalt_erhalten,
          positions: member.anzahl_der_benötigten_mitarbeiter,
          type: member.arbeitnehmerstatus,
          posted: member.stellenanzeige,
          requirement: member.anforderungen,
          status: member.status,
        }));
        setKarriere(formattedEvents);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    };
    fetchEvents();
  }, []);
  console.log(karriere);
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-15">
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-[#303030] mb-3">Aktuelle Stellenangebote</h2>
          <p className="text-gray-500">Bewerben Sie sich jederzeit gerne auf unsere Stellenangebote</p>
        </div>


        <div>
          {karriere.filter((item) => item.status === "Aktiv").length === 0 ? (
            <p className="text-center text-[#daa14c] text-md">
              Zurzeit haben wir keine offenen Stellenangebote.
            </p>
          ) : (
            karriere
              .filter((item) => item.status === "Aktiv")
              .map((job, index) => (
                <div key={index} className="bg-white border rounded-md p-4 relative overflow-hidden">
                  <div
                    onClick={() => toggleJob(job.id)}
                    className="cursor-pointer flex flex-col md:flex-row justify-between items-center"
                  >
                    {/* Job Header */}
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="w-16 h-16 bg-white rounded flex items-center justify-center shadow text-3xl text-[var(--primary)] font-bold">
                        P
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                        <div className="text-sm text-gray-500 flex flex-wrap items-center gap-3 mt-1">
                          <span className="flex items-center gap-1">
                            <MdBusinessCenter /> Platzhirsch Studio
                          </span>
                          <span className="flex items-center gap-1">
                            <MdLocationOn /> Lochau (Vorarlberg) Österreich
                          </span>
                          <span className="flex items-center gap-1">
                            <MdAttachMoney /> {job.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaUserFriends /> {job.positions} Mitarbeiter gesucht
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end mt-4 md:mt-0">
                      <span className="text-[var(--secondary)] px-3 py-1 rounded text-sm font-medium">
                        {job.type}
                      </span>
                      <span className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                        <BsClockHistory /> Veröffentlicht&nbsp;
                        {job.posted ? new Date(job.posted).toLocaleDateString("de-DE") : "Unbekannt"}
                      </span>
                    </div>
                  </div>

                  {openJobId === index && (
                    <div className="border-t pt-4 text-gray-600 text-sm mt-4 transition-all duration-500">
                      <p>{job.description}</p>
                      <ul className="list-disc list-inside mt-2 list-none">
                        {job?.requirement?.map((req, idx) => (
                          <li key={idx}>{req.anforderungen}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
          )}
        </div>

      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full px-4 py-16 max-w-7xl mx-auto">
        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px] lg:w-[550px]">
          <Image
            src={teamImage}
            alt="Helmut"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 300px"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-[#daa14c] uppercase tracking-widest font-semibold mb-4">Ihr Ansprechpartner</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#303030] leading-tight mb-6">
            Fragen zu den Stellenangeboten
          </h2>
          <p className="text-gray-600 mb-2">
            Auf Fragen zu den offenen Stellenangeboten und zum Bewerbungsprozess freut sich Teamleiter Helmut Schuster.
          </p>
          <p className="text-gray-600">
            Bewerbungen an &nbsp;
            <a href="mailto:helmut.schuster@platzhirsch.studio" className="text-gray-600 hover:text-[#daa14c]">
              helmut.schuster@platzhirsch.studio
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default KarrierePosition;
