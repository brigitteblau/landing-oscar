export default function ManiSection() {
  return (
    <section id="mani" className="bg-[#101215] text-[#e7ecef] py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">MANI — Sistema de manejo autónomo</h2>
      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
        El proyecto final no es el auto, sino <strong>MANI</strong>, el sistema
        inteligente que controla a OSCAR. Utiliza múltiples cámaras, marcadores
        ARUCO y visión por computadora para localizar el auto dentro de una
        pista digitalizada en tiempo real.
      </p>
      <ul className="max-w-2xl mx-auto mt-6 text-gray-300 text-left list-disc list-inside">
        <li>Localización multicámara y transformación de perspectivas.</li>
        <li>Optimización de la trazada ideal para seguir el circuito.</li>
        <li>Control con PID, Kalman y filtros de paso bajo.</li>
      </ul>
    </section>
  );
}
