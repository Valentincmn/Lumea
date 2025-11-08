import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="h-dvh w-screen overflow-hidden">
        <div className="h-full w-full flex flex-col items-center justify-center gap-[62px]">
          <div className="text-center text-[128px] font-eb-garamond max-w-[1000px] leading-[0.75]">
            Un lieu <span className="text-primary italic">unique</span>, comme vous.
          </div>
          <div className="text-center text-[14px] font-eb-garamond max-w-[500px]">
            Chaque espace que nous concevons raconte une histoire : <span className="font-bold">la vôtre.</span> <br />{" "}
            Notre démarche allie intuition et expertise pour imaginer des intérieurs qui reflètent votre personnalité,
            votre rythme et les émotions que vous souhaitez ressentir au quotidien. <br /> Au-delà des tendances, nous
            créons des lieux vivants, chaleureux et profondément personnels.
          </div>
        </div>
      </section>
      <div>
        <hr className="h-screen w-px opacity-10 bg-primary fixed right-[70px] top-0" />
        <hr className="h-screen w-px opacity-10 bg-primary fixed right-[356px] top-0" />
        <hr className="h-screen w-px opacity-10 bg-primary fixed right-[707px] top-0" />
      </div>
    </div>
  );
}
