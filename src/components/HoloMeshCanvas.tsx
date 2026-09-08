import { useEffect, useRef } from "react";

interface HoloMeshProps {
  color?: "green" | "gold" | "cyan";
  particleCount?: number;
  size?: number;
  className?: string;
  interactive?: boolean;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  speed: number;
  phase: number;
}

export function HoloMeshCanvas({
  color = "green",
  particleCount = 650,
  size = 360,
  className = "",
  interactive = true,
}: HoloMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    canvas.width = size * window.devicePixelRatio;
    canvas.height = size * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Color definitions
    const palettes = {
      green: {
        core: "rgba(52, 211, 153, 0.95)",
        mid: "rgba(16, 185, 129, 0.65)",
        glow: "rgba(5, 150, 105, 0.25)",
        line: "rgba(52, 211, 153, 0.15)",
      },
      gold: {
        core: "rgba(245, 158, 11, 0.95)",
        mid: "rgba(217, 119, 6, 0.65)",
        glow: "rgba(180, 83, 9, 0.25)",
        line: "rgba(245, 158, 11, 0.15)",
      },
      cyan: {
        core: "rgba(56, 189, 248, 0.95)",
        mid: "rgba(14, 165, 233, 0.65)",
        glow: "rgba(2, 132, 199, 0.25)",
        line: "rgba(56, 189, 248, 0.15)",
      },
    };

    const palette = palettes[color] || palettes.green;

    // Generate dual-lobe 3D particle sphere / torus
    const points: Point3D[] = [];
    const radius = size * 0.32;

    for (let i = 0; i < particleCount; i++) {
      // Create organic dual-sphere / peanut shape
      const lobe = Math.random() > 0.5 ? 1 : -1;
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(Math.random() * 2 - 1);

      const r = radius * (0.75 + Math.random() * 0.4);
      const offsetX = lobe * (radius * 0.42);

      const x = r * Math.sin(v) * Math.cos(u) + offsetX;
      const y = r * Math.sin(v) * Math.sin(u);
      const z = r * Math.cos(v);

      points.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: 1 + Math.random() * 2,
        speed: 0.005 + Math.random() * 0.015,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let angleX = 0;
    let angleY = 0;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - rect.width / 2;
      const clientY = e.clientY - rect.top - rect.height / 2;
      mouseRef.current.targetX = clientX / (rect.width / 2);
      mouseRef.current.targetY = clientY / (rect.height / 2);
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      mouseRef.current.active = false;
    };

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        if (
          e.clientX >= rect.left - 100 &&
          e.clientX <= rect.right + 100 &&
          e.clientY >= rect.top - 100 &&
          e.clientY <= rect.bottom + 100
        ) {
          const clientX = e.clientX - rect.left - rect.width / 2;
          const clientY = e.clientY - rect.top - rect.height / 2;
          mouseRef.current.targetX = (clientX / (rect.width / 2)) * 0.7;
          mouseRef.current.targetY = (clientY / (rect.height / 2)) * 0.7;
        }
      });
    }

    const render = () => {
      time += 0.02;

      // Smooth mouse damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      angleY += 0.008 + mouseRef.current.x * 0.02;
      angleX = Math.sin(time * 0.5) * 0.15 + mouseRef.current.y * 0.02;

      ctx.clearRect(0, 0, size, size);

      const fov = 340;
      const centerX = size / 2;
      const centerY = size / 2;

      // Project & sort points
      const projected = points.map((p) => {
        // Organic pulse vibration
        const pulse = Math.sin(time * 1.5 + p.phase) * 6;
        const currentR = 1 + pulse * 0.015;

        let px = p.baseX * currentR;
        let py = p.baseY * currentR;
        let pz = p.baseZ * currentR;

        // Rotation around Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x1 = px * cosY - pz * sinY;
        const z1 = pz * cosY + px * sinY;

        // Rotation around X
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y2 = py * cosX - z1 * sinX;
        const z2 = z1 * cosX + py * sinX;

        // 3D Perspective scale
        const scale = fov / (fov + z2);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;
        const alpha = Math.max(0.12, Math.min(1, (z2 + radius * 1.5) / (radius * 3)));

        return {
          x: screenX,
          y: screenY,
          z: z2,
          scale,
          alpha,
          size: p.size * scale,
        };
      });

      // Sort points back-to-front
      projected.sort((a, b) => b.z - a.z);

      // Connect near neighbors with faint energy threads
      for (let i = 0; i < projected.length; i += 6) {
        for (let j = i + 1; j < Math.min(i + 8, projected.length); j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 38) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = palette.line;
            ctx.lineWidth = (1 - dist / 38) * 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw glowing particles
      for (const p of projected) {
        const rad = p.size;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);

        // Core fill
        ctx.fillStyle = p.z > 0 ? palette.core : palette.mid;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Subtle glow halo for front particles
        if (p.z > 0 && p.size > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, rad * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = palette.glow;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [color, particleCount, size, interactive]);

  return (
    <div
      className={`holo-mesh-wrapper ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
        display: "inline-block",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          filter: "drop-shadow(0 0 24px rgba(52, 211, 153, 0.3))",
        }}
      />
    </div>
  );
}
