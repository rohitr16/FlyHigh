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
      id={"airport-select" + props.label}
      sx={{ width: 300 }}
      options={props.options}
      autoComplete
      autoHighlight
      aria-haspopup="true"
      getOptionLabel={(option) => option.city}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{fontSize: 14}}
          {...props}
          key={option.code}
        >
          {option.city} ({option.name})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
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
