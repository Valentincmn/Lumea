import React from "react";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="h-dvh w-screen overflow-hidden">
        <div className="h-full w-full flex items-center justify-center">Un lieu unique, comme vous.</div>
      </section>
      <div>
        <hr className="h-screen w-px opacity-10 bg-primary fixed right-[70px] top-0" />
        <hr className="h-screen w-px opacity-10 bg-primary fixed right-[356px] top-0" />
        <hr className="h-screen w-px opacity-10 bg-primary fixed right-[707px] top-0" />
      </div>
    </div>
  );
}
