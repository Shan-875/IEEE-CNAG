import { useEffect, useRef } from "react";

interface Hero3DOrbProps {
  className?: string;
  size?: number;
}

export function Hero3DOrb({ className = "", size = 380 }: Hero3DOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const count = 360;
    const radius = size * 0.36;

    // Generate 3D sphere lattice points
    const points: Array<{ x: number; y: number; z: number; size: number; color: string }> = [];

    for (let i = 0; i < count; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(Math.random() * 2 - 1);
      const r = radius * (0.85 + Math.random() * 0.25);

      const x = r * Math.sin(v) * Math.cos(u);
      const y = r * Math.sin(v) * Math.sin(u);
      const z = r * Math.cos(v);

      const isGold = Math.random() > 0.45;
      points.push({
        x,
        y,
        z,
        size: 1.2 + Math.random() * 2.2,
        color: isGold ? "#b8894a" : "#6b1d2a",
      });
    }

    const render = () => {
      time += 0.012; // Automatic continuous rotation
      canvas.width = size * window.devicePixelRatio;
      canvas.height = size * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const fov = 420;

      // Automatic 3D rotation angles
      const angleY = time * 0.6;
      const angleX = Math.sin(time * 0.4) * 0.35 + 0.2;
      const angleZ = time * 0.2;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      // Project & sort points
      const projected = points.map((p) => {
        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Rotate Z
        const x3 = x1 * cosZ - y2 * sinZ;
        const y3 = y2 * cosZ + x1 * sinZ;

        const scale = fov / (fov + z2);
        const px = cx + x3 * scale;
        const py = cy + y3 * scale;
        const alpha = Math.max(0.15, Math.min(0.95, (z2 + radius * 1.4) / (radius * 2.8)));

        return { x: px, y: py, z: z2, scale, alpha, size: p.size * scale, color: p.color };
      });

      projected.sort((a, b) => b.z - a.z);

      // Connect near neighbors with glowing gold energy lines
      for (let i = 0; i < projected.length; i += 4) {
        for (let j = i + 1; j < Math.min(i + 6, projected.length); j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 42) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = "rgba(184, 137, 74, 0.22)";
            ctx.lineWidth = (1 - dist / 42) * 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw glowing particle nodes
      for (const p of projected) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Extra flare for front nodes
        if (p.z > 20 && p.size > 2.0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(212, 166, 99, 0.25)";
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [size]);

  return (
    <div
      className={`hero-3d-orb-container ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
        display: "inline-block",
        pointerEvents: "none",
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
