import AnimatedTimer from "@/components/Animatedtimer";
import Footer from "@/components/Footer";
import Formulaire from "@/components/Formcount";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="READY TO REINVENT YOUR SPIRIT ?" />
        <link rel="icon" href="/Casablanca.png" />
        <title>Casablanca Beer</title>
        <meta property="og:image" content="/logo-jeep-black.png" />
      </Head>
      <main>
        {/* <Header /> */}
        <AnimatedTimer />
        {/* <Formulaire /> */}
        {/* <Footer /> */}
      </main>
    </>
  );
}
