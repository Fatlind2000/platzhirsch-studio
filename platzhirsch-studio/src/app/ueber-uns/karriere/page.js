import React from "react";
import KarriereSecond from "@/components/Karriere/karriere";
import KarrierePosition from "@/components/Karriere/karriereposition";
import SinglePageBanner from "@/components/Reusable/singlePageSlider";

const page = () => {
  const BannerInfo = {
    image: "/Images/Team/dinner-table.jpg",
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
        linkName: "Karriere",
        link: "/ueber-uns/karriere",
      },
    ],
    title: "Karriere", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <KarriereSecond />
      <KarrierePosition />
    </div>
  );
};

export default page;
