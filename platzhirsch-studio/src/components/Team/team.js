import React from 'react'
import Image from "next/image";
import teamImage from "../../../public/Images/Team/dark-table.jpg"; 


const team = () => {
    return (
        <div>



            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full px-4 py-16 max-w-7xl mx-auto">
                {/* Image section */}
                <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[700px] lg:w-[500px]">
                    <Image
                        src={teamImage}
                        alt="Creative Kitchen"
                        fill
                        className="object-cover "
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                       
                    />
                </div>


                {/* Text section */}
                <div className="w-full lg:w-1/2">
                    <p className="text-[#daa14c] uppercase tracking-widest font-semibold mb-4">
                        Unser Team
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#303030] leading-tight mb-6">
                        Hier erfahren <br /> Sie alles über uns
                    </h2>
                    <p className="text-gray-600">
                        Begeisterung für exklusive Marken, ein feines Gespür für Design und ein ausgeprägtes Empfinden
                        für Persönlichkeit – das und mehr eint unser großartiges Team. Jeder einzelne von uns bringt nicht
                        nur Expertise und Leidenschaft für das, was wir tun, mit, sondern auch die Fähigkeit, individuelle
                        Wünsche und Bedürfnisse zu verstehen und umzusetzen.

                        Unser Team besteht aus erfahrenen Fachleuten, kreativen Köpfen und engagierten Persönlichkeiten,
                        die sich täglich dafür einsetzen, Ihnen ein einzigartiges Erlebnis zu bieten. <br/><br/> Gemeinsam arbeiten
                        wir daran, höchste Qualität, innovative Ideen und persönliche Beratung miteinander zu vereinen.

                        Ob es um die Auswahl von Design-Highlights, die Planung Ihrer Wohnträume oder die Umsetzung spezieller
                        Projekte geht – wir sind mit Herz und Verstand für Sie da. Für uns steht nicht nur die Ästhetik im
                        Mittelpunkt, sondern vor allem die Verbindung zwischen Mensch und Raum, die wir mit unserer Arbeit
                        schaffen möchten.
                    </p>

                </div>
            </div>



        </div>
    )
}

export default team
