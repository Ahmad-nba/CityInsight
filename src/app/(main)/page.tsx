import hero from "../assets/vansHero.png";
import SearchBar from "../homeComponents/searchbar";



export default function Home() {
  return (
    <div className="relative">
      {/* Hero section with full height background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>

      {/* Dark overlay that covers entire component */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content container */}
      <section className="relative flex flex-col space-y-8 items-center justify-center w-full min-h-[90dvh] z-20">
        <div className="max-w-4xl px-4 text-center md:text-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Explore City Vibes at a Glance.
            </h1>

            <div className="space-y-2 md:space-y-3">
              <h2 className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
                Real-time weather, time zone, and news updates.
              </h2>
              <h2 className="text-lg md:text-xl font-normal text-white/80 italic">
                From skies to stories — all in seconds.
              </h2>
            </div>
          </div>
        </div>

        {/* Search bar - now properly positioned within overlay */}
        <div className="w-full max-w-2xl px-4">
          <SearchBar />
        </div>
      </section>
    </div>
  );
}
