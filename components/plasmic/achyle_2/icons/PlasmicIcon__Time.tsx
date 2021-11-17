// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimeIcon(props: TimeIconProps) {
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
          "M8.333 10.417a6.25 6.25 0 016.25-6.25h20.834a6.25 6.25 0 016.25 6.25v2.022a6.25 6.25 0 01-2.618 5.086L28.584 25l10.465 7.475a6.25 6.25 0 012.618 5.086v2.022a6.25 6.25 0 01-6.25 6.25H14.583a6.25 6.25 0 01-6.25-6.25v-2.022a6.25 6.25 0 012.618-5.086L21.416 25 10.95 17.525a6.25 6.25 0 01-2.618-5.086v-2.022zM25 22.44l11.628-8.306a2.083 2.083 0 00.872-1.695v-2.022a2.084 2.084 0 00-2.083-2.084H14.583c-1.15 0-2.083.933-2.083 2.084v2.022c0 .673.325 1.304.872 1.695L25 22.44zm0 5.12l-11.628 8.306a2.083 2.083 0 00-.872 1.695v2.022c0 1.15.933 2.084 2.083 2.084h20.834c1.15 0 2.083-.933 2.083-2.084v-2.022c0-.673-.325-1.304-.872-1.695L25 27.56z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M33.333 41.667H16.667v-.881c0-.744.397-1.432 1.041-1.804l5.208-3.008a4.167 4.167 0 014.168 0l5.208 3.008a2.083 2.083 0 011.041 1.804v.88z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TimeIcon;
/* prettier-ignore-end */
