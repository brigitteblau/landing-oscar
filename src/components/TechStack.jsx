export default function TechStack() {
  const stack = [
    { title: "🧠 Visión", desc: "Python + OpenCV, ArUco, calibración multicámara" },
    { title: "⚙️ Control", desc: "PID, Kalman, filtros de paso bajo" },
    { title: "🛣️ Optimización", desc: "Generación y ajuste de trazada ideal" },
    { title: "🚗 Plataforma", desc: "OSCAR (hardware a escala) modular y extensible" },
  ];

  return (
    <section className="bg-[#101215] text-[#e7ecef] py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">🧩 Stack Técnico</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {stack.map((item) => (
          <div key={item.title} className="border border-gray-700 rounded-lg p-6 text-left">
            <h3 className="text-[#66d13c] font-semibold">{item.title}</h3>
            <p className="text-gray-300 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
