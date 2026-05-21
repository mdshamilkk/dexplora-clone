"use client";

export default function Itinerary() {

  const plans = [
    {
      day: "DAY 01",
      title: "The Journey Begins",
      label: "DEPARTURE",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      text:
        "എറണാകുളം മുതൽ കാസർഗോഡ് വരെയുള്ള വിവിധ സ്റ്റേഷനുകളിൽ നിന്ന് കേരളത്തിന് പുറത്തേക്കുള്ള ട്രെയിൻ യാത്ര ആരംഭിക്കുന്നു.",
    },

    {
      day: "DAY 02",
      title: "Into the Misty Hills",
      label: "ARRIVAL",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      text:
        "Thane-യിൽ നിന്ന് നേരാലിലേക്ക്. അവിടെ നിന്ന് ഹിൽ സ്റ്റേഷനിലേയ്ക്ക് ടാക്സി. ചെക്ക്-ഇൻ കഴിഞ്ഞ് സൈറ്റ്സീയിംഗ് ആരംഭിക്കുന്നു.",
    },

    {
      day: "DAY 03",
      title: "Explore & Toy Train",
      label: "HERITAGE",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop",
      text:
        "രാവിലെ മാർക്കറ്റ് എക്സ്പ്ലോർ ചെയ്യുന്നു. ശേഷം മനോഹരമായ ടോയ് ട്രെയിൻ യാത്ര (As per availability).",
    },

    {
      day: "DAY 04",
      title: "Back to Home",
      label: "Ending",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      text:
        "മനോഹരമായ ഓർമ്മകളുമായി തിരികെ കേരളത്തിലേക്ക്. ട്രിപ്പ് അവസാനിക്കുന്നു.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20 px-5 rounded-t-[55px] md:rounded-t-[90px] overflow-hidden relative z-20 -mt-10">
      {/* HEADER */}
      <div className="text-center px-4">

        <h2 className="text-[48px] sm:text-[65px] md:text-[110px] font-black uppercase text-[#03143b] leading-none tracking-[-2px] md:tracking-[-4px]">

          THE ADVENTURE
          <br />
          PLAN

        </h2>

        <p className="mt-6 text-[#5d6f8c] text-lg md:text-2xl font-medium">

          

        </p>

      </div>

      {/* PLAN LIST */}
      <div className="max-w-5xl mx-auto mt-20 md:mt-28 px-5 md:px-8 space-y-28 md:space-y-36">

        {plans.map((plan, index) => (

          <div
            key={index}
            className="flex flex-col gap-10 md:gap-14"
          >

            {/* IMAGE */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-[40px] md:rounded-[55px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

                <img
                  src={plan.image}
                  className="w-full h-[340px] md:h-[520px] object-cover hover:scale-105 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* LABEL */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-blue-600 text-white px-5 md:px-7 py-2 md:py-3 rounded-full text-[10px] md:text-sm font-black uppercase tracking-[2px] shadow-[0_0_30px_rgba(37,99,235,0.5)]">

                  {plan.label}

                </div>

              </div>

            </div>

            {/* TEXT CONTENT */}
            <div>

              <p className="uppercase tracking-[6px] md:tracking-[8px] text-blue-600 text-xs md:text-sm font-black">

                {plan.day}

              </p>

              <h3 className="text-[42px] md:text-[70px] font-black leading-none text-[#03143b] mt-5">

                {plan.title}

              </h3>

              <p className="mt-8 text-[#5d6f8c] text-[22px] md:text-[34px] leading-[1.7] font-light">

                {plan.text}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}