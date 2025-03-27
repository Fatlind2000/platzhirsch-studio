"use client";

import Image from "next/image";
import Advice from "@/components/Beratung/advice";
import MultiStepForm from "@/components/Beratung/form";

export default function Home() {
  return (
    <div className="">
      <Advice />
      <MultiStepForm />
    </div>
  );
}
