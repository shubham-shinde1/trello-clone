import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, TextField } from "@mui/material";

const StyledAppBar = styled(AppBar)`
  background-color: #999;
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoardAppBar = () => {
  const [editTitle, setEditTitle] = React.useState(false);
  const [title, setTitle] = React.useState("⭐ Board Title");
  const inputRef = React.useRef();

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
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default BoardAppBar;
