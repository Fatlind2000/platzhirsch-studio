import React from "react";
import KontaktSecond from "@/components/Kontakt/kontakt";
import SinglePageBanner from "@/components/Reusable/singlePageSlider";

const page = () => {
  const BannerInfo = {
    image: "/Images/Newsletter/room.jpg",
    links: [
      {
        linkName: "Home",
        link: "/",
      },
      {
        linkName: "Kontakt",
        link: "/kontakt",
      },
    ],
    title: "Kontakt", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <KontaktSecond />
    </div>
  );
};

export default page;
