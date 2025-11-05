export default function Hero() {
  return (
    <div>
      <section className="h-dvh w-screen overflow-hidden pb-[20px]">
        <div className="h-full w-full flex flex-col md:flex-row items-end justify-between">
          <div className="flex flex-col gap-1 items-center">
            <span className="font-eb-garamond text-6xl sm:text-8xl md:text-[180px] lg:text-[256px] leading-[0.8]">
              Luméa
            </span>
            <span className="font-eb-garamond text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-primary italic leading-[0.8]">
              Design
            </span>
            <span className="font-eb-garamond text-6xl sm:text-8xl md:text-[180px] lg:text-[256px] leading-[0.8]">
              Studio
            </span>
          </div>

          <div className="relative md:w-[572px] md:h-[446px] w-full mt-6 md:mt-0 px-7">
            <img
              src="src/assets/salon.png"
              alt="Salon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
