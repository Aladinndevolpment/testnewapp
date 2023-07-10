// import React, { useState } from "react";
// import { Text } from "./Text/Text";
// import { Button } from "./Button";
// import { useNode, Element } from "@craftjs/core";
// import Container from "./Container";
// import TextInput from "@/components/controls/TextInput";
// import { IoContract } from "react-icons/io5";
// import {
//   CommonSettings,
//   ICommonSettingsProps,
//   baseDefaults,
//   getCommonSettingsProps,
// } from "./CommonSettings";
// import LeftFlyOut from "@/components/LeftLayout";
// import { TopbarSection } from "../TopBarSections";

// export const GridTop = ({
//   children,
//   backgroundColor = baseDefaults.backgroundColor,
//   borderRadius = baseDefaults.borderRadius,
//   borderColor = baseDefaults.borderColor,
//   borderType = "border-solid",
//   borderWidth = baseDefaults.borderWidth,
//   marginTop = baseDefaults.marginTop,
//   marginBottom = baseDefaults.marginBottom,
//   marginLeft = baseDefaults.marginLeft,
//   marginRight = baseDefaults.marginRight,
//   paddingTop = baseDefaults.paddingTop,
//   paddingBottom = baseDefaults.paddingBottom,
//   paddingLeft = baseDefaults.paddingLeft,
//   paddingRight = baseDefaults.paddingRight,
//   shadow = "shadow-none",
//   shadowColor = "transparent",
// }: any) => {
//   const [openCreateModal, setOpenCreateModal] = useState(false);
//   const {
//     connectors: { connect, drag },

//     hovered,
//   }: any = useNode((state) => ({
//     hovered: state.events.hovered,
//   }));

//   return (
//     <>
//       <LeftFlyOut
//         visibility={openCreateModal}
//         onClose={() => {
//           setOpenCreateModal(false);
//         }}
//       >
//         <TopbarSection />
//       </LeftFlyOut>
//       <div
//         ref={(ref: any) => connect(drag(ref))}
//         className={`text-only relative ${borderType} ${shadow} shadow-[${shadowColor}]`}
//         style={{
//           backgroundColor,
//           borderColor,
//           borderWidth: `${borderWidth}px`,
//           borderRadius: `${borderRadius}px`,
//           marginTop: `${marginTop}px`,
//           marginBottom: `${marginBottom}px`,
//           marginLeft: `${marginLeft}px`,
//           marginRight: `${marginRight}px`,
//           paddingTop: `${paddingTop}px`,
//           paddingBottom: `${paddingBottom}px`,
//           paddingLeft: `${paddingLeft}px`,
//           paddingRight: `${paddingRight}px`,
//         }}
//       >
//         {hovered && (
//           <>
//             <div className="absolute top-0 left-0 bg-blue-500 text-white text-[10px] px-1">
//               Grid Column
//             </div>
//             <div
//               className="absolute top-10 left-[48%] bg-blue-500 text-lime-300 text-[10px] px-1"
//               onClick={() => {
//                 setOpenCreateModal(true);
//               }}
//             >
//               +
//             </div>
//           </>
//         )}
//         {children}
//       </div>
//     </>
//   );
// };

// GridTop.craft = {
//   rules: {
//     // Only accept Text
//     canMoveIn: (incomingNodes: any) =>
//       incomingNodes.every((incomingNode: any) => true),
//   },

//   related: {
//     settings: CommonSettings,
//   },

//   props: {
//     ...getCommonSettingsProps(),
//     borderRadius: 10,
//     borderWidth: baseDefaults.borderWidth,
//     marginTop: baseDefaults.marginTop,
//     marginBottom: baseDefaults.marginBottom,
//     marginLeft: baseDefaults.marginLeft,
//     marginRight: baseDefaults.marginRight,
//     paddingTop: 16,
//     paddingBottom: 16,
//     paddingLeft: 16,
//     paddingRight: 16,
//   },
// };

// interface IGridProps extends ICommonSettingsProps {
//   col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
//   padding?: number;
// }
// const elementName = "Grid";

