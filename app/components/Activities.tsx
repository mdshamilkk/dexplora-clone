"use client";

export default function Activities() {

  const activities = [
    {
      emoji: "🌧️",
      title: "Rain Dance",
    },
    {
      emoji: "🎵",
      title: "DJ & Disco",
    },
    {
      emoji: "🎸",
      title: "Musical Night",
    },
    {
      emoji: "🎲",
      title: "Group Games",
    },
    {
      emoji: "🏊",
      title: "Premium Pool",
    },
    {
      emoji: "❄️",
      title: "A/C Rooms",
    },
  ];

  const extras = [
    "Ladder Walk 🪜",
    "River Crossing 🌊",
    "Multi-Strand Activities 🧗",
    "Net Crossing 🕸️",
    "Air Cycling 🚴",
    "Zip Line ⚡",
    "Archery 🎯",
  ];

  return (
    <section
  id="activities"
  className="relative py-24 bg-[#020617]"
>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* TOP TITLE */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] md:tracking-[8px] text-blue-400 text-xs md:text-sm font-black">

            Stay In 3-Star Resort

          </p>

          <h2 className="text-[44px] sm:text-[60px] md:text-[110px] font-black italic leading-none text-white mt-5">

            RESORT FUN &
            <br />
            ADVENTURE

          </h2>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-16 md:mt-24">

          {activities.map((item, index) => (

            <div
              key={index}
              className="group bg-white/[0.03] border border-white/10 rounded-[28px] md:rounded-[38px] h-[170px] md:h-[240px] flex flex-col items-center justify-center backdrop-blur-xl hover:bg-white/[0.06] transition duration-500 hover:-translate-y-2"
            >

              <div className="text-4xl md:text-6xl group-hover:scale-110 transition duration-300">

                {item.emoji}

              </div>

              <h3 className="mt-6 text-white text-sm md:text-xl font-black uppercase tracking-[2px] text-center">

                {item.title}

              </h3>

            </div>

          ))}

        </div>

        {/* EXTRA ACTIVITIES */}
        <div className="mt-16 md:mt-24 relative overflow-hidden rounded-[40px] md:rounded-[60px] p-8 md:p-16 border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] backdrop-blur-3xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]">

          {/* AMBIENT GLOW */}
         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#2563eb,transparent_35%),radial-gradient(circle_at_bottom_left,#06b6d4,transparent_35%)]"></div>

          <div className="relative z-10">

            {/* TITLE */}
            <h3 className="text-[42px] md:text-[80px] font-black italic leading-none text-white">

              🎉 EXTRA
              <br />
              ADVENTURE
              <br />
              ACTIVITIES

            </h3>

            {/* TAGS */}
            <div className="flex flex-wrap gap-4 md:gap-6 mt-10 md:mt-14">

              {extras.map((item, index) => (

                <div
                  key={index}
                  className="bg-white/[0.08] border border-white/10 backdrop-blur-2xl hover:bg-white/[0.14] hover:scale-105 transition-all duration-300 px-6 md:px-8 py-4 md:py-5 rounded-full text-white text-sm md:text-xl font-bold shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}