// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayIcon(props: PlayIconProps) {
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
          "M15 25c5.523 0 10-4.477 10-10S20.523 5 15 5 5 9.477 5 15s4.477 10 10 10zm0 2.5c6.904 0 12.5-5.596 12.5-12.5S21.904 2.5 15 2.5 2.5 8.096 2.5 15 8.096 27.5 15 27.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.25 11.254a1.25 1.25 0 011.892-1.073l6.246 3.735c.82.49.82 1.678 0 2.168l-6.247 3.735a1.25 1.25 0 01-1.891-1.073v-7.492z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayIcon;
/* prettier-ignore-end */
