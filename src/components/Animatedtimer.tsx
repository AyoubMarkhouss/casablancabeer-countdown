import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
export default function AnimatedTimer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const interval = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    const countdownDate = new Date("June 21, 2025 00:18:00").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        if (interval.current) clearInterval(interval.current);
      } else {
        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMinutes(String(minutes).padStart(2, "0"));
        setTimerSeconds(String(seconds).padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="h-screen relative">
      <Image
        alt="casa"
        src="/LP-Desktop.jpg"
        width={2000}
        height={2000}
        className="absolute object-cover hidden md:block z-0"
      />
      <Image
        alt="casa"
        src="/LP-Mobile.jpg"
        width={2000}
        height={2000}
        className="absolute block md:hidden z-0"
      />
      <div className="z-50 flex flex-col justify-center items-center">
        <Image
          alt="ee"
          src="/casawhite.png"
          width={2000}
          height={2000}
          className="w-56 z-50"
        />
        <div className="flex flex-col max-w-[90%] md:w-full justify-center items-center xl:pt-10 2xl:pt-32 pb-12">
          <h1 className="font-bold z-50 pb-4 text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            READY TO REINVENT YOUR SPIRIT ?
          </h1>
        </div>
        <div className="w-full max-w-5xl text-white z-50 mx-auto flex items-center ">
          <CountdownItem num={timerDays} text="Jours" />
          <CountdownItem num={timerHours} text="Heurs" />
          <CountdownItem num={timerMinutes} text="Minutes" />
          <CountdownItem num={timerSeconds} text="Secondes" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-32 xl:pt-10 2xl:pt-32">
        <div className="hidden  pt-0 lg:pt-14 2xl:pt-32  z-10 md:flex justify-center items-center text-sm text-white">
          CASABLANCA BEER © TOUS DROITS RÉSERVÉS
        </div>
        <div></div>

        <div className=" pt-0 lg:pt-14 2xl:pt-32 z-10 flex gap-x-2 justify-center items-center  text-white">
          SUIVEZ-NOUS SUR
          <div className="flex items-center gap-x-2">
            <Link
              href="https://www.instagram.com/casablanca.beer/"
              className="border-2 rounded-full p-1.5  group hover:bg-white"
            >
              <FaInstagram
                size={17}
                className="fill-white group-hover:fill-black  transition-all duration-300 transform"
              />
            </Link>

            <Link
              href="https://web.facebook.com/CasablancaBeerOfficielle?locale=fr_FR"
              className="border-2 rounded-full p-1.5 group hover:bg-white"
            >
              <FaFacebook
                size={17}
                className="fill-white group-hover:fill-black  transition-all duration-300 transform"
              />
            </Link>
          </div>
        </div>
        <div className="font-semibold md:hidden z-10 flex justify-center items-center text-sm text-white">
          CASABLANCA BEER © TOUS DROITS RÉSERVÉS
        </div>
      </div>
    </div>
  );
}

const CountdownItem = ({ num, text }: { num: string; text: string }) => {
  return (
    <div className="font-mono w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-1 items-center justify-center ">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-2xl md:text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-light text-gray-300">
        {text}
      </span>
    </div>
  );
};
