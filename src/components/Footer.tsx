import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative">
      {/* <Image
        src="/LP-Mobile.jpg"
        alt="Footer Background"
        fill
        className="object-cover -z-10"
      /> */}
      {/* <div className="flex z-50 items-center justify-center py-10">
        <div className="px-5 sm:max-w-4xl flex flex-col text-white items-center text-center text-2xl gap-2">
          <p>Quelque chose se prépare.</p>
          <p>Une expérience inédite.</p>
          <p>
            Là où les lignes du design s&apos;entrelacent avec les battements de
            la musique, où le style devient manifeste, où la gastronomie raconte
            une histoire, et où la mixologie sublime chaque instant.
          </p>
          <p>
            Cette année, Casablanca Beer t&apos;invite à célébrer l&apos;art de
            la réinvention, dans un univers où chaque détail est une promesse,
            chaque gorgée, une déclaration.
          </p>
          <p>⏳ Le compte à rebours est lancé.</p>
        </div>
      </div> */}
      <footer className=" h-32 w-full text-white px-10 border-t-2">
        {/* Background image */}

        {/* Overlay content */}
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
    </div>
  );
};

export default Footer;
