"use client";
import ExampleGrid from "@/components/News/news";
import OutdoorSection from "@/components/Outdoor/outdoor";
import BannerSlider from "@/components/Reusable/bannerSlider";
import AlternatingLayoutGrid from "@/components/Reusable/itemsgrid";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <ExampleGrid />
    </div>
  );
}
