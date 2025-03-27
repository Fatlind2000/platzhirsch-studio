import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  const images = [
    "/Images/Wohnen/bannerImage1.jpg",
    "/Images/Wohnen/bannerImage2.jpg",
    "/Images/Wohnen/bannerImage3.jpg",
    "/Images/Wohnen/bannerImage4.jpg",
    "/Images/Wohnen/bannerImage5.jpg",
    "/Images/Wohnen/bannerImage6.jpg",
    "/Images/Wohnen/bannerImage7.jpg",
    "/Images/Wohnen/bannerImage8.jpg",
    "/Images/Wohnen/bannerImage9.jpg",
    "/Images/Wohnen/bannerImage10.jpg",
  ];
  return (
    <div>
      <BannerSlider images={images} />
      <OutdoorSection />
      <AlternatingLayoutGrid />
    </div>
  );
}
