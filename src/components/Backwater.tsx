export function Backwater() {
  return (
    <svg className="backwater" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="bw" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#6B1D2A" stopOpacity="0" />
          <stop offset="0.35" stopColor="#B8894A" stopOpacity="0.9" />
          <stop offset="0.7" stopColor="#8B2334" stopOpacity="0.75" />
          <stop offset="1" stopColor="#6B1D2A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className="bw-path a"
        fill="none"
        stroke="url(#bw)"
        strokeWidth="1.5"
        d="M-40,110 C180,40 320,190 520,110 C720,30 880,180 1100,90 C1280,20 1400,140 1500,80"
      />
      <path
        className="bw-path b"
        fill="none"
        stroke="url(#bw)"
        strokeWidth="1.2"
        d="M-40,150 C200,90 360,210 560,140 C760,70 940,200 1160,130 C1320,80 1420,170 1520,120"
      />
      <path
        className="bw-path c"
        fill="none"
        stroke="#B8894A"
        strokeOpacity="0.42"
        strokeWidth="0.85"
        d="M-20,80 C220,130 400,20 620,90 C840,160 980,40 1220,100 C1360,140 1460,70 1540,90"
      />
    </svg>
  );
}
