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
    const radius = size * 0.34;
    const points: Array<{ x: number; y: number; z: number; size: number; color: string }> = [];
    const gridLines: Array<Array<{ x: number; y: number; z: number }>> = [];

    for (let latitude = -4; latitude <= 4; latitude += 1) {
      const phi = (latitude / 5) * (Math.PI / 2);
      const line: Array<{ x: number; y: number; z: number }> = [];
      for (let longitude = 0; longitude <= 36; longitude += 1) {
        const theta = (longitude / 36) * Math.PI * 2;
        line.push({
          x: radius * Math.cos(phi) * Math.cos(theta),
          y: radius * Math.sin(phi),
          z: radius * Math.cos(phi) * Math.sin(theta),
        });
      }
      gridLines.push(line);
    }

    for (let longitude = 0; longitude < 12; longitude += 1) {
      const line: Array<{ x: number; y: number; z: number }> = [];
      const theta = (longitude / 12) * Math.PI * 2;
      for (let latitude = -12; latitude <= 12; latitude += 1) {
        const phi = (latitude / 12) * (Math.PI / 2);
        line.push({
          x: radius * Math.cos(phi) * Math.cos(theta),
          y: radius * Math.sin(phi),
          z: radius * Math.cos(phi) * Math.sin(theta),
        });
      }
      gridLines.push(line);
    }

    for (let i = 0; i < 150; i += 1) {
      const theta = i * 2.39996;
      const y = 1 - (i / 149) * 2;
      const ring = Math.sqrt(1 - y * y);
      points.push({
        x: radius * ring * Math.cos(theta),
        y: radius * y,
        z: radius * ring * Math.sin(theta),
        size: 1 + (i % 4) * 0.45,
        color: i % 3 === 0 ? "#8edbff" : "#168dcc",
      });
    }

    const render = () => {
      time += 0.012; // Automatic continuous rotation
      canvas.width = size * window.devicePixelRatio;
      canvas.height = size * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const fov = 420;

      // Automatic 3D rotation angles
      const angleY = time * 0.28;
      const angleX = Math.sin(time * 0.2) * 0.16 + 0.12;
      const angleZ = Math.sin(time * 0.12) * 0.06;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      const project = (point: { x: number; y: number; z: number }) => {
        const x1 = point.x * cosY - point.z * sinY;
        const z1 = point.z * cosY + point.x * sinY;
        const y2 = point.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + point.y * sinX;
        const x3 = x1 * cosZ - y2 * sinZ;
        const y3 = y2 * cosZ + x1 * sinZ;
        const scale = fov / (fov + z2);
        return { x: cx + x3 * scale, y: cy + y3 * scale, z: z2, scale };
      };

      const shell = ctx.createRadialGradient(cx - radius * 0.35, cy - radius * 0.4, 0, cx, cy, radius * 1.25);
      shell.addColorStop(0, "rgba(142, 219, 255, 0.2)");
      shell.addColorStop(0.48, "rgba(0, 98, 155, 0.08)");
      shell.addColorStop(1, "rgba(0, 38, 58, 0)");
      ctx.fillStyle = shell;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.1, 0, Math.PI * 2);
      ctx.fill();

      for (const line of gridLines) {
        const projectedLine = line.map(project);
        for (let i = 1; i < projectedLine.length; i += 1) {
          const current = projectedLine[i];
          const previous = projectedLine[i - 1];
          const depth = Math.max(0.08, (current.z + radius) / (radius * 2));
          ctx.beginPath();
          ctx.moveTo(previous.x, previous.y);
          ctx.lineTo(current.x, current.y);
          ctx.strokeStyle = `rgba(64, 176, 228, ${0.08 + depth * 0.22})`;
          ctx.lineWidth = 0.55 + depth * 0.45;
          ctx.stroke();
        }
      }

      const projected = points.map((point) => {
        const result = project(point);
        const alpha = Math.max(0.12, Math.min(1, (result.z + radius * 1.3) / (radius * 2.3)));
        return { ...result, alpha, size: point.size * result.scale, color: point.color };
      }).sort((a, b) => a.z - b.z);

      for (const p of projected) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        if (p.z > 20 && p.size > 2.0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(142, 219, 255, 0.28)";
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
