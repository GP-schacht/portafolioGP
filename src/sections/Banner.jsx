import { useEffect, useRef } from 'react'

export default function Banner() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const section = canvas.parentElement
    const onMove = e => {
      const r = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }
    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)

    // ── Nodos conectados ───────────────────────────────────────────
    const NODES = 18
    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.5 + 1,
    }))



    let raf

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      const mouse = mouseRef.current
      ctx.clearRect(0, 0, W, H)

      // — Mover nodos —
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })

      // — Líneas entre nodos normales —
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(255,165,0,${(1 - dist / 150) * 0.15})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // — Líneas desde el mouse hacia nodos cercanos —
      if (mouse.x > 0) {
        nodes.forEach((n) => {
          const dx = mouse.x - n.x
          const dy = mouse.y - n.y
          const dist = Math.hypot(dx, dy)
          if (dist < 200) {
            ctx.beginPath()
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(n.x, n.y)
            ctx.strokeStyle = `rgba(255,165,0,${(1 - dist / 200) * 0.5})`
            ctx.lineWidth = 1.2
            ctx.stroke()
          }
        })
      }

      // — Dibujar nodos —
      nodes.forEach((n) => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,165,0,0.3)'
        ctx.fill()
      })

      // — Dibujar nodo del mouse —
      if (mouse.x > 0) {
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,165,0,0.7)'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(255,165,0,0.25)'
        ctx.lineWidth = 1
        ctx.stroke()
      }



      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="relative min-h-[500px] overflow-hidden rounded-2xl bg-secondary flex items-end">

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        zIndex: 1,
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, #ffa500 39px, #ffa500 40px),
          repeating-linear-gradient(90deg, transparent, transparent 39px, #ffa500 39px, #ffa500 40px)`
      }} />

      {/* Línea lateral */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/40 to-transparent" style={{ zIndex: 2 }} />

      {/* Contenido */}
      <div className="relative flex flex-col gap-6 p-10 w-[65%]" style={{ zIndex: 3 }}>

        <div className="flex items-center gap-2.5 text-xs tracking-[3px] uppercase text-primary/80 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Portafolio
        </div>

        <h1 className="font-serif text-display font-bold leading-none tracking-tight text-text m-0"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Gael Pereira
          <span className="block text-h1 font-normal italic text-primary/90">Full Stack Developer</span>
        </h1>

        <div className="flex gap-8 border-t border-primary/20 pt-5">
          {[{ n: '23', label: 'Años' }, { n: '6', label: 'Proyectos' }].map(({ n, label }, i) => (
            <div key={label} className="flex items-center gap-8">
              {i > 0 && <div className="w-px h-10 bg-primary/20" />}
              <div className="flex flex-col gap-0.5">
                <span className="font-serif text-h1 font-bold text-primary leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}>{n}</span>
                <span className="text-xs tracking-[2px] uppercase text-text/40">{label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}