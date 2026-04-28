import linkedin from '../assets/logos/linkedin.svg'
import instagram from '../assets/logos/instagram.svg'
import github from '../assets/logos/github-dark.svg'
import csharp from '../assets/logos/c-sharp.svg'
import python from '../assets/logos/python.svg'
import java from '../assets/logos/java.svg'
import html from '../assets/logos/html5.svg'
import css from '../assets/logos/css.svg'
import reactQuery from '../assets/logos/react-query.svg'
import figma from '../assets/logos/figma.svg'
import postgresql from '../assets/logos/postgresql.svg'
import mssql from '../assets/logos/microsoft-sql-server.svg'
import reactjs from '../assets/logos/reactjs.svg'
import git from '../assets/logos/git.svg'
import mhApi from '../assets/proyectos/Proyecto MH API.png'

const tools = [
  [csharp, python, java],
  [html, css, reactQuery, figma],
  [postgresql, mssql, reactjs, git]
]

const projects = [
  { title: 'Monster Hunter API (Frontend)', url: 'https://proyecto-front-end-mhw.vercel.app/', img: mhApi },
  { title: 'coming soon', url: '#', img: null },
  { title: 'coming soon', url: '#', img: null },
  { title: 'coming soon', url: '#', img: null },
]

export default function About() {
  return (
    <section className="px-[10%] my-20">
      <h2 className="text-5xl mb-8">sobre mi</h2>
      
      <div className="flex flex-col gap-12">
        <div>
          <p className="leading-relaxed text-lg">
            Soy Gael tengo 22 y soy un desarrollador versatil con muchas
            ganas de aprender y mejorar en este campo que me apasiona, deseo
            convertirme en un buen desarrollador y hacer buenos amigos en el camino.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/gael-pereira-561a95222/" target="_blank" className="flex flex-col items-center p-3 bg-secondary rounded-xl hover:bg-primary transition-colors">
            <img src={linkedin} alt="linkedin" className="w-10 h-10" />
            <h4 className="text-sm">linkedin</h4>
          </a>
          <a className="flex flex-col items-center p-3 bg-secondary rounded-xl hover:bg-primary transition-colors">
            <img src={instagram} alt="instagram" className="w-10 h-10" />
            <h4 className="text-sm">instagram</h4>
          </a>
          <a href="https://github.com/GP-schacht" target="_blank" className="flex flex-col items-center p-3 bg-secondary rounded-xl hover:bg-primary transition-colors">
            <img src={github} alt="github" className="w-10 h-10" />
            <h4 className="text-sm">Github</h4>
          </a>
        </div>

        <div>
          <h3 className="text-3xl mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-secondary rounded-lg">Trabajo en Equipo</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Creatividad</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Compromiso</span>
            <span className="px-4 py-2 bg-secondary rounded-lg">Proactividad</span>
          </div>
        </div>

        <div>
          <h3 className="text-3xl mb-4">Hard Skills</h3>
          <div className="bg-secondary p-4 flex flex-col gap-4 overflow-hidden">
            {tools.map((row, i) => (
              <div key={i} className="flex gap-[33%] relative h-20 animate-carousel">
                {row.map((tool, j) => (
                  <img key={j} src={tool} alt="" className="w-20 h-20 rounded-lg" />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl mb-4">Proyectos</h3>
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
        </div>
      </div>
    </section>
  )
}