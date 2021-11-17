// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ListStyleWhiteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ListStyleWhiteIcon(props: ListStyleWhiteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 41"}
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
          "M20 9.985L26.182.5l-.303 11.493L36.181 8.14l-6.67 9.11L40 20.5l-10.489 3.25 6.67 9.112-10.303-3.855.303 11.493-6.18-9.485-6.182 9.485.303-11.493L3.82 32.862l6.669-9.113L0 20.5l10.489-3.25L3.82 8.14l10.302 3.853L13.819.5l6.182 9.485z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ListStyleWhiteIcon;
/* prettier-ignore-end */
