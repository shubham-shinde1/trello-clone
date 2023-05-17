import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import style from './OptionList.module.css';
import CloseIcon from '@mui/icons-material/Close';

export default function OptionList({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Box sx={{ width: '20rem', maxWidth: '100%', maxHeight: '45rem', bgcolor: 'lightGrey', borderRadius: '4px'}}>
      <nav className={style.ListName}>        
        <span className={style.ListHeading}>List Actions </span>
        <span className={style.ListCloseIcon} onClick={handleClose}>
          <CloseIcon/>
        </span>
      </nav>
      <Divider />
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Add card" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Copy list" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Move list" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Watch" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <p>Automation</p>
        <List>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Add card" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Copy list" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Move list" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Watch" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider/>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Move card" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Archive card" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider/>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton className={style.optionPadding}>
              <ListItemText primary="Archive this list" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
