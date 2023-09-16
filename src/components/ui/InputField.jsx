import React, { useRef, useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  Button,
  Paper,
  InputAdornment,
} from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useTodos } from "../../store/store";

const InputField = () => {
  const addTodo = useTodos((state) => state.addTodo);
  const removeSelected = useTodos((state) => state.removeSelected);
  const [inputValue, setInputValue] = useState(""); //он мне здесь нужен только для очистки формы
  const input = useRef();
  // console.log(input.current);
  const handleAdd = () => {
    addTodo(input.current.value);
    setInputValue("");
  };
  console.log(inputValue);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAdd(input);
      handleAdd();
    }
  };

  const handleRemoveSelected = () => {
    removeSelected();
  };

  return (
    // <Container maxWidth="md">
    <Box component="main">
      <FormControl fullWidth sx={{ margin: 1, mt: 2 }}>
        <Paper sx={{ p: "0px" }} elevation={4}>
          <TextField
            id="outlined-controlled"
            placeholder="Write the task in this field"
            value={inputValue}
            type="search"
            fullWidth
            inputRef={input}
            onKeyPress={handleKeyPress}
            onChange={({ target }) => setInputValue(target.value)}
            InputProps={{
              startAdornment: (
                <ManageSearchIcon
                  sx={{ m: "10px" }}
                  fontSize="large"
                  variant="contained"
                  color="error"
                  type="submit"
                ></ManageSearchIcon>
              ),
              endAdornment: (
                <>
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAdd(input)}
                    >
                      Add Todo
                    </Button>
                  </InputAdornment>
                  <InputAdornment position="end">
                    <Box
                      sx={{
                        boxShadow: 8,
                        bgcolor: "#000000",
                        borderRadius: 3,
                        textAlign: "center",
                        fontSize: "0.875rem",
                        fontWeight: "700",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        type="submit"
                        onClick={handleRemoveSelected}
                      >
                        Remove selected
                        <PlaylistRemoveIcon></PlaylistRemoveIcon>
                      </Button>
                    </Box>
                  </InputAdornment>
                </>
              ),
            }}
          />
        </Paper>
      </FormControl>
    </Box>
    // {/* // </Container> */}
  );
};

export default InputField;
