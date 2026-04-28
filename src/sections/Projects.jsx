import mhApi from '../assets/proyectos/Proyecto MH API.png'

export default function Projects() {
  const projects = [
    { title: 'Monster Hunter API (Frontend)', url: 'https://proyecto-front-end-mhw.vercel.app/', img: mhApi },
    { title: 'coming soon', url: '#', img: null },
    { title: 'coming soon', url: '#', img: null },
    { title: 'coming soon', url: '#', img: null },
  ]

  return (
    <section className="px-[10%] lg:px-[10%] my-20">
      <h2 className="text-5xl mb-8">Proyectos</h2>
      <div className="flex flex-wrap gap-8 justify-between">
        {projects.map((project, i) => (
          <a 
            key={i}
            href={project.url}
            target="_blank"
            className="lg:w-[30%] w-full text-text no-underline"
          >
            <div className="w-full aspect-video relative">
              {project.img && (
                <img src={project.img} alt="" className="w-full h-full rounded-lg object-cover" />
              )}
            </div>
            <h2 className="text-2xl mt-4">{project.title}</h2>
          </a>
        ))}
      </div>
    </section>
  )
}