import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
  href: string;
}

export default function BackButton({ href }: Props): ReactElement {
  return (
    <div>
      <Link href={href}>
        <a className="mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block cursor-pointer bg-blue-600 text-white hover:bg-blue-700 rounded-md"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              width: "3.5rem",
              height: "3.5rem",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
}
