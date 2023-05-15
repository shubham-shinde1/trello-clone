import React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  TextField,
} from "@mui/material";
import {
  StarBorderOutlined,
  StarOutlined,
  MoreVert,
  DashboardOutlined,
  TableChartOutlined,
  AppsOutlined,
  FilterListOutlined,
  NotificationsOutlined,
  PersonOutlined,
  ArrowDropDown,
  ShareOutlined,
} from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";

const StyledIconButton = styled(IconButton)`
  color: white;
`;

const StyledAppBar = styled(AppBar)`
  background-color: rgba(2, 106, 167, 0.8);
  backdrop-filter: blur(10px);
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoardAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [editTitle, setEditTitle] = React.useState(false);
  const [title, setTitle] = React.useState("Board Title");
  const inputRef = React.useRef();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTitleClick = () => {
    setEditTitle(true);
  };

  const handleTitleBlur = () => {
    setEditTitle(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTitleKeyPress = (event) => {
    if (event.key === "Enter") {
      setEditTitle(false);
      inputRef.current.blur();
    }
  };

  return (
    <StyledAppBar position="static" elevation={0}>
      <StyledToolbar>
        <StyledIconButton edge="start" color="inherit" aria-label="menu">
          <DashboardOutlined />
        </StyledIconButton>
        {editTitle ? (
          <TextField
            inputRef={inputRef}
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            onKeyPress={handleTitleKeyPress}
            autoFocus
            fullWidth
          />
        ) : (
          <Typography variant="h6" onClick={handleTitleClick}>
            {title}
          </Typography>

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
                <AccountCircle />
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
                <MenuItem onClick={handleClose}>Umang Sharma</MenuItem>
                <MenuItem onClick={handleClose}>Shubham Shinde</MenuItem>
                <MenuItem onClick={handleClose}>Vijay Yagik</MenuItem>
                <MenuItem onClick={handleClose}>Suman Kumar Sharma</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>

        )}
        <StyledIconButton color="inherit">
          <StarBorderOutlined />
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <ArrowDropDown />
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <AppsOutlined />
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <TableChartOutlined />
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <FilterListOutlined />
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsOutlined />
          </Badge>
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <PersonOutlined />
        </StyledIconButton>
        <StyledIconButton color="inherit" onClick={handleClick}>
          <MoreVert />
        </StyledIconButton>
        <StyledIconButton color="inherit">
          <ShareOutlined />
        </StyledIconButton>
        <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Power-Ups</MenuItem>
          <MenuItem onClick={handleClose}>Automation</MenuItem>
          <MenuItem onClick={handleClose}>Filter</MenuItem>
          <MenuItem onClick={handleClose}>Profile and Visibility</MenuItem>
          <MenuItem onClick={handleClose}>Board Style</MenuItem>
        </Menu>
      </StyledToolbar>
    </StyledAppBar>

  );
};

export default BoardAppBar;
