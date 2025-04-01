"use client";

import Image from "next/image";
import Advice from "@/components/Beratung/advice";
import MultiStepForm from "@/components/Beratung/form";
import SinglePageBanner from "@/components/Reusable/singlePageSlider";

export default function Home() {
  const BannerInfo = {
    image: "/Images/Home/download.jpg",
    links: [
      {
        linkName: "Home",
        link: "/",
      },
      {
        linkName: "Beratung",
        link: "/beratung",
      },
    ],
    title: "Beratung", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <Advice />
      <MultiStepForm />
    </div>
  );
}
