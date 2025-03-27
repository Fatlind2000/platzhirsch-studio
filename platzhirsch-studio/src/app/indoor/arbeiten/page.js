import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Arbeiten/bannerImageArbeiten1.jpg",
    "/Images/Arbeiten/bannerImageArbeiten2.jpg",
    "/Images/Arbeiten/bannerImageArbeiten3.jpg",
  ];
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection />
      <AlternatingLayoutGrid />
    </div>
  );
}
