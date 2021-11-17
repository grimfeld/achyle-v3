// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckIcon(props: CheckIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
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
          "M25 8.333C15.795 8.333 8.333 15.795 8.333 25c0 9.205 7.462 16.667 16.667 16.667 9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.667-16.667-16.667zM4.167 25C4.167 13.494 13.494 4.167 25 4.167c11.506 0 20.833 9.327 20.833 20.833 0 11.506-9.327 20.833-20.833 20.833-11.506 0-20.833-9.327-20.833-20.833z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M32.723 19.36a2.083 2.083 0 010 2.947L24.39 30.64a2.083 2.083 0 01-2.947 0l-4.166-4.167a2.083 2.083 0 112.946-2.946l2.694 2.693 6.86-6.86a2.083 2.083 0 012.946 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheckIcon;
/* prettier-ignore-end */
