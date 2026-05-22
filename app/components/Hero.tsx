"use client";

import { useEffect, useState } from "react";

export default function Hero() {

  const dates = [
    {
      text: "June 29 - July 02",
      closed: false,
    },
    {
      text: "July 04 - 07 CLOSED",
      closed: true,
    },
    {
      text: "July 11 - 14 CLOSED",
      closed: true,
    },
    {
      text: "July 18 - 21 CLOSED",
      closed: true,
    },
    {
      text: "July 25 - 28",
      closed: false,
    },
    {
      text: "August 01 - 04",
      closed: false,
    },
    {
      text: "August 08 - 11",
      closed: false,
    },
    {
      text: "August 15 - 18",
      closed: false,
    },
    {
      text: "August 22 - 25",
      closed: false,
    },
    {
      text: "August 29 - September 01",
      closed: false,
    },
  ];
const [selectedDate, setSelectedDate] = useState(dates[0].text);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {

  const handleScroll = () => {

    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);

  const whatsappLink = `https://wa.me/917034267985?text=${encodeURIComponent(
    `Hi Dexplora, I am interested to book ${selectedDate}`
  )}`;

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover animate-[slowZoom_20s_linear_infinite]"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#031020]/70" />

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes flicker {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }

        .flicker {
          animation: flicker 2.5s infinite;
        }
      `}</style>

      {/* NAVBAR */}
<div
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3"
      : "bg-transparent py-6"
  }`}
>

  <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">

          <img
            src="/images/logo.png"
            alt="Dexplora Logo"
            className="w-[120px] md:w-[140px] object-contain"
          />

        </div>

        {/* BOOK NOW */}
        <a
          href={whatsappLink}
          target="_blank"
          className="border-2 border-green-400 text-white px-5 md:px-10 py-2 md:py-4 rounded-full font-black uppercase tracking-[1px] md:tracking-[2px] text-[10px] md:text-sm hover:bg-green-400 hover:text-black transition duration-300 shadow-[0_0_30px_rgba(0,255,120,0.3)]"
        >

          Book Now

        </a>

      </div>
</div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-36 md:pt-44 pb-16">

        {/* TOP BADGE */}
        <div className="border border-blue-400/30 bg-blue-500/10 backdrop-blur-xl rounded-full px-6 md:px-12 py-3">

          <p className="uppercase tracking-[4px] md:tracking-[8px] text-blue-400 text-[10px] md:text-sm font-black">

            Kerala To Kerala • Monsoon Special

          </p>

        </div>

        {/* TITLE */}
        <div className="mt-10 md:mt-12 leading-none">

          <h1 className="text-[58px] sm:text-[80px] md:text-[190px] font-black tracking-[-2px] md:tracking-[-8px] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">

            MATHERAN

          </h1>

          <h2 className="text-[52px] sm:text-[70px] md:text-[160px] italic font-black text-blue-500 -mt-2 md:-mt-10 drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]">

            ESCAPE

          </h2>

        </div>

        {/* DATES */}
        <div className="max-w-5xl flex flex-wrap justify-center gap-3 md:gap-5 mt-10 md:mt-14">

          {dates.map((date, index) => (

            <button
              key={index}
              onClick={() => !date.closed && setSelectedDate(date.text)}
              className={`px-5 md:px-8 py-3 md:py-4 rounded-full text-[11px] md:text-base font-black transition duration-300 hover:scale-105 ${
                date.closed
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-[0_0_30px_rgba(255,0,0,0.5)]"
                  : selectedDate === date.text
                  ? "bg-white text-black shadow-[0_0_35px_rgba(255,255,255,0.5)]"
                  : "bg-white/10 border border-white/10 backdrop-blur-xl text-white hover:bg-white/20"
              }`}
            >

              {date.text}

            </button>

          ))}

        </div>

        {/* PRICING */}
        <div className="mt-14 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">

          {/* STANDARD */}
          <div>

            <p className="uppercase tracking-[3px] text-gray-300 text-xs md:text-base">

              Standard (Per Head)

            </p>

            <div className="flex items-center justify-center gap-3 mt-4">

              <span className="line-through text-2xl md:text-4xl text-gray-400 font-black">
                ₹4599
              </span>

              <div className="bg-red-500 px-3 py-1 rounded-full text-[10px] md:text-sm font-black flicker shadow-[0_0_25px_rgba(255,0,0,0.5)]">

                ₹300 OFF

              </div>

            </div>

            <h3 className="text-[65px] md:text-[110px] font-black leading-none mt-2 text-white">

              ₹4299

            </h3>

          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-px h-44 bg-white/20" />

          {/* COUPLE */}
          <div>

            <p className="uppercase tracking-[3px] text-gray-300 text-xs md:text-base">

              Couple (Per Head)

            </p>

            <h3 className="text-[65px] md:text-[110px] font-black leading-none mt-6 text-blue-500">

              ₹5299

            </h3>

          </div>

        </div>

        {/* SELECTED DATE */}
        <div className="mt-10 md:mt-14">

          <p className="uppercase tracking-[4px] md:tracking-[6px] text-blue-400 text-sm md:text-2xl font-black">

            Selected Date: {selectedDate}

          </p>

        </div>

      </div>

    </section>
  );
}