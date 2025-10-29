import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {



  return (
    <section  className="bg-[#0b0d0f] text-[#e7ecef] py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">¿Qué es OSCAR?</h2>
      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
        OSCAR es un auto open source pensado como plataforma de desarrollo para
        sistemas de manejo autónomo. Fue diseñado para emular, a escala, los
        efectos y dinámicas de autos de carrera reales, manteniendo principios
        de diseño profesional.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="border border-gray-700 rounded-lg p-4">
          <h3 className="text-[#66d13c] font-semibold">Enfoque educativo</h3>
          <p className="text-gray-300">Ideal para experimentar con visión por computadora y control.</p>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <h3 className="text-[#66d13c] font-semibold">Dinámica realista</h3>
          <p className="text-gray-300">Imita condiciones de pista reales para optimizar algoritmos.</p>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <h3 className="text-[#66d13c] font-semibold"> Modular</h3>
          <p className="text-gray-300">Separá hardware <b>(OSCAR)</b> de software <b>(MANI) </b> para investigar libremente.</p>
        </div>
      </div>
    </section>
  );
}
