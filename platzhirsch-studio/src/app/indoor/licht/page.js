import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Licht/bannerImageLicht1.jpg",
    "/Images/Licht/bannerImageLicht2.jpg",
    "/Images/Licht/bannerImageLicht3.jpg",
    "/Images/Licht/bannerImageLicht4.jpg",
    "/Images/Licht/bannerImageLicht5.jpg",
  ];
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection />
      <AlternatingLayoutGrid />
    </div>
  );
}
