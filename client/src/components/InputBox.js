import React from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function InputBox(props) {
  return (
    <Autocomplete
      aria-label={props.label + 'input'}
      value={props.value}
      onChange={(event, newValue) => {
        props.setValue(newValue);
      }}
      inputValue={props.inputValue}
      onInputChange={(event, newInputValue) => {
        props.setInputValue(newInputValue);
      }}
      id={"airport-select" + props.label}
      sx={{ width: 300 }}
      options={props.options}
      autoHighlight
      aria-haspopup="true"
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{fontSize: 14}}
          {...props}
        >
          {option.name} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          sx={{fontSize: 18}}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
