"use client";

import Marken from "@/components/Marken/marken";
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
        linkName: "ÜBER UNS",
        link: "/ueber-uns",
      },
      {
        linkName: "Marken",
        link: "/ueber-uns/marken",
      },
    ],
    title: "Marken", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <Marken />
    </div>
  );
}
