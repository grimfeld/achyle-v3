// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9mqNJRrUCJdF1Qi4kUEnK1
// Component: 5MLV0Vivwy
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
import * as projectcss from "../achyle_2/plasmic_achyle_2.module.css"; // plasmic-import: 9mqNJRrUCJdF1Qi4kUEnK1/projectcss
import * as sty from "./PlasmicLink.module.css"; // plasmic-import: 5MLV0Vivwy/css

export type PlasmicLink__VariantMembers = {};

export type PlasmicLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicLink__VariantsArgs;
export const PlasmicLink__VariantProps = new Array<VariantPropType>();

export type PlasmicLink__ArgsType = {
  children?: React.ReactNode;
  type?: string;
  target?: string | PageHref;
};

type ArgPropType = keyof PlasmicLink__ArgsType;
export const PlasmicLink__ArgProps = new Array<ArgPropType>(
  "children",
  "type",
  "target"
);

export type PlasmicLink__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultLinkProps {
  children?: React.ReactNode;
  type?: string;
  target?: string | PageHref;
  className?: string;
}

function PlasmicLink__RenderFunc(props: {
  variants: PlasmicLink__VariantsArgs;
  args: PlasmicLink__ArgsType;
  overrides: PlasmicLink__OverridesType;
  dataFetches?: PlasmicLink__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.a,
        projectcss.a,
        projectcss.root_reset,
        sty.root
      )}
      component={Link}
      href={args.target}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Label",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </p.PlasmicLink>
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
  root: "a";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLink__VariantsArgs;
    args?: PlasmicLink__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLink__Fetches;
  } & Omit<PlasmicLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLink__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLink__ArgProps,
      internalVariantPropNames: PlasmicLink__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLink";
  } else {
    func.displayName = `PlasmicLink.${nodeName}`;
  }
  return func;
}

export const PlasmicLink = Object.assign(
  // Top-level PlasmicLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicLink
    internalVariantProps: PlasmicLink__VariantProps,
    internalArgProps: PlasmicLink__ArgProps
  }
);

export default PlasmicLink;
/* prettier-ignore-end */
