import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArticleDetail = ({ data }) => {
  // Static data for "Weitere Neuigkeiten" section
  const weitereNeuigkeiten = [
    {
      title: "Inspiration für einen unvergesslichen Sommer",
      description:
        "Erweitern Sie Ihren Innenbereich mit den exklusiven Outdoor-Kollektionen von Minotti, Solpuri und EMU.",
      image: "/Images/NewsItem/inspirationfur.jpg", // Replace with actual image path
      link: "/news/inspiration-fuer-einen-unvergesslichen-sommer",
    },
    {
      title: "Salone del Mobile 2024 und Möbel für den Außenbereich",
      description:
        "Wir berichten von der Salone del Mobile 2024 und stellen Ihnen exklusive Möbel für den Außenbereich vor.",
      image: "/Images/NewsItem/salonedelMobile.jpg", // Replace with actual image path
      link: "/news/salone-del-mobile-2024-und-moebel-fuer-den-aussenbereich",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Title - Centered */}
      {data.name1 && <h1 className="text-4xl font-bold text-center mb-4">{data.name1}</h1>}
      {data.daten && (
        <p className="font-bold text-center mb-12 text-lg">
          {new Date(data.daten).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" })}
        </p>
      )}

      <div className="flex flex-col gap-12">
        <div className="w-full">
          {data.beschreibung && (
            <div className="prose lg:prose-xl">
              {data.beschreibung.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="w-full">
          {data.bild_anhagen && (
            <div className="relative  rounded-lg overflow-hidden">
              <img
                src={`http://192.168.68.197:8000${data.bild_anhagen}`}
                alt={data.name1 || "Article image"}
                className="object-cover w-full max-h-[550px]"
              />
            </div>
          )}

          {data.artikel_table?.length > 0 && (
            <div className="">
              <div className="grid grid-cols-1">
                {data.artikel_table.map((artikel) => (
                  <div key={artikel.name} className=" p-4">
                    {artikel.artikel_name && <h3 className="text-2xl font-medium mb-2">{artikel.artikel_name}</h3>}

                    {artikel.bild_anhagen && (
                      <div className="relative max-h-[400px] mb-4">
                        <img
                          src={`http://192.168.68.197:8000${artikel.bild_anhagen}`}
                          alt={artikel.artikel_name || "Product image"}
                          className="object-cover rounded max-h-[400px] w-full"
                        />
                      </div>
                    )}

                    {artikel.beschreibung && (
                      <p className="text-gray-600 mb-4">{artikel.beschreibung.split("\n")[0]}</p>
                    )}
                    {artikel.unternehmen && (
                      <Link
                        href={`/ueber-uns/marken/${artikel.unternehmen.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-block px-10 py-2 bg-[var(--secondary)] text-white rounded-lg hover:bg-[var(--primary)] transition-colors"
                      >
                        {artikel.unternehmen}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Weitere Neuigkeiten Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Weitere Neuigkeiten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weitereNeuigkeiten.map((item, index) => (
              <div key={index} className="overflow-hidden ">
                {item.image && (
                  <div className="relative aspect-video">
                    <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                  </div>
                )}
                <div className="p-6 pl-0">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link
                    href={item.link}
                    className="inline-block px-6 py-2 bg-[var(--secondary)] text-white rounded-lg hover:bg-[var(--primary)] transition-colors"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
