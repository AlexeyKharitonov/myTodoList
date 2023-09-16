import AppBar from "./components/ui/AppBar";
import React, { useRef } from "react";
import InputField from "./components/ui/InputField";
import { Box, Container, FormControl, Paper } from "@mui/material";
import { useTodos } from "./store/store";
import ListTodos from "./components/ui/ListTodos";
import { ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const todos = useTodos().fetchTodos();
  console.log(todos);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <AppBar toggleTheme={toggleTheme} theme={theme} />
        <Container maxWidth="md">
          <FormControl fullWidth sx={{ margin: 1 }}>
            <Paper sx={{ p: "0px", overflow: "hidden" }} elevation={4}>
              <Box sx={{ height: "100vh", bgcolor: "#eee", py: 4 }}>
                <InputField />
                <ListTodos todos={todos} />
              </Box>
            </Paper>
          </FormControl>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
