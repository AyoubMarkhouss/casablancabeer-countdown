import AnimatedTimer from "@/components/Animatedtimer";
import Footer from "@/components/Footer";
import Formulaire from "@/components/Formcount";
import Header from "@/components/Header";
import ImageCarousel from "@/components/Imagecarousel";
import Expandable from "@/components/ui/expandable";
import WaveReveal from "@/components/ui/wave-reveal";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="READY TO REINVENT YOUR SPIRIT ?" />
        <link rel="icon" href="/casawhite.png" />
        <title>Casablanca Beer</title>
        <meta property="og:image" content="/logo-jeep-black.png" />
      </Head>
      <main>
        <Header />

        <ImageCarousel />

        {/* <div className="flex items-center justify-center py-10">
          <div className="max-w-4xl flex flex-col items-center text-center text-2xl gap-2">
            <p>Quelque chose se prépare.</p>
            <p>Une expérience inédite.</p>
            <p>
              Là où les lignes du design s&apos;entrelacent avec les battements
              de la musique, où le style devient manifeste, où la gastronomie
              raconte une histoire, et où la mixologie sublime chaque instant.
            </p>
            <p>
              Cette année, Casablanca Beer t&apos;invite à célébrer l&apos;art
              de la réinvention, dans un univers où chaque détail est une
              promesse, chaque gorgée, une déclaration.
            </p>
            <p>⏳ Le compte à rebours est lancé.</p>
          </div>
        </div> */}
        <div className="relative">
          <Image
            src="/LP-Desktop.webp"
            alt="Footer Background"
            fill
            className="object-cover -z-10"
          />
          <AnimatedTimer />
          <div className="flex z-50 items-center justify-center py-10 md:py-20">
            <div className="px-5 sm:max-w-6xl flex flex-col text-white items-center text-center text-2xl gap-5">
              <p className="goth">
                Là où les lignes du design s&apos;entrelacent avec les
                battements de la musique, où le style devient manifeste, où la
                gastronomie raconte une histoire, et où la mixologie sublime
                chaque instant.
              </p>
              <p className="goth">
                Cette année, Casablanca Beer t&apos;invite à célébrer l&apos;art
                de la réinvention, dans un univers où chaque détail est une
                promesse, chaque gorgée, une déclaration.
              </p>
              <p className="goth">Le compte à rebours est lancé.</p>
            </div>
          </div>
          {/* <div className="md:px-40 pt-5 pb-14">
            <div className="grid text-center text-4xl md:text-5xl grid-cols-1 md:grid-cols-5 justify-center items-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-[#9c8742]">
              <p>Mixology</p>
              <p>Design</p>
              <p>Fashion</p>
              <p>Music</p>
              <p>Food</p>
            </div>
          </div> */}

          <Expandable />
          <Footer />
        </div>
      </main>
    </>
  );
}
