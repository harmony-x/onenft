import { SVGProps } from "react";

export function CircledClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="44"
      height="45"
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7916 43.2229C33.2745 43.2229 42.5832 33.771 42.5832 22.1115C42.5832 10.4519 33.2745 1 21.7916 1C10.3087 1 1 10.4519 1 22.1115C1 33.771 10.3087 43.2229 21.7916 43.2229Z"
        stroke="#A3A6C2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.0292 15.7781L15.5542 28.445"
        stroke="white"
        strokeOpacity="0.67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5542 15.7781L28.0292 28.445"
        stroke="white"
        strokeOpacity="0.67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
