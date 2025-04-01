'use client'

import React from "react";
import Image from "next/image";
import kitchenImg from "../../../public/Images/UberUns/tomdixon-white-set.webp"; // ndrysho me path-in real
import { PiNotePencilLight, PiPencilSimpleLineLight } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImage from "../../../public/Images/UberUns/Rimadesio-Modulor.jpg";



const ausstellung = () => {

  const imageSlides = [
    "/Images/UberUns/living.jpg",
    "/Images/UberUns/livingroom-view.jpg",
    "/Images/UberUns/gold-vase.jpg",
    "/Images/UberUns/grey-vase.jpg",

  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,

  };


  return (

    <>
      <div className="max-w-7xl mx-auto overflow-hidden mt-20 mb-20 px-4">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1 },
            },
          ]}
        >
          {[
            "/Images/Home/tuuci.png",
            "/Images/Home/heritage.png",
            "/Images/Home/umbrosa.png",
            "/Images/Home/coppenhagen.png",
            "/Images/Home/treca.png",
            "/Images/Home/trapa.png",
          ].map((src, index) => (
            <div key={index} className="px-2">
              <div className="relative h-[40px] w-full">
                <Image
                  src={src.trim()}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#daa14c] uppercase tracking-widest font-semibold mb-4">
          Platzhirsch Showroom
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#303030] leading-tight mb-6">
            Inspiration ist der Start jeder Einrichtung.
          </h2>
          <p className="text-gray-600">
            Wenn es um eine neue Einrichtung geht, steht das Sammeln von Inspirationen am Anfang.
            Dafür haben wir unseren umfangreich bestückten Showroom geschaffen.
            Hier zeigen wir Ideen und geben Einblicke in die Welt unserer anspruchsvollen
            und meist nachhaltig orientierten Möbelmarken wie Minotti, Poliform, Rimadesio,
            ClassiCon, Flos, Eichholtz, Paola Lenti, Treca Paris und viele mehr.

            Schöne Accessoires, hochwertige Wandfarben und Tapeten sowie Teppiche runden das
            umfangreiche Sortiment ab. Außerdem lässt es sich hier nach Belieben probeliegen,
            probesitzen und probeträumen.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <Slider {...sliderSettings}>
            {imageSlides.map((src, index) => (
              <div key={index} className="relative h-[500px] w-full">
                <Image
                  src={src.trim()}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="relative w-full h-150 ">
        <Image
          src={bgImage}
          alt="Über Uns"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
          quality={75}
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full">

          <h1 className="text-base mb-8 text-[#daa14c] tracking-[0.7] font-semibold">KARRIERE</h1>

          <p className="font-bold text-4xl md:text-5xl tracking-normal text-white text-center mb-8">
            Bewirb dich bei uns als <br /> Vollzeit- oder Teilzeitmitarbeiter.
          </p>
          <Link href="/">
            <button className="mx-auto inline-flex items-center gap-2 justify-center text-sm bg-[#daa14c] text-white font-bold cursor-pointer px-8 py-3 rounded-full hover:bg-[#c88f3f] transition delay-150 hover:text-white">
              MEHR <BsArrowRight/>
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-6">
      <p className="text-[#daa14c] text-center uppercase tracking-widest font-semibold mb-4">
          unser studio
          </p>
        <h2 className="text-3xl font-bold text-[#303030] text-center">360-Grad-Tour</h2>
        <p className="text-gray-700 text-center">
          Tauchen Sie ein in die Welt von Platzhirsch Home Living und erleben Sie unser Studio ganz bequem von zu Hause aus.
          Mit unserer 360-Grad-Tour laden wir Sie ein, unsere beeindruckenden Ausstellungen, stilvollen Möbel und inspirierenden Wohnkonzepte virtuell zu entdecken.
        </p>
        <p className="text-gray-700 text-center">
          Bewegen Sie sich durch unsere sorgfältig gestalteten Räume, erkunden Sie unsere Design-Highlights aus nächster Nähe und lassen Sie sich von unserer einzigartigen Atmosphäre begeistern.
          Egal, ob Sie nach neuen Einrichtungsideen suchen, eine Vorschau auf unsere Kollektionen erhalten möchten oder einfach nur Inspiration sammeln – unsere 360-Grad-Tour bietet Ihnen ein umfassendes Erlebnis.
        </p>
        <div className="aspect-video w-full h-150">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1735203151096!6m8!1m7!1sCAoSLEFGMVFpcE9INDQ0M1hMX3BwU2dfbm5RTzlnb2hVR0hDTzBuU1k1cEdBV2JO!2m2!1d47.53018791759509!2d9.751478651722408!3f280!4f0!5f0.7820865974627469"
            allowFullScreen
            loading="lazy"
            className="w-full h-150 border-none"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ausstellung;
