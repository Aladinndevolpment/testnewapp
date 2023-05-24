import { useNode } from "@craftjs/core";
import { ReactNode } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";

interface IButtonProps {
  size?: string;
  text?: string;
}

export const Button = ({ size, text = "Learn More" }: IButtonProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <button
      ref={(ref: any) => connect(drag(ref))}
      className={`btn ${size} mr-2`}
    >
      {text}
    </button>
  );
};

const ButtonSettings = () => {
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
          value={props.text}
          placeholder="Button Text"
          onChange={(e) =>
            setProp((props: any) => (props.text = e.target.value))
          }
        />
      </div>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup
          defaultValue={props.size}
          onChange={(e) =>
            setProp((props: any) => (props.size = e.target.value))
          }
        >
          <FormControlLabel
            label="Tiny"
            value="btn-xs"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Small"
            value="btn-sm"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Normal"
            value="normal"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Large"
            value="btn-lg"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

Button.craft = {
  related: {
    settings: ButtonSettings,
  },
};
