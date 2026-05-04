// Contacto.jsx

const base = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gael-pereira-561a95222',
    icon: `${base}/linkedin.svg?color=white`
  },
  {
    label: 'GitHub',
    href: 'https://github.com/GP-schacht',
    icon: `${base}/github.svg?color=white`
  },
];


export default function Contacto() {
  return (
    <section className="px-[10%] my-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-1.5 h-8 bg-primary rounded-full" />
        <h2 className="text-h1 font-bold text-text">Contacto</h2>
      </div>

      <div className="rounded-2xl bg-secondary border border-primary/20 p-8 flex flex-col sm:flex-row items-center gap-8">
        {/* Texto */}
        <div className="flex-1">
        
          <a
            href="mailto:gaelpereira3@gmail.com"
            className="inline-block mt-4 px-6 py-2.5 bg-primary text-secondary text-sm font-bold rounded-lg hover:bg-primary/80 transition-colors"
          >
            gaelpereira3@gmail.com ↗
          </a>
        </div>

        {/* Redes */}
        <div className="flex gap-3">
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center w-[6rem] gap-1.5 p-4 rounded-xl bg-background/20 border border-white/15 hover:border-primary hover:bg-primary/5 transition-all duration-200"
            >
              <img src={icon} alt={label} className="w-8 h-8 fill-current text-white" />
              <span className="text-xs text-text/40 group-hover:text-primary transition-colors">{label}</span>
            </a>
          ))}
        </div>
         </div>
      
    </section>
  )
}