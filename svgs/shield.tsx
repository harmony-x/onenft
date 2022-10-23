import { SVGProps } from "react";

export function Shield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.98698 18.0051C9.98698 18.0051 16.3803 16.0692 16.3803 10.7326C16.3803 5.39508 16.612 4.97841 16.0995 4.46508C15.5861 3.95175 10.8253 2.29175 9.98698 2.29175C9.14864 2.29175 4.38781 3.95175 3.87531 4.46508C3.36198 4.97841 3.59364 5.39508 3.59364 10.7326C3.59364 16.0692 9.98698 18.0051 9.98698 18.0051Z"
        stroke="#039855"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.82129 9.89544L9.39796 11.4746L12.6463 8.22461"
        stroke="#039855"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