// export const Grid = ({
//   padding = 20,
//   col = 1,
//   backgroundColor = baseDefaults.backgroundColor,
//   borderRadius = baseDefaults.borderRadius,
//   borderColor = baseDefaults.borderColor,
//   borderType = "border-solid",
//   borderWidth = baseDefaults.borderWidth,
//   marginTop = baseDefaults.marginTop,
//   marginBottom = baseDefaults.marginBottom,
//   marginLeft = baseDefaults.marginLeft,
//   marginRight = baseDefaults.marginRight,
//   paddingTop = baseDefaults.paddingTop,
//   paddingBottom = baseDefaults.paddingBottom,
//   paddingLeft = baseDefaults.paddingLeft,
//   paddingRight = baseDefaults.paddingRight,
//   shadow = "shadow-none",
//   shadowColor = "transparent",
// }: IGridProps) => {
//   const {
//     hovered,
//     connectors: { connect, drag },
//   } = useNode((state) => ({
//     hovered: state.events.hovered,
//   }));
//   return (
//     <div
//       ref={(ref: any) => connect(drag(ref))}
//       className={`flex flex-wrap text-[12px]   ${
//         hovered && "hover:outline-blue-500  "
//       }    relative ${borderType} ${shadow} shadow-[${shadowColor}]`}
//       style={{
//         backgroundColor,
//         borderColor,
//         borderWidth: `${borderWidth}px`,
//         borderRadius: `${borderRadius}px`,
//         marginTop: `${marginTop}px`,
//         marginBottom: `${marginBottom}px`,
//         marginLeft: `${marginLeft}px`,
//         marginRight: `${marginRight}px`,
//         paddingTop: `${paddingTop}px`,
//         paddingBottom: `${paddingBottom}px`,
//         // paddingLeft: `${paddingLeft}px`,
//         // paddingRight: `${paddingRight}px`,
//       }}
//     >
//       {hovered && (
//         <div className="absolute top-5 left-1 text-[10px] bg-blue-500 text-white px-4">
//           {elementName}
//         </div>
//       )}
//       {[...Array(col)].map((item, index) => (
//         <div
//           style={{ width: 100 / col + "%" }}
//           key={index}
//           className="border-2 border-dotted border-gray-400 rounded-md bg-slate-100 font-bold text-gray-500 text-center"
//         >
//           <Element
//             className="text-[4px]"
//             id={`grid_${index}`}
//             is={GridTop}
//             canvas
//           >
//             Drop Content
//           </Element>
//         </div>
//       ))}
//     </div>
//   );
// };

// const GridSettings = () => {
//   const {
//     actions: { setProp },
//     props,
//   } = useNode((node) => ({
//     props: node.data.props,
//   }));

//   return (
//     <div>
//       <div className="mb-4">
//         <TextInput
//           lefticon={<IoContract />}
//           value={props.col}
//           placeholder="Button Text"
//           onChange={(e) => {
//             // if (props.col != "")
//             //   setProp((props: any) => (props.col = parseInt(e.target.value)));
//             // else setProp((props: any) => (props.col = 1));
//             if (e.target.value == "") setProp((props: any) => (props.col = 1));
//             else
//               setProp((props: any) => (props.col = parseInt(e.target.value)));
//           }}
//           min={1}
//           type="number"
//           max={12}
//         />
//       </div>

//       <CommonSettings />
//     </div>
//   );
// };

// Grid.craft = {
//   related: {
//     settings: GridSettings,
//   },
//   props: {
//     col: 1,
//     ...getCommonSettingsProps(),
//     borderRadius: 10,
//     borderWidth: baseDefaults.borderWidth,
//     marginTop: baseDefaults.marginTop,
//     marginBottom: baseDefaults.marginBottom,
//     marginLeft: baseDefaults.marginLeft,
//     marginRight: baseDefaults.marginRight,
//     paddingTop: 16,
//     paddingBottom: 16,
//     paddingLeft: 16,
//     paddingRight: 16,
//   },
//   displayName: elementName,
// };

import React from "react";
import { Text } from "./Text/Text";
import { Button } from "./Button";
import { useNode, Element } from "@craftjs/core";
import Container from "./Container";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import {
  CommonSettings,
  ICommonSettingsProps,
  baseDefaults,
  getCommonSettingsProps,
} from "./CommonSettings";

