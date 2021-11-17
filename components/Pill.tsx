
    // This is a skeleton starter React component generated by Plasmic.
    // This file is owned by you, feel free to edit as you see fit.
    import * as React from "react";
    import {PlasmicPill, DefaultPillProps} from "./plasmic/achyle_2/PlasmicPill";  // plasmic-import: lXfsMEnWoU/render
    import {HTMLElementRefOf} from "@plasmicapp/react-web";

    // Your component props start with props for variants and slots you defined
    // in Plasmic, but you can add more here, like event handlers that you can
    // attach to named nodes in your component.
    //
    // If you don't want to expose certain variants or slots as a prop, you can use
    // Omit to hide them:
    //
    // interface PillProps extends Omit<DefaultPillProps, "hideProps1"|"hideProp2"> {
    //   // etc.
    // }
    //
    // You can also stop extending from DefaultPillProps altogether and have
    // total control over the props for your component.
    interface PillProps extends DefaultPillProps {
    }

    
      function Pill_(props: PillProps, ref: HTMLElementRefOf<"div">) {
        
    // Use PlasmicPill to render this component as it was
    // designed in Plasmic, by activating the appropriate variants,
    // attaching the appropriate event handlers, etc.  You
    // can also install whatever React hooks you need here to manage state or
    // fetch data.
    //
    // Props you can pass into PlasmicPill are:
    // 1. Variants you want to activate,
    // 2. Contents for slots you want to fill,
    // 3. Overrides for any named node in the component to attach behavior and data,
    // 4. Props to set on the root node.
    //
    // By default, we are just piping all PillProps here, but feel free
    // to do whatever works for you.
  
        return <PlasmicPill root={{ref}} {...props} />;
      }

      const Pill = React.forwardRef(Pill_);
      export default Pill;
    
  