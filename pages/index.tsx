import type { NextPage } from "next";
import Head from "next/head";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Information from "../components/sections/Information";
import SecondFeatures from "../components/sections/SecondFeatures";

const metaTags = {
  title: "RaxDex - Decentralized Trading on PulseChain the Evolution of DeFi",
  description:
    "PulseChain Swap enables efficient trading by pooling liquidity from different traders and using its smart contract router to find the best available price. Exchange any combination of PLS-20 tokens permissionlessly with no restriction.",
  url: "https://fiverr-client-landing-page.vercel.app/",
  thumbnail: "https://fiverr-client-landing-page.vercel.app/thumbnail.png",
};

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>{metaTags.title}</title>
        <meta name="title" content={metaTags.title} />
        <meta name="description" content={metaTags.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaTags.url} />
        <meta property="og:title" content={metaTags.title} />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:image" content={metaTags.thumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaTags.url} />
        <meta property="twitter:title" content={metaTags.title} />
        <meta property="twitter:description" content={metaTags.description} />
        <meta property="twitter:image" content={metaTags.thumbnail} />
      </Head>
      <Hero />
      <Features />
      <SecondFeatures />
      <Information />
    </main>
  );
};

export default Home;
