import { SVGProps } from "react";

export function Error(props: SVGProps<SVGSVGElement>) {
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
        d="M9.99984 2.29175C14.2565 2.29175 17.7082 5.74258 17.7082 10.0001C17.7082 14.2567 14.2565 17.7084 9.99984 17.7084C5.74234 17.7084 2.2915 14.2567 2.2915 10.0001C2.2915 5.74258 5.74234 2.29175 9.99984 2.29175Z"
        stroke="#D92D20"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99577 6.83667V10.5192"
        stroke="#D92D20"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.996 13.1632H10.0043"
        stroke="#D92D20"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
