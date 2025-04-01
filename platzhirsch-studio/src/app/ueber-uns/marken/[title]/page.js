// app/[title]/page.js
import { notFound } from "next/navigation"; // To handle 404 page
import Image from "next/image";
import SinglePageBanner from "@/components/Reusable/singlePageSlider";
import BrandPage from "@/components/MarkenItems/markenitems";
import MarkenItemBanner from "@/components/MarkenItems/markenItemBanner";

// Fetch the paths dynamically from your API for SSG (Static Site Generation)
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.marken.api.marken_data"
    );
    const data = await res.json();

    // Extract paths from the data for each dynamic route
    const paths = data.message.map((marke) => ({
      title: marke.name1.toString(),
    }));

    return paths.map((path) => ({
      params: path,
    }));
  } catch (error) {
    console.error("Error fetching paths:", error);
    return [];
  }
}

// Fetch data for each dynamic page
export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.marken.api.marken_data"
    );
    const data = await res.json();
    const marke = data.message.find((m) => m.name1.toString().toLowerCase() === params.title.toLowerCase());

    if (!marke) {
      notFound(); // Return 404 if brand not found
    }

    return {
      title: marke.name1,
      description: `Learn more about ${marke.name1}`,
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Brand Not Found",
      description: "The brand you are looking for does not exist.",
    };
  }
}

export default async function MarkenDetailPage({ params }) {
  try {
    // Fetch the data for the specific brand based on `params.title`
    const res = await fetch(
      "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.marken.api.marken_data"
    );
    const data = await res.json();

    const marke = data.message.find((m) => m.name1.toString().toLowerCase() === params.title.toLowerCase());

    if (!marke) {
      notFound(); // Return 404 if brand not found
    }
    const BannerInfo = {
      image: `http://192.168.68.197:8000${marke?.bild_anhagen[0]?.bild_anhagen}`,
      links: [
        {
          linkName: "Home",
          link: "/",
        },
        {
          linkName: "ÜBER UNS",
          link: "/ueber-uns",
        },
        {
          linkName: "Marken",
          link: "/ueber-uns/marken",
        },
        {
          linkName: marke.name1,
          link: `/ueber-uns/marken/${marke.name1.toLowerCase()}`,
        },
      ],
      title: marke.name1, // Added title property
    };

    return (
      <div className="">
        <MarkenItemBanner info={BannerInfo} />
        <BrandPage marke={marke} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching marke data:", error);
    return <div>Error loading the page.</div>;
  }
}
