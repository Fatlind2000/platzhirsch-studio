import React from "react";
import Image from "next/image";
import Link from "next/link";

const SinglePageBanner = ({ info }) => {
  return (
    <div className="relative w-full h-[50dvh] lg:h-180">
      {/* Background image - using the image from props */}
      <Image
        src={info.image}
        alt="Banner"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        quality={75}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="relative z-20 flex flex-col pt-23 items-center justify-center h-full">
        {/* Breadcrumb navigation */}
        <div className="flex items-center justify-center text-white gap-2 mb-4 md:mb-6">
          {info.links.map((link, index) => (
            <React.Fragment key={index}>
              <Link href={link.link}>
                <p className="text-sm font-normal uppercase">{link.linkName}</p>
              </Link>
              {index < info.links.length - 1 && <span className="mx-1">/</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Title - you can add this to your BannerInfo if needed */}
        <h1 className="font-bold text-4xl md:text-5xl tracking-normal text-white text-center">{info.title}</h1>
      </div>
    </div>
  );
};

export default SinglePageBanner;
