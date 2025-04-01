import SinglePageBanner from "@/components/Reusable/singlePageSlider";
import Uberuns from "@/components/UberUns/uberuns";
import Austellung from "@/components/UberUns/austellung";

export default function UberUns() {
  const BannerInfo = {
    image: "/Images/UberUns/white-sofas.jpg",
    links: [
      {
        linkName: "Home",
        link: "/",
      },
      {
        linkName: "ÜBER UNS",
        link: "/ueber-uns",
      },
    ],
    title: "ÜBER UNS", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <Uberuns />
      <Austellung />
    </div>
  );
}
