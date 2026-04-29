// SoftSkills.jsx
const skills = [
  { label: 'Trabajo en Equipo', icon: '🤝' },
  { label: 'Creatividad',       icon: '💡' },
  { label: 'Compromiso',        icon: '🎯' },
  { label: 'Proactividad',      icon: '⚡' },
]

export default function SoftSkills() {
  return (
    <section className="px-[10%] my-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-1.5 h-8 bg-primary rounded-full" />
        <h2 className="text-h1 font-bold text-text">Soft Skills</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map(({ label, icon }) => (
          <div
            key={label}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary border border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-200"
          >
            <span className="text-3xl">{icon}</span>
            <span className="text-sm font-medium text-text/70 group-hover:text-primary transition-colors text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}