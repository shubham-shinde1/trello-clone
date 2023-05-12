import { useState } from "react";
import styles from "./AddList.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function AddList() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [listItems, setListItems] = useState([]);

  const handleAddList = () => {
    setIsClicked(true);
    setListItems([...listItems, "New List Item"]);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: isClicked ? "white" : "" }}
    >
      {isVisible ? (
        <div className={styles.btnWrapper} onClick={() => setIsVisible(false)}>
          <AddIcon /> <span> Add another list</span>
        </div>
      ) : (
        <div className={styles.inputWrapper}>
          <input type="text" />
          <div className={styles.innerDiv}>
            <Button variant="contained" onClick={handleAddList}>
              Add List
            </Button>
            <CloseIcon onClick={() => setIsVisible(true)} />
          </div>
        </div>
      )}
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
