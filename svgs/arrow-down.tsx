import { SVGProps } from "react";

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="14"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1.5L9 8.5L16.5 1.5"
        stroke="#ABABAB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
