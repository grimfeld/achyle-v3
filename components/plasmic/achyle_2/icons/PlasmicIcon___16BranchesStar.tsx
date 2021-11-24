// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _16BranchesStarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _16BranchesStarIcon(props: _16BranchesStarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 175 175"}
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

      <path d={"M90.887 0h-6.774v175h6.774V0z"} fill={"currentColor"}></path>

      <path d={"M175 90.887v-6.774H0v6.774h175z"} fill={"currentColor"}></path>

      <path
        d={"M59.87 4.408l-6.34 2.384 61.6 163.8 6.34-2.384-61.6-163.8z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M170.592 59.87l-2.384-6.34-163.8 61.6 2.384 6.34 163.8-61.6z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M147.065 151.564l4.79-4.79L28.111 23.031l-4.79 4.79 123.744 123.743z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M22.871 147.065l4.79 4.79L151.405 28.111l-4.79-4.79L22.871 147.065z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M167.21 123.504l2.566-6.269L7.819 50.94l-2.566 6.27 161.957 66.294z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M50.93 167.359l6.269 2.566L123.494 7.968l-6.269-2.566L50.93 167.36z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _16BranchesStarIcon;
/* prettier-ignore-end */
