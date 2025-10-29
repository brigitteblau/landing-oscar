export default function CTA() {
  return (
    <section className="bg-[#101215] text-[#e7ecef] py-16 px-6 text-center">
      <h3 className="text-2xl font-bold mb-4">Ver más...</h3>
      <p className="text-gray-300 mb-6">Accedé al código fuente y al modelo 3D de OSCAR.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/ManuelRao/OSCAR"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#66d13c] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#8ef043] transition"
        >
          GitHub — OSCAR
        </a>
        <a
          href="https://cad.onshape.com/signin"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition"
        >
          Modelo 3D — Onshape
        </a>
      </div>
      <p className="text-gray-500 text-sm mt-6">Hecho por: Manuel Rao :)</p>
    </section>
  );
}
