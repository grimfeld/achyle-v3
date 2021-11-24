// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _9BranchesStarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _9BranchesStarIcon(props: _9BranchesStarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 174 174"}
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
        d={
          "M87.003 66.357L117.218 0 98.36 70.553l65.146-31.11L104.4 81.177 174 99.872l-71.697-6.607 41.482 59.75-50.742-51.858L87.003 174l-6.047-72.843-50.741 51.858 41.483-59.75L0 99.872l69.6-18.695-59.106-41.734 65.153 31.11L56.788 0l30.215 66.357z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _9BranchesStarIcon;
/* prettier-ignore-end */
