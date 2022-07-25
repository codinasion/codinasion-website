import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const sitemapData = [];
  const SITE_URL = "https://codinasion.vercel.app";
  const allProgrammeData = await fetch(
    `https://raw.githubusercontent.com/${"codinasion"}/${"codinasion-data"}/master/data/programme/${"programmeList.json"}`,
    {
      method: "GET",
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  allProgrammeData.map((data) => {
    sitemapData.push({
      loc: `${process.env.SITE_URL || SITE_URL}/programme/${data.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    });
  });

  return getServerSideSitemap(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
