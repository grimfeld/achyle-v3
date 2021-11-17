// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListStyleGreenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListStyleGreenIcon(props: ListStyleGreenIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.5 10.348v-.5h-8.506l5.662-5.661.353-.354-.354-.353-.46-.461-.354-.354-.354.354-5.66 5.66V.5h-1.653v8.18l-5.66-5.661-.354-.354-.353.353-.462.461-.354.354.354.354 5.66 5.66H.5V11.5h8.506l-5.661 5.66-.354.355.354.353.462.461.353.353.353-.353 5.66-5.66V21.5h1.653v-8.832l5.661 5.66.354.354.354-.353.46-.461.354-.354-.354-.353-5.66-5.66H21.5v-1.153z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default ListStyleGreenIcon;
/* prettier-ignore-end */
