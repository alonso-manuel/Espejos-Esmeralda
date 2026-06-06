import { useEffect } from 'react'

const PALETTES = [
  ['#1a4a30', '#2a7a4f', '#3aaa6f', '#c8ecd8'],
  ['#0d2b1c', '#1f5c3a', '#4caf80', '#a0d8b8'],
  ['#112d20', '#246644', '#56c28a', '#d4f0e2'],
  ['#0a1f14', '#1a4a2e', '#2e8f5c', '#8ecfab'],
  ['#ffffff22', '#ffffff44', '#ffffffaa', '#ffffffee'],
]

function makeTile(w, h) {
  return {
    x:    Math.random() * w,
    y:    Math.random() * h,
    size: 40 + Math.random() * 120,
    pal:  PALETTES[Math.floor(Math.random() * PALETTES.length)],
    rotX: Math.random() * Math.PI * 2,
    rotY: Math.random() * Math.PI * 2,
    rotZ: Math.random() * Math.PI * 2,
    dRotX: (Math.random() - 0.5) * 0.006,
    dRotY: (Math.random() - 0.5) * 0.008,
    dRotZ: (Math.random() - 0.5) * 0.004,
    vx:   (Math.random() - 0.5) * 0.15,
    vy:   (Math.random() - 0.5) * 0.12,
    depth: 0.4 + Math.random() * 0.6,
    alpha: 0.15 + (0.4 + Math.random() * 0.6) * 0.45,
  }
}

function project(rx, ry, s) {
  const cosX = Math.cos(rx)
  const cosY = Math.cos(ry)
  const sinX = Math.sin(rx)
  const sinY = Math.sin(ry)
  return [
    [-s, -s],
    [ s, -s],
    [ s,  s],
    [-s,  s],
  ].map(([px, py]) => [
    px * cosY,
    py * cosX - px * sinY * sinX,
  ])
}

function drawTile(ctx, t) {
  const pts = project(t.rotX, t.rotY, t.size * 0.5)
  ctx.save()
  ctx.translate(t.x, t.y)
  ctx.globalAlpha = t.alpha

  const grad = ctx.createLinearGradient(pts[0][0], pts[0][1], pts[2][0], pts[2][1])
  grad.addColorStop(0,    t.pal[0])
  grad.addColorStop(0.35, t.pal[1])
  grad.addColorStop(0.65, t.pal[2])
  grad.addColorStop(1,    t.pal[3])

  ctx.beginPath()
  ctx.moveTo(pts[0][0], pts[0][1])
  pts.slice(1).forEach(([x, y]) => ctx.lineTo(x, y))
  ctx.closePath()
  ctx.fillStyle = grad
  ctx.fill()

  ctx.strokeStyle = t.pal[3]
  ctx.lineWidth = 0.8
  ctx.stroke()

  const shine = ctx.createLinearGradient(pts[0][0], pts[0][1], pts[1][0], pts[1][1])
  shine.addColorStop(0,   'rgba(255,255,255,0.35)')
  shine.addColorStop(0.5, 'rgba(255,255,255,0)')
  ctx.fillStyle = shine
  ctx.fill()

  ctx.restore()
}

export function useMirrorCanvas(canvasRef, tileCount = 28) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let rafId
    let tiles = []

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      tiles = Array.from({ length: tileCount }, () =>
        makeTile(canvas.width, canvas.height)
      )
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tiles.forEach(t => {
        t.rotX += t.dRotX
        t.rotY += t.dRotY
        t.rotZ += t.dRotZ
        t.x += t.vx
        t.y += t.vy

        const pad = t.size
        if (t.x < -pad)               t.x = canvas.width  + pad
        if (t.x > canvas.width  + pad) t.x = -pad
        if (t.y < -pad)               t.y = canvas.height + pad
        if (t.y > canvas.height + pad) t.y = -pad

        drawTile(ctx, t)
      })
      rafId = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    tick()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef, tileCount])
}
