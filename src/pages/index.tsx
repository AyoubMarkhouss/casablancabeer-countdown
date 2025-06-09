import AnimatedTimer from "@/components/Animatedtimer";
import Footer from "@/components/Footer";
import Formulaire from "@/components/Formcount";
import Header from "@/components/Header";
import ImageCarousel from "@/components/Imagecarousel";
import Imageslider from "@/components/Imageslider";
import Expandable from "@/components/ui/expandable";
import WaveReveal from "@/components/ui/wave-reveal";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
        {/* Header Logo Red */}
        <div className="flex justify-center items-center h-32 bg-white">
          <Image
            alt="logo"
            src="/png/Logored.png"
            height={1500}
            width={1500}
            className="w-36"
          />
        </div>

        {/* Slider image */}
        <div className="w-full flex-shrink-0">
          <img
            loading="lazy"
            src="/png/slider.webp"
            className="w-full h-full lg:h-[550px] object-cover"
          />
        </div>

        {/* Yassine morabite desc */}
        <div className="px-5 md:px-20 lg:px-40 py-10 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {/* Image Section */}
            <div className="w-full hidden md:block col-span-1">
              <Image
                src="/png/ym.webp"
                alt="Casablanca Beer"
                width={500}
                height={600}
                className="w-96 h-auto object-contain"
              />
            </div>

            {/* Text Section */}
            <div className=" col-span-2 flex flex-col justify-center pl-0 md:pl-14">
              <h1 className="text-5xl text-center md:text-start md:text-4xl lg:text-5xl xl:text-7xl  text-[#a80017] ">
                REINVENT YOUR <br /> SPIRIT OF MOROCCO
              </h1>
              <p className="mt-4 goth text-sm lg:text-base text-gray-950 text-justify">
                Casablanca Beer s’associe à Yassine Morabit pour signer une
                édition exclusive qui redéfinit l’élégance marocaine. Quand
                l’art de la création rencontre l’audace du design, tradition et
                modernité se réinventent pour une expérience immersive inédite.
                Une collaboration où chaque détail célèbre le style, l’héritage
                et la créativité.
              </p>
            </div>
            <div className="w-full md:hidden col-span-1 pt-5">
              <Image
                src="/png/ym.webp"
                alt="Casablanca Beer"
                width={500}
                height={600}
                className="w-96 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* The two Hands */}
        {/* laptop */}
        <div className="md:grid grid-cols-3 -mb-1 hidden">
          <div>
            <Image
              src="/png/lefthand.webp"
              alt="Casablanca Beer"
              width={900}
              height={600}
              className="w-96 md:w-[33rem] object-cover"
            />
          </div>
          <div className="text-center flex flex-col items-center justify-center lg:px-10">
            <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-6xl  text-[#a80017] ">
              GET YOUR <br /> LIMITED EDITION
            </h1>
            <p className="mt-4 goth text-xs lg:text-base text-gray-950 text-center">
              De la bouteille à la canette, Yassine Morabite façonne un décor où
              chaque détail raconte une histoire. Les lignes marocaines
              s’élèvent dans une vision minimaliste.
            </p>
          </div>
          <div>
            <Image
              src="/png/righthand.webp"
              alt="Casablanca Beer"
              width={500}
              height={600}
              className="w-96 md:w-[33rem]  object-cover"
            />
          </div>
        </div>
        {/* mobile */}
        <div className="grid grid-cols-2 -mb-1 md:hidden pt-10">
          <div className="col-span-2 text-center flex flex-col items-center justify-center px-14 mb-5">
            <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl text-[#a80017] ">
              GET YOUR LIMITED EDITION
            </h1>
            <p className="mt-2 goth text-sm lg:text-base text-gray-950 text-center">
              De la bouteille à la canette, Yassine Morabite façonne un décor où
              chaque détail raconte une histoire. Les lignes marocaines
              s’élèvent dans une vision minimaliste.
            </p>
          </div>
          <div>
            <Image
              src="/png/lefthand.webp"
              alt="Casablanca Beer"
              width={900}
              height={600}
              className="w-96 md:w-[33rem] object-cover"
            />
          </div>
          {/* <div className="text-center flex flex-col items-center justify-center lg:px-10">
            <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-6xl  text-[#a80017] ">
              GET YOUR <br /> LIMITED EDITION
            </h1>
            <p className="mt-4 goth text-xs lg:text-base text-gray-950 text-center">
              De la bouteille à la canette, Yassine Morabite façonne un décor où
              chaque détail raconte une histoire. Les lignes marocaines
              s’élèvent dans une vision minimaliste.
            </p>
          </div> */}
          <div>
            <Image
              src="/png/righthand.webp"
              alt="Casablanca Beer"
              width={500}
              height={600}
              className="w-96 md:w-[33rem]  object-cover"
            />
          </div>
        </div>

        {/* Image slider  */}
        <Imageslider />

        {/* BAYA ET GHAYDA  */}
        <div className="px-6 md:px-20 lg:px-40 py-24">
          <div className=" text-center flex flex-col items-center justify-center md:px-20">
            <h1 className="text-4xl md:text-4xl lg:text-3xl xl:text-6xl  text-[#a80017] ">
              LE TISSU COMME MANIFESTE.
            </h1>
            <p className="mt-4 goth text-sm md:text-base text-gray-950 text-center">
              Designer iconique, Yassine Morabite réinterprète les classiques
              marocains avec des coupes sculptées, des broderies graphiques, et
              un langage visuel résolument contemporain.
            </p>
          </div>
          <div className="grid grid-cols-2 col-span-2 md:col-span-1 mt-24 gap-x-5">
            <div className="flex flex-col justify-center gap-5 col-span-2 md:col-span-1">
              <div className="flex flex-col ">
                <h1 className="text-3xl hidden md:block md:text-4xl lg:text-3xl xl:text-6xl uppercase text-[#a80017] ">
                  la street food
                  <br />
                  en haute définition.
                </h1>
                <h1 className="text-3xl md:hidden md:text-4xl lg:text-3xl xl:text-6xl uppercase text-[#a80017] ">
                  la street food en haute définition.
                </h1>
                <p className="mt-4 goth text-sm md:text-base text-gray-950 text-justify">
                  Les cheffes BAYA et Ghayda revisitent les classiques de la
                  cuisine populaire avec précision et modernité : karane twisté,
                  panacotta zaalouk, tajine décomposé…
                </p>
              </div>
              <div className="flex lg:justify-end justify-center md:hidden">
                <Image
                  src="/png/baya.webp"
                  alt="Casablanca Beer"
                  width={500}
                  height={600}
                  className="w-[26rem] h-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl uppercase text-[#a80017] ">
                  la tradition, secouée.
                </h1>
                <p className="mt-4 goth text-sm md:text-base text-gray-950 text-justify">
                  BAYA réinvente la mixologie marocaine avec audace. Fleur
                  d’oranger, gingembre, arak infusé... Chaque cocktail à base de
                  Casablanca Beer devient un voyage sensoriel.
                </p>
              </div>
            </div>
            <div className="md:flex justify-end hidden">
              <Image
                src="/png/baya.webp"
                alt="Casablanca Beer"
                width={500}
                height={600}
                className="w-[26rem] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* MUSIC */}
        <div className="px-6 md:px-20 lg:px-40 py-14 md:py-24 bg-[#ededed]">
          <div className="grid grid-cols-2 ">
            <div className="pb-5 md:hidden col-span-2 md:col-span-1 flex flex-col  justify-center  md:pl-14">
              <h1 className="text-3xl hidden md:block md:text-4xl lg:text-7xl uppercase text-[#a80017] ">
                une résonance <br /> marocaine.
              </h1>
              <h1 className="md:hidden text-3xl md:text-4xl lg:text-7xl uppercase text-[#a80017] ">
                une résonance marocaine.
              </h1>
              <p className="mt-4 goth text-sm md:text-base text-gray-950 text-justify">
                Entre électro, soul et inspirations gnawa, le collectif Sodfa,
                Yadee et Ramoon composent une ambiance sonore inédite. Une
                fusion qui bouscule, rassemble et envoûte.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full col-span-2 md:col-span-1">
              <iframe
                src="https://open.spotify.com/embed/track/11YllAeqXaX0hQTNhSqKbc?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            {/* Text Section */}
            <div className="hidden col-span-2 md:col-span-1 md:flex flex-col  justify-center  md:pl-14">
              <h1 className="text-3xl hidden md:block md:text-4xl lg:text-7xl uppercase text-[#a80017] ">
                une résonance <br /> marocaine.
              </h1>
              <h1 className="md:hidden text-3xl md:text-4xl lg:text-7xl uppercase text-[#a80017] ">
                une résonance marocaine.
              </h1>
              <p className="mt-4 goth text-sm md:text-base text-gray-950 text-justify">
                Entre électro, soul et inspirations gnawa, le collectif Sodfa,
                Yadee et Ramoon composent une ambiance sonore inédite. Une
                fusion qui bouscule, rassemble et envoûte.
              </p>
            </div>
          </div>
        </div>

        <footer className=" h-32 w-full bg-[#a80017] text-white px-20 border-t-2">
          <div className="relative z-10 h-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-0">
            <span className="text-xs sm:text-sm font-medium text-center">
              CASABLANCA BEER © TOUS DROITS RÉSERVÉS
            </span>

            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <span className="sm:inline">SUIVEZ-NOUS SUR</span>
              <div className="flex items-center gap-2">
                <Link
                  href="https://www.instagram.com/casablanca.beer/"
                  className="border-2 rounded-full p-1.5 group hover:bg-white"
                >
                  <FaInstagram className="fill-white group-hover:fill-black transition-all duration-300" />
                </Link>
                <Link
                  href="https://web.facebook.com/CasablancaBeerOfficielle?locale=fr_FR"
                  className="border-2 rounded-full p-1.5 group hover:bg-white"
                >
                  <FaFacebook className="fill-white group-hover:fill-black transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
