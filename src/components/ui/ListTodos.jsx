import React from "react";
import TodoItem from "./TodoItem";
import { List, Typography } from "@mui/material";
import Skeleton from "../common/Skeleton";
import { useTodos } from "../../store/store";

const ListTodos = ({ todos }) => {
  const loading = useTodos((state) => state.loading);

  return (
    <List sx={{ pb: 0 }}>
      {loading && <Skeleton />}
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem {...todo} key={todo._id} />)
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            color: "gray",
            py: 5,
            textDecoration: "underline",
          }}
        >
          List Empty
        </Typography>
      )}
    </List>
  );
};

export default ListTodos;
