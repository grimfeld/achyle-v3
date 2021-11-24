// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneIcon(props: PhoneIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3.955 8.356c.257-1.492 1.11-2.688 2.027-3.606a3.404 3.404 0 015.134.369l2.026 2.711a3.75 3.75 0 01-.351 4.897l-.14.139a1.25 1.25 0 000 1.768l2.715 2.714a1.25 1.25 0 001.768 0l.139-.139a3.75 3.75 0 014.897-.352L24.9 18.9a3.382 3.382 0 01.367 5.1c-.928.928-2.138 1.794-3.648 2.054-2.78.48-8.108.475-13.129-4.545-5.023-5.023-5.014-10.38-4.536-13.153zM7.75 6.518c-.72.72-1.195 1.472-1.331 2.263-.386 2.236-.442 6.678 3.84 10.96 4.284 4.284 8.7 4.236 10.936 3.85.806-.14 1.571-.625 2.305-1.359a.882.882 0 00-.095-1.33l-2.732-2.042a1.25 1.25 0 00-1.632.117l-.14.139a3.75 3.75 0 01-5.303 0l-2.714-2.714a3.75 3.75 0 010-5.304l.139-.139c.44-.439.49-1.134.117-1.632L9.113 6.616a.904.904 0 00-1.363-.098z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhoneIcon;
/* prettier-ignore-end */
