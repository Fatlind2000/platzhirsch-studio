import React from "react";
import Link from "next/link";

const MarkenItemBanner = ({ info }) => {
  return (
    <div className="relative w-full h-[50dvh] lg:h-180">
      {/* Background image */}
      <img src={info.image} alt="Banner" className="w-full h-full object-cover" />

      {/* Semi-transparent veil over the image */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content container - positioned above both image and veil */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Breadcrumb navigation */}
        <div className="flex items-center justify-center text-white gap-2 mb-4 md:mb-6">
          {info.links.map((link, index) => (
            <React.Fragment key={index}>
              <Link href={link.link}>
                <p className="text-sm font-normal uppercase hover:underline">{link.linkName}</p>
              </Link>
              {index < info.links.length - 1 && <span className="mx-1">/</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-bold text-4xl md:text-5xl tracking-normal text-white text-center">{info.title}</h1>
      </div>
    </div>
  );
};

export default MarkenItemBanner;
