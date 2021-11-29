// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockIcon(props: LockIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        d={"M8 6a4 4 0 118 0v5h-2V6a2 2 0 10-4 0v5H8V6z"}
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.759 9h4.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v1.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H9.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C4 17.71 4 17.046 4 16.242v-1.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C8.29 9 8.954 9 9.758 9zM7.91 11.038c-.438.035-.663.1-.819.18a2 2 0 00-.874.874c-.08.156-.145.38-.18.819C6 13.361 6 13.943 6 14.8v1.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C8.361 20 8.943 20 9.8 20h4.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 00.874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-1.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 00-.874-.874c-.156-.08-.38-.145-.819-.18C15.639 11 15.057 11 14.2 11H9.8c-.857 0-1.439 0-1.889.038z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M11 16a1 1 0 112 0v1a1 1 0 11-2 0v-1z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LockIcon;
/* prettier-ignore-end */
