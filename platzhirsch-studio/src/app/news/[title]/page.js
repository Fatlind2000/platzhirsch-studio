import { notFound } from "next/navigation";
import BrandPage from "@/components/MarkenItems/markenitems";
import MarkenItemBanner from "@/components/MarkenItems/markenItemBanner";
import ArticleDetail from "@/components/NewsItem/newsitem";

// Function to slugify the title manually
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\//g, "-")
    .replace(/[ä]/g, "ae")
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[ß]/g, "ss")
    .replace(/[^a-z0-9-]/g, ""); // Remove other special characters
}

// Function to generate static paths
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.news.api.news_data"
    );
    const data = await res.json();

    const paths = data.message.map((marke) => ({
      title: generateSlug(marke.name1),
    }));

    console.log("Generated Static Paths:", paths);

    return paths;
  } catch (error) {
    console.error("Error fetching paths:", error);
    return [];
  }
}

// Function to generate metadata for SEO
export async function generateMetadata({ params }) {
  const { title } = await params;
  try {
    const res = await fetch(
      "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.news.api.news_data"
    );
    const data = await res.json();

    // Find the matching marke based on slugified title
    const marke = data.message.find((m) => generateSlug(m.name1) === title);

    if (!marke) notFound();

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

// Page Component
export default async function NewsDetailPage({ params }) {
  const { title } = await params;
  try {
    const res = await fetch(
      "http://192.168.68.197:8000/api/method/platzhirsch_studio.platzhirsch_studio.doctype.news.api.news_data"
    );
    const data = await res.json();

    const marke = data.message.find((m) => generateSlug(m.name1) === title);

    if (!marke) {
      console.log("No match found!");
      notFound();
    }

    // Prepare banner info
    const BannerInfo = {
      image: marke?.bild_anhagen
        ? `http://192.168.68.197:8000${marke.bild_anhagen}`
        : marke?.artikel_table?.[0]?.bild_anhagen
        ? `http://192.168.68.197:8000${marke.artikel_table[0].bild_anhagen}`
        : marke?.artikel_table?.[1]?.bild_anhagen
        ? `http://192.168.68.197:8000${marke.artikel_table[1].bild_anhagen}`
        : null,

      links: [
        { linkName: "Home", link: "/" },
        { linkName: "News", link: "/news" },
        {
          linkName: marke?.name1 || "Unknown",
          link: `/news/${generateSlug(marke?.name1 || "unknown")}`,
        },
      ],
      title: marke?.name1 || "Untitled",
    };

    return (
      <div>
        <MarkenItemBanner info={BannerInfo} />
        <ArticleDetail data={marke} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching marke data:", error);
    return <div>Error loading the page.</div>;
  }
}
