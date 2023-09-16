import {
  Box,
  FormControl,
  IconButton,
  Input,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import React, { useState } from "react";
import CheckBox from "../common/CheckBox";
import { useTodos } from "../../store/store";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { displayDate } from "../../utils/displayDate";

const TodoItem = ({ title, created_time, completed, _id }) => {
  const [text, setText] = useState(title);
  const [edit, setEdit] = useState(false);
  console.log(edit);

  const handleChange = ({ target }) => {
    setText(target.value);
    // console.log(target.value);
  };
  const removeTodo = useTodos((state) => state.removeTodo);
  const editTodo = useTodos((state) => state.editTodo);
  const completeTodo = useTodos((state) => state.completeTodo);

  const handleRemove = (id) => {
    removeTodo(id);
  };

  const handleEdit = (id) => {
    editTodo(id, text);
    setEdit(false);
  };

  const handleComplete = (id) => {
    completeTodo(id);
  };

  return (
    <FormControl fullWidth sx={{ margin: 0, mt: 0 }}>
      <Box>
        <Paper sx={{ p: "0px" }} elevation={4}>
          <ListItem divider sx={{ m: "2px", bgcolor: "" }}>
            <CheckBox onChange={() => handleComplete(_id)} />
            <Input
              value={text}
              sx={{ flexGrow: 1 }}
              onChange={handleChange}
              disabled={!edit}
            />
            <Typography sx={{ mx: 3 }}>{displayDate(created_time)}</Typography>
            {!edit ? (
              //изначально edit был = false!!
              <IconButton
                style={{ float: "right" }}
                onClick={() => setEdit(true)}
              >
                <BorderColorIcon
                  color="info"
                  fontSize="large"
                ></BorderColorIcon>
              </IconButton>
            ) : (
              <IconButton
                style={{ float: "right" }}
                onClick={() => handleEdit(_id)}
              >
                <TaskAltIcon color="warning" fontSize="large"></TaskAltIcon>
              </IconButton>
            )}

            <IconButton sx={{ mx: 1 }} onClick={() => handleRemove(_id)}>
              <Box
                sx={{
                  boxShadow: 18,
                  bgcolor: "#DCDCDC",
                  borderRadius: 2,
                  textAlign: "center",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                }}
              >
                <RestoreFromTrashIcon
                  style={{ color: "red" }}
                  fontSize="large"
                ></RestoreFromTrashIcon>
              </Box>
            </IconButton>
          </ListItem>
        </Paper>
      </Box>
    </FormControl>
  );
};

export default TodoItem;
