import React from 'react'
import Image from "next/image";
import presseImage from "../../../public/Images/Presse/black-chair-and-desk.jpg";

const presse = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full px-4 py-16 max-w-7xl mx-auto">
                {/* Text section */}
                <div className="w-full lg:w-1/2">
                    <p className="text-[#daa14c] uppercase tracking-widest font-semibold mb-4">
                        presse
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#303030] leading-tight mb-6">
                        Platzhirsch Home Living <br /> in der Presse

                    </h2>
                    <p className="text-gray-600">
                        Pressebereich – Immer auf dem neuesten Stand.

                        Hier finden Sie aktuelle Informationen, Pressemitteilungen und spannende
                        Neuigkeiten rund um unser Unternehmen, unsere exklusiven Marken und unsere
                        neuesten Projekte. Ob es sich um Produktinnovationen, besondere Events oder
                        Kooperationen mit renommierten Partnern handelt – wir halten Sie über alles
                        auf dem Laufenden, was bei uns passiert. Unser Ziel ist es, Transparenz zu
                        schaffen und Ihnen einen umfassenden Einblick in unsere Arbeit und unsere Werte zu bieten.

                        Als vertrauenswürdige Quelle für hochwertige Designlösungen und inspirierende Wohnideen
                        teilen wir unsere Vision und Leidenschaft mit der Welt. <br/><br/> Unser Pressebereich ist der
                        zentrale Anlaufpunkt für Medienvertreter, Designer und Interessierte, die mehr über
                        unsere Marke erfahren möchten. Hier stellen wir Ihnen nicht nur Pressemitteilungen
                        zur Verfügung, sondern auch exklusives Bildmaterial, weiterführende Informationen und
                        detaillierte Einblicke in unsere Projekte und Partnerschaften.

                        Wir legen großen Wert darauf, die Geschichte hinter unseren Produkten und Projekten
                        zu erzählen. Unsere Pressearbeit spiegelt die Leidenschaft und Kreativität wider,
                        die unser Unternehmen auszeichnet, und wir freuen uns, unsere Reise mit Ihnen zu teilen.
                        Wenn Sie Fragen haben oder zusätzliche Materialien benötigen, stehen wir Ihnen jederzeit
                        gerne zur Verfügung.
                    </p>

                </div>

                {/* Image section */}
                <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[700px] lg:w-[500px]">
                    <Image
                        src={presseImage}
                        alt="presse"
                        fill
                        className="object-cover "
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                        objectPosition='right'
                    />
                </div>





            </div>

        </div>
    )
}

export default presse
