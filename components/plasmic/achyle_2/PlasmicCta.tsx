// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9mqNJRrUCJdF1Qi4kUEnK1
// Component: KMaiExXsEA
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
import Button from "../../Button"; // plasmic-import: KxQ-6Oe5Yl/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_achyle_2.module.css"; // plasmic-import: 9mqNJRrUCJdF1Qi4kUEnK1/projectcss
import * as sty from "./PlasmicCta.module.css"; // plasmic-import: KMaiExXsEA/css

export type PlasmicCta__VariantMembers = {};

export type PlasmicCta__VariantsArgs = {};
type VariantPropType = keyof PlasmicCta__VariantsArgs;
export const PlasmicCta__VariantProps = new Array<VariantPropType>();

export type PlasmicCta__ArgsType = {};
type ArgPropType = keyof PlasmicCta__ArgsType;
export const PlasmicCta__ArgProps = new Array<ArgPropType>();

export type PlasmicCta__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultCtaProps {
  className?: string;
}

function PlasmicCta__RenderFunc(props: {
  variants: PlasmicCta__VariantsArgs;
  args: PlasmicCta__ArgsType;
  overrides: PlasmicCta__OverridesType;
  dataFetches?: PlasmicCta__Fetches;
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
      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCta__VariantsArgs;
    args?: PlasmicCta__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCta__Fetches;
  } & Omit<PlasmicCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCta__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCta__ArgProps,
      internalVariantPropNames: PlasmicCta__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCta";
  } else {
    func.displayName = `PlasmicCta.${nodeName}`;
  }
  return func;
}

export const PlasmicCta = Object.assign(
  // Top-level PlasmicCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicCta
    internalVariantProps: PlasmicCta__VariantProps,
    internalArgProps: PlasmicCta__ArgProps
  }
);

export default PlasmicCta;
/* prettier-ignore-end */
