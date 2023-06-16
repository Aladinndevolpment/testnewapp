import { Text } from "./Text/Text";
import { Button, ButtonText } from "./Button";
import { useNode, Element } from "@craftjs/core";
import { Link } from "./Link";
import { TextInputElement } from "./form/TextInput";
import { TextAreaElement } from "./form/TextareaElement";
import { RadioInputElement } from "./form/RadioElement";
import { CheckboxInputElement } from "./form/CheckboxElement";
import { SelectBoxInputElement } from "./form/SelectInputElement";
import { AttachmentElement } from "./form/Attachment";
import { DatePickerElement } from "./form/DatePicker";

export const SlideTop = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

SlideTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) =>
          incomingNode.data.type === Text ||
          incomingNode.data.type === TextInputElement ||
          incomingNode.data.type === TextAreaElement ||
          incomingNode.data.type === RadioInputElement ||
          incomingNode.data.type === CheckboxInputElement ||
          incomingNode.data.type === SelectBoxInputElement ||
          incomingNode.data.type === AttachmentElement ||
          incomingNode.data.type === DatePickerElement ||
          incomingNode.data.type === Button ||
          incomingNode.data.type === Link
      ),
  },
};

export const Slide = ({ padding = 20 }) => {
  const {
    connectors: { connect, drag },
  }: any = useNode();

  return (
    <div className="bg-white p-4 w-full" ref={(ref: any) => connect(drag(ref))}>
      <div className="card card-compact w-full bg-base-100 shadow-md rounded-md">
        <div className="card-body">
          <Element id="text" is={SlideTop} canvas>
            <Text
              alignment="center"
              text="Slides"
              fontSize={20}
              marginBottom={40}
            />
          </Element>
        </div>
      </div>
    </div>
  );
};

Slide.craft = {
  displayName: "Slide",
};
