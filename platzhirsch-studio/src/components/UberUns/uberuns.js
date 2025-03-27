import React from 'react'
import Image from 'next/image'
import uberimg from "../../../public/Images/UberUns/tomdixon.webp"
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

const uberuns = () => {
    return (
        <>
         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full px-4 py-16 max-w-7xl mx-auto">
            {/* Image section */}
            <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[700px] lg:w-[500px]">
  <Image
    src={uberimg}
    alt="Creative Kitchen"
    fill
    className="object-cover "
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
    placeholder="blur"
  />
</div>


            {/* Text section */}
            <div className="w-full lg:w-1/2">
                <p className="text-[#daa14c] uppercase tracking-widest font-semibold mb-4">
                    Über Uns
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#303030] leading-tight mb-6">
                    Hier erfahren <br /> Sie alles über uns
                </h2>
                <p className="text-gray-600">
                    Hier erfahren Sie alles über uns – wer wir sind, was uns ausmacht und wie wir tagtäglich
                    daran arbeiten, unsere Vision von außergewöhnlichem Service und herausragendem Design zu
                    verwirklichen. Unsere Leidenschaft für Qualität, Kreativität und Innovation spiegelt sich
                    in jedem Detail unserer Arbeit wider.

                    Wir präsentieren Ihnen nicht nur unsere sorgfältig kuratierten Ausstellungen und Marken, sondern
                    auch unser hochmotiviertes Team, das mit Herz und Expertise an Ihrer Seite steht.
                    Darüber hinaus bieten wir Ihnen spannende Einblicke in unsere langjährigen Partnerschaften,
                    nachhaltigen Projekte und die neuesten Entwicklungen in unserer Branche.

                    Erfahren Sie mehr über unsere Mission, die einzigartigen Werte, die uns antreiben, und die inspirierenden
                    Geschichten, die hinter unseren Erfolgen stehen. Werden Sie Teil unserer Reise, entdecken Sie Karrierechancen
                    in unserem dynamischen Unternehmen und lassen Sie sich von unserer Begeisterung für exzellentes Design
                    und erstklassige Kundenerlebnisse anstecken.
                </p>

            </div>
        </div>
        </>
       

    )
}

export default uberuns
