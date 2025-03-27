import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Accessories/bannerImageAccessories1.jpg",
    "/Images/Accessories/bannerImageAccessories2.jpg",
    "/Images/Accessories/bannerImageAccessories3.jpg",
  ];
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection />
      <AlternatingLayoutGrid />
    </div>
  );
}
