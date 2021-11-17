// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9mqNJRrUCJdF1Qi4kUEnK1
// Component: XtbwwYm6Vx
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
import * as sty from "./PlasmicSlider.module.css"; // plasmic-import: XtbwwYm6Vx/css

export type PlasmicSlider__VariantMembers = {};

export type PlasmicSlider__VariantsArgs = {};
type VariantPropType = keyof PlasmicSlider__VariantsArgs;
export const PlasmicSlider__VariantProps = new Array<VariantPropType>();

export type PlasmicSlider__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSlider__ArgsType;
export const PlasmicSlider__ArgProps = new Array<ArgPropType>("children");

export type PlasmicSlider__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSliderProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicSlider__RenderFunc(props: {
  variants: PlasmicSlider__VariantsArgs;
  args: PlasmicSlider__ArgsType;
  overrides: PlasmicSlider__OverridesType;
  dataFetches?: PlasmicSlider__Fetches;
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
      {p.renderPlasmicSlot({
        defaultContents: null,
        value: args.children
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSlider__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSlider__VariantsArgs;
    args?: PlasmicSlider__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSlider__Fetches;
  } & Omit<PlasmicSlider__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSlider__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSlider__ArgProps,
      internalVariantPropNames: PlasmicSlider__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSlider__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSlider";
  } else {
    func.displayName = `PlasmicSlider.${nodeName}`;
  }
  return func;
}

export const PlasmicSlider = Object.assign(
  // Top-level PlasmicSlider renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSlider
    internalVariantProps: PlasmicSlider__VariantProps,
    internalArgProps: PlasmicSlider__ArgProps
  }
);

export default PlasmicSlider;
/* prettier-ignore-end */
