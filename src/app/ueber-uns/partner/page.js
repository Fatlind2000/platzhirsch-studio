import React from "react";
import SinglePageBanner from "@/components/Reusable/singlePageSlider";
import PartnerSecond from "@/components/Partner/partner";

const page = () => {
  const BannerInfo = {
    image: "/Images/Partner/dinner-area.jpg",
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
        linkName: "Partner",
        link: "/ueber-uns/partner",
      },
    ],
    title: "Partner", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <PartnerSecond />
    </div>
  );
};

export default page;