export const GridTop = ({
  children,
  backgroundColor = baseDefaults.backgroundColor,
  borderRadius = baseDefaults.borderRadius,
  borderColor = baseDefaults.borderColor,
  borderType = "border-solid",
  borderWidth = baseDefaults.borderWidth,
  marginTop = baseDefaults.marginTop,
  marginBottom = baseDefaults.marginBottom,
  marginLeft = baseDefaults.marginLeft,
  marginRight = baseDefaults.marginRight,
  paddingTop = baseDefaults.paddingTop,
  paddingBottom = baseDefaults.paddingBottom,
  paddingLeft = baseDefaults.paddingLeft,
  paddingRight = baseDefaults.paddingRight,
  shadow = "shadow-none",
  shadowColor = "transparent",
}: any) => {
  const {
    connectors: { connect, drag },

    hovered,
  }: any = useNode((state) => ({
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={`text-only relative ${borderType} ${shadow} shadow-[${shadowColor}]`}
      style={{
        backgroundColor,
        borderColor,
        borderWidth: `${borderWidth}px`,
        borderRadius: `${borderRadius}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
      }}
    >
      {hovered && (
        <div className="absolute top-0 right-0 bg-purple-500 text-white text-[8px] px-1">
          Grid Column
        </div>
      )}
      {children}
    </div>
  );
};

GridTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => true),
  },

  related: {
    settings: CommonSettings,
  },

  props: {
    ...getCommonSettingsProps(),
    borderRadius: 10,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginBottom: baseDefaults.marginBottom,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
};

interface IGridProps extends ICommonSettingsProps {
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  padding?: number;
}
const elementName = "Grid";

export const Grid = ({
  padding = 20,
  col = 1,
  backgroundColor = baseDefaults.backgroundColor,
  borderRadius = baseDefaults.borderRadius,
  borderColor = baseDefaults.borderColor,
  borderType = "border-solid",
  borderWidth = baseDefaults.borderWidth,
  marginTop = baseDefaults.marginTop,
  marginBottom = baseDefaults.marginBottom,
  marginLeft = baseDefaults.marginLeft,
  marginRight = baseDefaults.marginRight,
  paddingTop = baseDefaults.paddingTop,
  paddingBottom = baseDefaults.paddingBottom,
  paddingLeft = baseDefaults.paddingLeft,
  paddingRight = baseDefaults.paddingRight,
  shadow = "shadow-none",
  shadowColor = "transparent",
}: IGridProps) => {
  const {
    hovered,
    connectors: { connect, drag },
  } = useNode((state) => ({
    hovered: state.events.hovered,
  }));
  return (
    <div
      ref={(ref: any) => connect(drag(ref))}
      className={`flex flex-wrap   hover:outline ${
        hovered && "hover:outline-blue-500 hover:outline"
      }  outline-dashed outline-1 relative ${borderType} ${shadow} shadow-[${shadowColor}]`}
      style={{
        backgroundColor,
        borderColor,
        borderWidth: `${borderWidth}px`,
        borderRadius: `${borderRadius}px`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
        paddingTop: `${paddingTop}px`,
        paddingBottom: `${paddingBottom}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
      }}
    >
      {hovered && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-1">
          {elementName}
        </div>
      )}
      {[...Array(col)].map((item, index) => (
        <div
          style={{ width: 100 / col + "%" }}
          key={index}
          className="border-2 border-dotted border-green-400"
        >
          <Element id={`grid_${index}`} is={GridTop} canvas></Element>
        </div>
      ))}
    </div>
  );
};

const GridSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <div className="mb-4">
        <TextInput
          lefticon={<IoContract />}
          value={props.col}
          placeholder="Button Text"
          onChange={(e) => {
            // if (props.col != "")
            //   setProp((props: any) => (props.col = parseInt(e.target.value)));
            // else setProp((props: any) => (props.col = 1));
            if (e.target.value == "") setProp((props: any) => (props.col = 1));
            else
              setProp((props: any) => (props.col = parseInt(e.target.value)));
          }}
          min={1}
          type="number"
          max={12}
        />
      </div>

      <CommonSettings />
    </div>
  );
};

Grid.craft = {
  related: {
    settings: GridSettings,
  },
  props: {
    col: 1,
    ...getCommonSettingsProps(),
    borderRadius: 10,
    borderWidth: baseDefaults.borderWidth,
    marginTop: baseDefaults.marginTop,
    marginBottom: baseDefaults.marginBottom,
    marginLeft: baseDefaults.marginLeft,
    marginRight: baseDefaults.marginRight,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  displayName: elementName,
};
