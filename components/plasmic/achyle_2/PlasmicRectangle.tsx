// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9mqNJRrUCJdF1Qi4kUEnK1
// Component: hVvONWSKSkN
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
import Heading from "../../Heading"; // plasmic-import: iLkYtMJ5YQ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_achyle_2.module.css"; // plasmic-import: 9mqNJRrUCJdF1Qi4kUEnK1/projectcss
import * as sty from "./PlasmicRectangle.module.css"; // plasmic-import: hVvONWSKSkN/css

import _16BranchesStarIcon from "./icons/PlasmicIcon___16BranchesStar"; // plasmic-import: Bnle9jB2l/icon

export type PlasmicRectangle__VariantMembers = {
  starVariant: "starVariant";
};

export type PlasmicRectangle__VariantsArgs = {
  starVariant?: SingleBooleanChoiceArg<"starVariant">;
};

type VariantPropType = keyof PlasmicRectangle__VariantsArgs;
export const PlasmicRectangle__VariantProps = new Array<VariantPropType>(
  "starVariant"
);

export type PlasmicRectangle__ArgsType = {
  image?: React.ReactNode;
  title?: React.ReactNode;
  list?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRectangle__ArgsType;
export const PlasmicRectangle__ArgProps = new Array<ArgPropType>(
  "image",
  "title",
  "list"
);

export type PlasmicRectangle__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultRectangleProps {
  image?: React.ReactNode;
  title?: React.ReactNode;
  list?: React.ReactNode;
  starVariant?: SingleBooleanChoiceArg<"starVariant">;
  className?: string;
}

function PlasmicRectangle__RenderFunc(props: {
  variants: PlasmicRectangle__VariantsArgs;
  args: PlasmicRectangle__ArgsType;
  overrides: PlasmicRectangle__OverridesType;
  dataFetches?: PlasmicRectangle__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__nYAmo)}
            displayHeight={"142px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"142px" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/achyle_2/images/needs.png",
              fullWidth: 142,
              fullHeight: 142,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.image
      })}

      {p.renderPlasmicSlot({
        defaultContents: (
          <Heading
            className={classNames("__wab_instance", sty.heading__kfBaV)}
            content={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rGjE5
                )}
              >
                {"Heading"}
              </div>
            }
            dark={"dark" as const}
          />
        ),

        value: args.title
      })}

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.list
        })}
      </p.Stack>

      {(hasVariant(variants, "starVariant", "starVariant") ? true : true) ? (
        <_16BranchesStarIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg, {
            [sty.svg__starVariant]: hasVariant(
              variants,
              "starVariant",
              "starVariant"
            )
          })}
          role={"img"}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg"],
  freeBox: ["freeBox"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRectangle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRectangle__VariantsArgs;
    args?: PlasmicRectangle__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicRectangle__Fetches;
  } & Omit<PlasmicRectangle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRectangle__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicRectangle__ArgProps,
      internalVariantPropNames: PlasmicRectangle__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicRectangle__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRectangle";
  } else {
    func.displayName = `PlasmicRectangle.${nodeName}`;
  }
  return func;
}

export const PlasmicRectangle = Object.assign(
  // Top-level PlasmicRectangle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicRectangle
    internalVariantProps: PlasmicRectangle__VariantProps,
    internalArgProps: PlasmicRectangle__ArgProps
  }
);

export default PlasmicRectangle;
/* prettier-ignore-end */
