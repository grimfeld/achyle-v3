import * as React from 'react'
import Script from 'next/script'
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/host'
import { InputRange } from "@components/InputRange"
import { Simulator } from "@components/Simulator"
import { Form } from "@components/Form"
import { InputText } from "@components/InputText"
import { Slide, SlideShow } from "@components/SlideShow"

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

registerComponent(InputRange, {
  name: 'InputRange',
  props: {
    className: {
      type: "string"
    },
    value: {
      type: "number"
    },
    step: {
      type: "number"
    },
    min: {
      type: "number"
    },
    max: {
      type: "number"
    },
    handleChange: {
      type: "object"
    }
  },
  importPath: './components/InputRange'
})

registerComponent(Simulator, {
  name: "Simulator",
  props: {
    className: "string",
    slot1: "slot",
    slot2: "slot",
    slot3: "slot",
    icon1: "slot",
    icon2: "slot",
  },
  importPath: "./components/Simulator"
})

registerComponent(Form, {
  name: "Form",
  props: {
    className: "string",
    paragraph: "slot",
    description: "slot"
  },
  importPath: "./components/Form"
})

registerComponent(InputText, {
  name: "InputText",
  props: {
    className: "string"
  },
  importPath: "./components/InputText"
})

registerComponent(SlideShow, {
  name: "SlideShow",
  props: {
    className: "string"
  },
  importPath: "./components/SlideShow"
})

registerComponent(Slide, {
  name: "Slide",
  props: {
    className: "string",
    children: "slot"
  },
  importPath: "./components/SlideShow"
})

export default function Host () {
  return (
    <div>
      <Script
        src="https://static1.plasmic.app/preamble.js"
        strategy="beforeInteractive"
      />
      <PlasmicCanvasHost />
    </div>
  )
}