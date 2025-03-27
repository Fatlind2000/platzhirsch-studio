import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Kuche/bannerImageKuche1.jpg",
    "/Images/Kuche/bannerImageKuche2.jpg",
    "/Images/Kuche/bannerImageKuche3.jpg",
  ];
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection />
      <AlternatingLayoutGrid />
    </div>
  );
}
