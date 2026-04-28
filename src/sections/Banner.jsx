import perfilImg from '../assets/foto1.jpg'

export default function Banner() {
  return (
    <section className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#1a1a1a] flex items-end">
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, white 39px, white 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, white 39px, white 40px)`
        }}
      />

      {/* Línea de acento lateral */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-400 via-indigo-400 to-transparent opacity-80" />

      {/* Foto — lado derecho */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden">
        <img
          src={perfilImg}
          alt="Gael Pereira"
          className="w-full h-full object-cover object-top"
        />
        {/* Máscara de fusión */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col gap-6 p-10 w-[65%]">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 text-[11px] tracking-[3px] uppercase text-violet-400/80 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400/80" />
          Portafolio
        </div>

        {/* Nombre */}
        <h1 className="font-serif text-[52px] font-bold leading-none tracking-tight text-white/95 m-0"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Gael
          <span className="block text-[40px] font-normal italic text-violet-300/85">
            Pereira
          </span>
        </h1>

        {/* Stats */}
        <div className="flex gap-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-[32px] font-bold text-white leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}>22</span>
            <span className="text-[11px] tracking-[2px] uppercase text-white/40">Años</span>
          </div>
          <div className="w-px bg-white/10" />
          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-[32px] font-bold text-white leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}>3</span>
            <span className="text-[11px] tracking-[2px] uppercase text-white/40">Proyectos</span>
          </div>
        </div>
      </div>
    </section>
  )
}