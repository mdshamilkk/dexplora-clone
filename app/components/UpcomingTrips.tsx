"use client";

export default function UpcomingTrips() {

  const trips = [
    {
      title: "Sikkim",
      image:
        "/images/sikkim.avif",
    },
    {
      title: "Kashmir",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Manali",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Rajasthan",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#020817]/90 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="text-center px-4">

          <p className="uppercase tracking-[4px] md:tracking-[8px] text-blue-400 text-xs md:text-sm font-bold">

            Luxury Destinations

          </p>

          <h2 className="text-[40px] sm:text-[55px] md:text-[110px] font-black leading-none mt-4 text-white">

            UPCOMING TRIPS

          </h2>

          <p className="text-gray-400 text-sm md:text-lg mt-6 max-w-2xl mx-auto">

            Explore premium cinematic travel experiences with unforgettable moments.

          </p>

        </div>

        {/* CAROUSEL */}
        <div className="mt-14 md:mt-20 overflow-x-auto scrollbar-hide snap-x snap-mandatory">

          <div className="flex gap-6 md:gap-10 px-4 md:px-10 w-max">

            {trips.map((trip, index) => (

              <div
                key={index}
                className="relative w-[280px] sm:w-[340px] md:w-[420px] h-[420px] md:h-[600px] rounded-[30px] md:rounded-[45px] overflow-hidden group snap-center shrink-0"
              >

                {/* IMAGE */}
                <img
                  src={trip.image}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/10" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 md:p-10 w-full">

                  

                  <h3 className="text-4xl md:text-6xl font-black mt-3 text-white">

                    {trip.title}

                  </h3>

                  <div className="mt-6 md:mt-8 inline-block bg-blue-600 text-white px-5 md:px-7 py-2 md:py-3 rounded-full text-[10px] md:text-sm font-black tracking-[2px] uppercase shadow-[0_0_25px_rgba(59,130,246,0.6)]">

  Coming Soon

</div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}