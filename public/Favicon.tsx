import * as React from "react";
import type { SVGProps } from "react";
const SvgFavicon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <defs>
      <linearGradient id="favicon_svg__a" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="favicon_svg__b" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
    </defs>
    <circle
      cx={32}
      cy={32}
      r={30}
      stroke="url(#favicon_svg__a)"
      strokeWidth={2}
      opacity={0.6}
    />
    <circle
      cx={32}
      cy={32}
      r={28}
      stroke="url(#favicon_svg__b)"
      opacity={0.4}
    />
    <circle cx={32} cy={32} r={26} fill="#062d1f" />
    <g fill="url(#favicon_svg__a)" opacity={0.05}>
      <circle cx={16} cy={16} r={3} />
      <circle cx={48} cy={48} r={3} />
      <circle cx={16} cy={48} r={2} />
      <circle cx={48} cy={16} r={2} />
    </g>
    <text
      x={32}
      y={40}
      fill="url(#favicon_svg__a)"
      fontFamily="Amiri, Amiri Quran, serif"
      fontSize={36}
      fontWeight={700}
      textAnchor="middle"
    >
      {"\u0635"}
    </text>
    <circle
      cx={32}
      cy={32}
      r={22}
      stroke="url(#favicon_svg__a)"
      strokeDasharray="8,4"
      strokeWidth={1.5}
      opacity={0.5}
    />
    <g fill="url(#favicon_svg__a)" opacity={0.8}>
      <circle cx={32} cy={8} r={1.5} />
      <circle cx={32} cy={56} r={1.5} />
      <circle cx={8} cy={32} r={1.5} />
      <circle cx={56} cy={32} r={1.5} />
    </g>
  </svg>
);
export default SvgFavicon;
