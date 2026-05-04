// About.jsx
export default function About() {
  return (
    <section className="px-[10%] my-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-1.5 h-8 bg-primary rounded-full" />
        <h2 className="text-h1 font-bold text-text">Sobre mí</h2>
      </div>

      <div className="relative rounded-2xl bg-secondary border border-primary/20 p-8 overflow-hidden">
        {/* acento esquina */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />

        <p className="leading-relaxed text-lg text-text/70 max-w-2xl">
          Soy Gael, tengo 23 años y soy desarrollador fullstack. Me caracterizo por mi versatilidad, compromiso con el aprendizaje continuo y una fuerte orientación 
          al crecimiento profesional. Busco desarrollar soluciones de calidad, fortalecer mis habilidades técnicas y humanas, y consolidarme como un profesional sólido 
          dentro de la industria, aportando valor en cada proyecto y construyendo relaciones profesionales significativas.
        </p>

    
      </div>
    </section>
  )
}