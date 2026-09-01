import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  type: number;
  cluster: number;
};

export function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let nodes: Node[] = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const clusters = [
      { cx: 0.25, cy: 0.35 },
      { cx: 0.75, cy: 0.3 },
      { cx: 0.5, cy: 0.65 },
      { cx: 0.2, cy: 0.75 },
      { cx: 0.8, cy: 0.7 },
    ];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const baseCount = Math.max(36, Math.floor((w * h) / 22000));
      nodes = [];

      for (let c = 0; c < clusters.length; c++) {
        const clusterCount = Math.floor(baseCount / clusters.length) + 2;
        for (let i = 0; i < clusterCount; i++) {
          const cl = clusters[c];
          const spread = 0.18 + Math.random() * 0.08;
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * spread;
          nodes.push({
            x: (cl.cx + Math.cos(angle) * dist) * w,
            y: (cl.cy + Math.sin(angle) * dist) * h,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            r: Math.random() * 1.8 + 0.6,
            pulse: Math.random() * Math.PI * 2,
            type: Math.floor(Math.random() * 3),
            cluster: c,
          });
        }
      }

      const extras = baseCount - nodes.length;
      for (let i = 0; i < extras; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.4 + 0.5,
          pulse: Math.random() * Math.PI * 2,
          type: Math.floor(Math.random() * 3),
          cluster: -1,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const draw = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const g1 = ctx.createRadialGradient(w * 0.65, h * 0.25, 30, w * 0.5, h * 0.45, Math.max(w, h) * 0.75);
      g1.addColorStop(0, "rgba(107, 29, 42, 0.11)");
      g1.addColorStop(0.4, "rgba(139, 35, 52, 0.05)");
      g1.addColorStop(1, "rgba(250, 247, 242, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const g2 = ctx.createRadialGradient(w * 0.15, h * 0.8, 20, w * 0.3, h * 0.65, Math.max(w, h) * 0.5);
      g2.addColorStop(0, "rgba(184, 137, 74, 0.11)");
      g2.addColorStop(1, "rgba(250, 247, 242, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      if (!reduce) {
        const mouse = mouseRef.current;
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          n.pulse += 0.014;

          if (mouse.active) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const d = Math.hypot(dx, dy);
            if (d < 140) {
              const f = (1 - d / 140) * 0.06;
              n.vx += (dx / d) * f;
              n.vy += (dy / d) * f;
            }
          }

          n.vx *= 0.985;
          n.vy *= 0.985;

          const speed = Math.hypot(n.vx, n.vy);
          if (speed > 0.6) {
            n.vx = (n.vx / speed) * 0.6;
            n.vy = (n.vy / speed) * 0.6;
          }
          if (speed < 0.12) {
            n.vx += (Math.random() - 0.5) * 0.02;
            n.vy += (Math.random() - 0.5) * 0.02;
          }

          if (n.x < 0) { n.x = 0; n.vx *= -1; }
          if (n.x > w) { n.x = w; n.vx *= -1; }
          if (n.y < 0) { n.y = 0; n.vy *= -1; }
          if (n.y > h) { n.y = h; n.vy *= -1; }
        }
      }

      const maxDist = Math.min(150, w * 0.17);
      const clusterMaxDist = maxDist * 1.6;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          const sameCluster = a.cluster !== -1 && a.cluster === b.cluster;
          const threshold = sameCluster ? clusterMaxDist : maxDist * 0.7;

          if (d < threshold) {
            const alphaBase = sameCluster ? 0.22 : 0.12;
            const alpha = (1 - d / threshold) * alphaBase;
            const pulseWave = Math.sin(t * 0.001 + (a.pulse + b.pulse) * 0.5) * 0.15 + 0.85;

            if (a.type === 0 || b.type === 0) {
              ctx.strokeStyle = `rgba(107, 29, 42, ${alpha * pulseWave})`;
            } else if (a.type === 2 || b.type === 2) {
              ctx.strokeStyle = `rgba(184, 137, 74, ${alpha * pulseWave * 0.9})`;
            } else {
              ctx.strokeStyle = `rgba(139, 35, 52, ${alpha * pulseWave * 0.9})`;
            }
            ctx.lineWidth = sameCluster ? 0.75 : 0.55;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      const mouse = mouseRef.current;
      if (mouse.active) {
        for (const n of nodes) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d < 180) {
            const alpha = (1 - d / 180) * 0.5;
            ctx.strokeStyle = `rgba(184, 137, 74, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const glow = 0.4 + Math.sin(n.pulse + t * 0.0008) * 0.25;
        const glowR = n.r * (3.5 + glow * 1.5);

        let glowColor: string;
        let coreColor: string;
        if (n.type === 0) {
          glowColor = `rgba(107, 29, 42, ${0.14 + glow * 0.12})`;
          coreColor = `rgba(107, 29, 42, ${0.82 + glow * 0.18})`;
        } else if (n.type === 2) {
          glowColor = `rgba(184, 137, 74, ${0.13 + glow * 0.12})`;
          coreColor = `rgba(154, 111, 58, ${0.8 + glow * 0.2})`;
        } else {
          glowColor = `rgba(139, 35, 52, ${0.11 + glow * 0.11})`;
          coreColor = `rgba(26, 22, 18, ${0.75 + glow * 0.25})`;
        }

        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        grd.addColorStop(0, glowColor);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = coreColor;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        if (n.cluster !== -1 && Math.sin(n.pulse * 1.5) > 0.7) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(184, 137, 74, ${0.25 + glow * 0.2})`;
          ctx.lineWidth = 0.5;
          ctx.arc(n.x, n.y, n.r * 2.5, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas className="net-canvas" ref={ref} aria-hidden="true" />;
}
