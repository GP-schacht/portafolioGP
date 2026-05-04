export default function Experience() {
  const experiences = [
    {
      role: "Soporte WMS",
      company: "J. Cain Logistics",
      period: "sept. 2025 – mar. 2026 · 7 meses",
      location: "Colón, Panamá · Híbrido",
      type: "Jornada completa",
      description:
        "Soporte técnico al sistema de gestión de almacenes (WMS) en entorno logístico empresarial real.",
      tasks: [
        "Atención y resolución de tickets técnicos relacionados al WMS.",
        "Identificación y documentación de errores recurrentes para mejoras al sistema.",
        "Colaboración activa con el equipo de desarrollo en proyectos de mejora.",
        "Puente entre usuarios operativos y el área de tecnología.",
      ],
      stack: ["WMS", "Soporte técnico", "Análisis de errores", "Trabajo en equipo"],
    },
    {
      role: "Pasante WordPress",
      company: "POPCORN LABS INC",
      period: "ago. 2025 – oct. 2025 · 3 meses",
      location: "Panamá · Presencial",
      type: "Jornada parcial",
      description:
        "Participación en proyectos internos con desarrollo de sitios web para clientes externos y creación de componentes y plugins personalizados.",
      tasks: [
        "Diseño e implementación de mejoras visuales y funcionales en el landing page corporativo.",
        "Desarrollo de sitios web para clientes bajo estándares de calidad y buenas prácticas.",
        "Creación de plugins y componentes custom adaptados a necesidades específicas.",
        "Traducción de requerimientos de negocio en soluciones técnicas dentro de WordPress.",
      ],
      stack: ["WordPress", "PHP", "Plugins custom", "HTML/CSS"],
    },
    {
      role: "Ayudante General",
      company: "Cinépolis",
      period: "may. 2023 – mar. 2025 · 1 año 11 meses",
      location: "Panamá, El Dorado · Presencial",
      type: "Jornada completa",
      description:
        "Experiencia en entorno de alta demanda y atención al cliente en cadena de cines internacional.",
      tasks: [
        "Cajero principal y responsable de operaciones en punto de venta con precisión en transacciones.",
        "Gestión de inventario y control de ventas en temporadas de alta afluencia.",
        "Atención al cliente de alto volumen, resolviendo incidencias y manteniendo satisfacción.",
        "Coordinación en equipo bajo presión en periodos críticos para alcanzar objetivos de eficiencia.",
      ],
      stack: ["Atención al cliente", "Punto de venta", "Gestión de inventario", "Trabajo en equipo"],
    },
  ];

  return (
    <section className="px-[10%] my-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-1.5 h-8 bg-primary rounded-full" />
        <h2 className="text-h1 font-bold text-text">Experiencia</h2>
      </div>

      <div className="relative flex flex-col">
        {/* Línea vertical */}
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-primary/20" />

        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6 mb-6">
            {/* Dot */}
            <div className="flex flex-col items-center flex-shrink-0 mt-2.5 z-10">
              <div className="w-6 h-6 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
            </div>

            {/* Card */}
            <div className="relative flex-1 rounded-2xl bg-secondary border border-primary/20 p-6 overflow-hidden">
              {/* Acento esquina */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />

              <h3 className="text-lg font-bold text-text mb-1">{exp.role}</h3>
              <p className="text-primary font-semibold text-sm mb-3">{exp.company}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[exp.period, exp.location, exp.type].map((meta) => (
                  <span
                    key={meta}
                    className="text-xs text-text/60 bg-secondary border border-primary/10 rounded-lg px-3 py-1"
                  >
                    {meta}
                  </span>
                ))}
              </div>

              <p className="text-sm text-text/70 leading-relaxed mb-3">{exp.description}</p>

              <ul className="flex flex-col gap-1.5 mb-4">
                {exp.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2 text-sm text-text/70 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold bg-primary/10 text-primary rounded-lg px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}