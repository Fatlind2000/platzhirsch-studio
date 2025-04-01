import React from 'react'
import Image from "next/image";
import teamImage from "../../../public/Images/Team/arbeiten.jpg";


const team = () => {
    return (
        <div>



            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full px-4 py-16 max-w-7xl mx-auto">
                {/* Text section */}
                <div className="w-full lg:w-1/2">
                    <p className="text-[#daa14c] uppercase tracking-widest font-semibold mb-4">
                        karriere
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#303030] leading-tight mb-6">
                        Bewirb dich bei uns als <br /> Vollzeit- oder Teilzeitmitarbeiter.
                    </h2>
                    <p className="text-gray-600">
                        Bei Platzhirsch Home Living haben wir es uns zum Ziel gemacht, mit Gespür für Stil,
                        Exklusivität und Qualität die Wohnträume von anspruchsvollen Bauherren zu
                        verwirklichen. Wir bieten unseren Kunden eine Rundumbetreuung vom Erstkontakt
                        bis zur Schlüsselübergabe – und darüber hinaus. Dabei stehen wir für exzellente
                        Beratung, maßgeschneiderte Lösungen und eine unermüdliche Leidenschaft für
                        hochwertiges Design.

                        Unsere Arbeit basiert auf einem klaren Wertefundament: Teamgeist, Innovation und der Wunsch,
                        stets das Beste für unsere Kunden zu erreichen. <br/> <br/> Um diese Vision zu realisieren, suchen wir
                        talentierte, kreative und engagierte Persönlichkeiten, die unsere Leidenschaft für Wohnkultur
                        und Design teilen.

                        Wir bieten Ihnen nicht nur einen Arbeitsplatz, sondern die Möglichkeit, Teil eines Unternehmens
                        zu werden, das sich durch Inspiration und Exzellenz auszeichnet.

                        Bist du kreativ, hast Erfahrung in der Küchenplanung und möchtest deine Leidenschaft
                        für schöne Innenräume ausleben?

                        Dann bist du bei uns genau richtig!
                    </p>

                </div>

                {/* Image section */}
                <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[700px] lg:w-[500px]">
                    <Image
                        src={teamImage}
                        alt="karriere" 
                        fill
                        className="object-cover "
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"

                    />
                </div>





            </div>



        </div>
    )
}

export default team
