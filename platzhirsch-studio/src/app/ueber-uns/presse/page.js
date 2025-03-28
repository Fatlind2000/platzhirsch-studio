import React from "react";
import SinglePageBanner from "@/components/Reusable/singlePageSlider";
import PresseSecond from "@/components/Presse/presse";
import PresseArticle from "@/components/Presse/pressearticle";

const page = () => {
  const BannerInfo = {
    image: "/Images/Presse/cool-living-room.jpg",
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
        linkName: "Presse",
        link: "/ueber-uns/presse",
      },
    ],
    title: "Presse", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <PresseSecond />
      <PresseArticle />
    </div>
  );
};

export default page;
