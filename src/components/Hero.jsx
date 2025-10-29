import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {


 

  return (
    <section
      className="text-center bg-[#0b0d0f] text-[#e7ecef] py-20 px-6"
    >
      <img
        src="/logo.png"
        alt="Logo de OSCAR"
        className="w-40 mx-auto mb-6"
      />
      <h1 className="text-5xl font-bold">OSCAR</h1>
      <p className="text-[#66d13c] text-xl mt-2">
        Open Source Car for Autonomous Research
      </p>
      <p className="max-w-xl mx-auto mt-6 text-gray-300 leading-relaxed">
       Auto open source está pensado como una plataforma de desarrollo para sistemas de manejo autónomo, es un producto con un enfoque en aquellos individuos o equipos que desean desarrollar software para el campo de manejo autónomo/automatización pero no quieren tener que lidiar con tener que desarrollar un hardware específicamente para su aplicación.
      </p>
      <a
        href="#mani"
        className="inline-block mt-8 bg-[#66d13c] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#8ef043] transition"
      >
        Ver proyecto MANI
      </a>
    </section>
  );
}
