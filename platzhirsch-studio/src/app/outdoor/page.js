import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Outdoor/bannerImage1.jpg",
    "/Images/Outdoor/bannerImage2.jpg",
    "/Images/Outdoor/bannerImage3.jpg",
    "/Images/Outdoor/bannerImage4.jpg",
    "/Images/Outdoor/bannerImage5.jpg",
  ];

  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection />
      <AlternatingLayoutGrid />
    </div>
  );
}
