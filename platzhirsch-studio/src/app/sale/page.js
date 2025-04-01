import SinglePageBanner from "@/components/Reusable/singlePageSlider";
import SaleSection from "@/components/Sale/sale";

export default function Home() {
  const BannerInfo = {
    image: "/Images/Home/download.jpg",
    links: [
      {
        linkName: "Home",
        link: "/",
      },
      {
        linkName: "Sale",
        link: "/sale",
      },
    ],
    title: "Sale", // Added title property
  };

  return (
    <div>
      <SinglePageBanner info={BannerInfo} />
      <SaleSection />
    </div>
  );
}
