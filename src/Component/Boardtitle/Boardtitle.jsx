import React from "react";
import {
    Typography,
    TextField,
} from "@mui/material";


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
        <>
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
                    <Typography variant="h5" onClick={handleTitleClick}>
                       <strong> {title} </strong>
                    </Typography>
                )}
           </> 
    );
};

export default BoardAppBar;
