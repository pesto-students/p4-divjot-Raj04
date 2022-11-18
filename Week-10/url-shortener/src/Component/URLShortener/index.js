import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useShortenURL } from "./hook";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles((theme) => ({
  url: {
    // color: "white",
    marginTop: "100px",
    "& .css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
      color: "#9996de",
      outlined: {
        "&:hover": {
          backgroundColor: "#35C37D",
        },
      },
    },
    "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
      color: "#edf0f2",
    },
  },
  textfield: {
    marginTop: "20px",
    "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
      color: "#edf0f2",
    },
  },
}));
export default function URLShortener() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [shortenURL, setShortenURL] = useState("");
  const inputURL = (e) => {
    setValue(e.target.value);
  };
  const ShortenURL = () => useShortenURL(value, setShortenURL);
  const copyShortenURL = () => {
    navigator.clipboard.writeText(shortenURL);
  };

  return (
    <>
      <div className={classes.url}>
        <TextField
          id="outlined-size-small"
          value={value}
          onChange={inputURL}
          size="small"
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <Button variant="text" type="submit" onClick={ShortenURL}>
          Click to Shorten
        </Button>
      </div>
      <div className={classes.textfield}>
        <TextField
          id="outlined-size-small"
          disabled={true}
          value={shortenURL}
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <ContentCopyIcon onClick={copyShortenURL} />
                </IconButton>
              </InputAdornment>
            ),
            style: { height: "100px", backgroundColor: "#a29cc9" },
          }}
        />
      </div>
    </>
  );
}
