import Head from "next/head";

export default function Seo({ programmeData }) {
  const { title, description } = programmeData;

  return (
    <>
      <Head>
        <title key="title">{`${title}`}</title>
        <meta key="description" name="description" content={`${description}`} />

        {/* twitter card meta tags */}
        <meta key="twitter-title" name="twitter:title" content={`${title}`} />
        <meta
          key="twitter-description"
          name="twitter:description"
          content={`${description}`}
        />

        {/* og card meta tags */}
        <meta key="og-title" property="og:title" content={`${title}`} />
        <meta
          key="og-description"
          property="og:description"
          content={`${description}`}
        />
        <meta key="og-image-alt" property="og:image:alt" content={`${title}`} />
      </Head>
    </>
  );
}
