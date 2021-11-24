// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagIcon(props: FlagIconProps) {
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
          "M13.75 5h8.114c2.482 0 3.973 2.753 2.618 4.832l-1.74 2.668 1.74 2.668C25.837 17.247 24.346 20 21.864 20H17.5a3.75 3.75 0 01-3.75-3.75V5zm2.5 2.5v8.75c0 .69.56 1.25 1.25 1.25h4.364c.496 0 .795-.55.524-.966l-1.74-2.669a2.5 2.5 0 010-2.73l1.74-2.669a.625.625 0 00-.524-.966H16.25z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.5 5v10h6.25V6.25c0-.69-.56-1.25-1.25-1.25h-5zM6.25 2.5C5.56 2.5 5 3.06 5 3.75V17.5h11.25V6.25A3.75 3.75 0 0012.5 2.5H6.25z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M5 3.75a1.25 1.25 0 112.5 0v22.5a1.25 1.25 0 11-2.5 0V3.75z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FlagIcon;
/* prettier-ignore-end */
