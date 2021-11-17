// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9mqNJRrUCJdF1Qi4kUEnK1
// Component: iLkYtMJ5YQ
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_achyle_2.module.css"; // plasmic-import: 9mqNJRrUCJdF1Qi4kUEnK1/projectcss
import * as sty from "./PlasmicHeading.module.css"; // plasmic-import: iLkYtMJ5YQ/css

export type PlasmicHeading__VariantMembers = {
  dark: "dark";
};

export type PlasmicHeading__VariantsArgs = {
  dark?: SingleBooleanChoiceArg<"dark">;
};

type VariantPropType = keyof PlasmicHeading__VariantsArgs;
export const PlasmicHeading__VariantProps = new Array<VariantPropType>("dark");

export type PlasmicHeading__ArgsType = {
  content?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHeading__ArgsType;
export const PlasmicHeading__ArgProps = new Array<ArgPropType>("content");

export type PlasmicHeading__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultHeadingProps {
  content?: React.ReactNode;
  dark?: SingleBooleanChoiceArg<"dark">;
  className?: string;
}

function PlasmicHeading__RenderFunc(props: {
  variants: PlasmicHeading__VariantsArgs;
  args: PlasmicHeading__ArgsType;
  overrides: PlasmicHeading__OverridesType;
  dataFetches?: PlasmicHeading__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Heading",
          value: args.content,
          className: classNames(sty.slotTargetContent, {
            [sty.slotTargetContent__dark]: hasVariant(variants, "dark", "dark")
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeading__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeading__VariantsArgs;
    args?: PlasmicHeading__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeading__Fetches;
  } & Omit<PlasmicHeading__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeading__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeading__ArgProps,
      internalVariantPropNames: PlasmicHeading__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeading__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeading";
  } else {
    func.displayName = `PlasmicHeading.${nodeName}`;
  }
  return func;
}

export const PlasmicHeading = Object.assign(
  // Top-level PlasmicHeading renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicHeading
    internalVariantProps: PlasmicHeading__VariantProps,
    internalArgProps: PlasmicHeading__ArgProps
  }
);

export default PlasmicHeading;
/* prettier-ignore-end */