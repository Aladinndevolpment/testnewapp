import React from "react";
// import MuiPhoneNumber from 'material-ui-phone-number'

import {
  Box,
  TextField,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import PhoneInput from "react-phone-input-2";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      // padding: 10,
      "& span": {
        color: "red",
      },
    },
    BoxInline: {
      flexDirection: "row",
      display: "flex",
    },
    BoxText: {
      display: "flex",
      // alignItems: 'center !important',
      marginTop: "8px",
      "& span": {
        color: "red",
        paddingLeft: 5,
      },
    },
  })
);

const Input = (props: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.BoxInline} pr={1} pl={1}>
      <Box>
        <PhoneInput
          specialLabel={""}
          country={"th"}
          inputStyle={{
            borderColor: props.touched && props.error && "red",
          }}
          {...props}
        />
        {props.touched && props.error && (
          <p
            style={{ color: "red" }}
            className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense"
          >
            {props.error}
          </p>
        )}
      </Box>
    </Box>
  );
};

const MobileNo = (props: any) => {
  return (
    <Input
      label={"Mobile Phone"}
      req={true}
      helperText={""}
      error={true}
      isSelect={false}
      {...props.input}
      {...props.meta}
      {...props.custom}
    />
  );
};

export default MobileNo;
