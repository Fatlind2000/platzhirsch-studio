"use client";
import React, { useState } from "react";
import { MdLocationOn, MdBusinessCenter, MdAttachMoney } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import teamImage from "../../../public/Images/Team/helmut.jpg";

const jobs = [
  {
    id: 1,
    title: "Interactive Designer",
    company: "Trello",
    location: "New York, NY, USA",
    salary: "$40 - $60/Hour",
    type: "Vollzeit",
    typeColor: "#303030",
    posted: "1 year ago",
    logo: "T",
    logoColor: "text-blue-600",
    positions: 2,
    description:
      "Als Interactive Designer bist du verantwortlich für die Gestaltung moderner, interaktiver Benutzeroberflächen. Du arbeitest eng mit UX-Teams und Entwicklern zusammen, um pixelgenaue Layouts zu entwickeln.",
  },
  {
    id: 2,
    title: "Finance Manager",
    company: "Coca Cola",
    location: "Birmingham, UK",
    salary: "$35,000 - $40,000",
    type: "Teilzeit",
    typeColor: "#daa14c",
    posted: "1 year ago",
    logo: "C",
    logoColor: "text-red-600",
    positions: 1,
    description:
      "Als Finance Manager leitest du Finanzprojekte, analysierst Budgets und erstellst Monatsberichte. Deine strategische Denkweise hilft unserem Unternehmen beim Wachstum.",
  },
];

const KarrierePosition = () => {
  const [openJobId, setOpenJobId] = useState(null);

  const toggleJob = (id) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#303030]">
            Aktuelle Stellenangebote
          </h2>
          <p className="text-gray-500">
            Bewerben Sie sich jederzeit gerne auf unsere Stellenangebote
          </p>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border rounded-md p-4 relative overflow-hidden transition-all duration-300"
            >
              <div
                onClick={() => toggleJob(job.id)}
                className="cursor-pointer flex flex-col md:flex-row justify-between items-center"
              >
                {/* Left section */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div
                    className={`w-16 h-16 bg-white rounded flex items-center justify-center shadow text-3xl ${job.logoColor} font-bold`}
                  >
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {job.title}
                    </h3>
                    <div className="text-sm text-gray-500 flex flex-wrap items-center gap-3 mt-1">
                      <span className="flex items-center gap-1">
                        <MdBusinessCenter /> {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MdLocationOn /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <MdAttachMoney /> {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUserFriends /> {job.positions}{" "}
                        {job.positions === 1 ? "Mitarbeiter gesucht" : "Mitarbeiter gesucht"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right section */}
                <div className="flex flex-col items-end mt-4 md:mt-0">
                  <span
                    className="text-white px-3 py-1 rounded text-sm font-medium"
                    style={{ backgroundColor: job.typeColor }}
                  >
                    {job.type}
                  </span>
                  <span className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                    <BsClockHistory /> Veröffentlicht {job.posted}
                  </span>
                </div>
              </div>

              {/* Expandable Job Description */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openJobId === job.id
                  ? "max-h-96 opacity-100 mt-6"
                  : "max-h-0 opacity-0"
                  } border-t pt-4 text-gray-600 text-sm`}
              >
                {job.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full px-4 py-16 max-w-7xl mx-auto mb-12">
        {/* Image section */}
        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px] lg:w-[550px]">
          <Image
            src={teamImage}
            alt="Helmut"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 300px"
          />
        </div>

        {/* Text section */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#daa14c] uppercase tracking-widest font-semibold mb-4">
            Ihr Ansprechpartner
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#303030] leading-tight mb-6">
            Fragen zu den Stellenangeboten
          </h2>

          <p className="text-gray-600 mb-2">
            Auf Fragen zu den offenen Stellenangeboten und zum
            Bewerbungsprozess freut sich Teamleiter Helmut Schuster.
          </p>

          <p className="text-gray-600">
            Bewerbungen an{" "}
            <a
              href="mailto:helmut.schuster@platzhirsch.studio"
              className="text-gray-600 hover:text-[#daa14c]"
            >
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
