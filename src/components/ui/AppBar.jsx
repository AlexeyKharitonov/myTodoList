import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Brightness3 } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function MenuAppBar({ toggleTheme, theme }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} component="header">
      <AppBar position="static" color="warning">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FormatListNumberedRtlIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <AddTaskIcon color="secondary" fontSize="large" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ textDecoration: "underline" }}
          >
            TodoApp Alexey
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switch color="secondary" onChange={toggleTheme} />}
              label={theme === "light" ? <LightModeIcon /> : <Brightness3 />}
            />
          </FormGroup>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
