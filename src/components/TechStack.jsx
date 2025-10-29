import { Eye, Sliders, LineChart, Car, Puzzle } from "lucide-react";

export default function TechStack() {
  const stack = [
    { title: "Visión", desc: "Python + OpenCV, ArUco, calibración multicámara", Icon: Eye },
    { title: "Control", desc: "PID, Kalman, filtros de paso bajo", Icon: Sliders },
    { title: "Optimización", desc: "Generación y ajuste de trazada ideal", Icon: LineChart },
    { title: "Plataforma", desc: "OSCAR (hardware a escala) modular y extensible", Icon: Car },
  ];

  return (
    <section className="bg-[#101215] text-[#e7ecef] py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
        <Puzzle className="w-8 h-8 text-[#66d13c]" />
        Stack Técnico
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {stack.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="border border-gray-700 rounded-lg p-6 text-left hover:border-[#66d13c]/60 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-6 h-6 text-[#66d13c]" />
              <h3 className="text-[#66d13c] font-semibold">{title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
