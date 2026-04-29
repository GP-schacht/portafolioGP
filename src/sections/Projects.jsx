import { useEffect, useState } from 'react'

const GITHUB_USER = 'GP-schacht' // <-- cambia esto

const QUERY = `
{
  user(login: "${GITHUB_USER}") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          forkCount
          openGraphImageUrl
          usesCustomOpenGraphImage
          primaryLanguage {
            name
            color
          }
          repositoryTopics(first: 4) {
            nodes {
              topic { name }
            }
          }
        }
      }
    }
  }
}
`

export default function Proyectos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query: QUERY }),
    })
      .then(res => res.json())
      .then(data => {
        setRepos(data.data.user.pinnedItems.nodes)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center py-20 text-gray-400">Cargando proyectos...</p>
  if (error)   return <p className="text-center py-20 text-red-400">Error: {error}</p>

  return (
    <section className="px-[10%] my-20">
      <h2 className="text-h2 font-bold mb-10">Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(repo => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-violet-400/40 hover:bg-white/10 transition-all duration-300"
          >
            {/* Imagen del repo */}
            <div className="aspect-video overflow-hidden bg-gray-900">
              <img
                src={repo.openGraphImageUrl}
                alt={repo.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Contenido */}
            <div className="flex flex-col gap-3 p-5 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg text-white leading-tight">{repo.name}</h3>
                {repo.primaryLanguage && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full shrink-0 font-medium"
                    style={{
                      background: repo.primaryLanguage.color + '25',
                      color: repo.primaryLanguage.color,
                      border: `1px solid ${repo.primaryLanguage.color}40`
                    }}
                  >
                    {repo.primaryLanguage.name}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-400 leading-relaxed flex-1">
                {repo.description || 'Sin descripción'}
              </p>

              {/* Topics */}
              {repo.repositoryTopics.nodes.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {repo.repositoryTopics.nodes.map(({ topic }) => (
                    <span key={topic.name} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                      {topic.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Stats */}
              <div className="flex gap-4 text-xs text-gray-500 pt-2 border-t border-white/5">
                <span>⭐ {repo.stargazerCount}</span>
                <span>🍴 {repo.forkCount}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}