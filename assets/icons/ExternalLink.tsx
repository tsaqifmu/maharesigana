import * as React from "react";
const ExternalLink = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#266693"
      d="M16.5 4.5a1.5 1.5 0 0 0 0 3h3.879l-9.44 9.44a1.501 1.501 0 0 0 1.056 2.578 1.501 1.501 0 0 0 1.066-.457L22.5 9.62V13.5a1.5 1.5 0 1 0 3 0V6A1.5 1.5 0 0 0 24 4.5h-7.5Z"
    />
    <path
      fill="#266693"
      d="M7.5 7.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V18a1.5 1.5 0 1 0-3 0v4.5h-12v-12H12a1.5 1.5 0 1 0 0-3H7.5Z"
    />
  </svg>
);
export default ExternalLink;
