// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _8BranchesStarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _8BranchesStarIcon(props: _8BranchesStarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 210 210"}
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

      <path d={"M109.065 0h-8.13v210h8.13V0z"} fill={"currentColor"}></path>

      <path d={"M210 109.064v-8.129H0v8.129h210z"} fill={"currentColor"}></path>

      <path
        d={
          "M176.478 181.877l5.748-5.748L33.733 27.637l-5.748 5.748 148.493 148.492z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M27.445 176.478l5.748 5.748L181.686 33.734l-5.748-5.748L27.445 176.478z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _8BranchesStarIcon;
/* prettier-ignore-end */
