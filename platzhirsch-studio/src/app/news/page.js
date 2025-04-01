"use client";
import ExampleGrid from "@/components/News/news";
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
        linkName: "News",
        link: "/news",
      },
    ],
    title: "News", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <ExampleGrid />
    </div>
  );
}
