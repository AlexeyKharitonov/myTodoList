import {
  Checkbox as CheckBoxMUI,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";

const CheckBox = ({ value, ...rest }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<CheckBoxMUI checked={value} {...rest} />} />
    </FormGroup>
  );
};

export default CheckBox;
