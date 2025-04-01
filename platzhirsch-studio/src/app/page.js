"use client";

import About from "@/components/Home/about";
import ImageSlider from "@/components/Home/banner";
import Choice from "@/components/Home/choice";
import Services from "@/components/Home/services";
import Work from "@/components/Home/work";
import BlogSection from "@/components/Home/blog";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <About />
      {/* <Services /> */}
      {/* <Work /> */}
      <Choice />
      <BlogSection />
    </div>
  );
}
