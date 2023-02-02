import * as React from "react"

const SliderPrevIcon = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16 22-6-7 6-7"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity={0.5}
      d="m20 22-6-7 6-7"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SliderPrevIcon
