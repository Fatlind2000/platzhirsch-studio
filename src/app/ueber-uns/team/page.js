import React from "react";
import SinglePageBanner from "@/components/Reusable/singlePageSlider";
import Teamsecond from "@/components/Team/team";
import TeamMember from "@/components/Team/teammember";

const page = () => {
  const BannerInfo = {
    image: "/Images/Team/reading-area.jpg",
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
        linkName: "Team",
        link: "/ueber-uns/team",
      },
    ],
    title: "Team", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <Teamsecond />
      <TeamMember />
    </div>
  );
};

export default page;
