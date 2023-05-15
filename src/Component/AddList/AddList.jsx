import { useState, useEffect } from "react";
import styles from "./AddList.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { nanoid } from "nanoid";

export default function AddList() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const savedListItems = localStorage.getItem("listItems");
    if (savedListItems) {
      setListItems(JSON.parse(savedListItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const handleAddList = () => {
    if (newItem.trim() !== "") {
      setListItems([
        ...listItems,
        { id: nanoid(), name: newItem, isDeleted: false },
      ]);
      setIsClicked(true);
      setNewItem(""); // clear input after adding item
    }
  };

  const handleDeleteItem = (id) => {
    const updatedListItems = listItems.map((item) =>
      item.id === id ? { ...item, isDeleted: true } : item
    );
    setListItems(updatedListItems);
  };

  const handleUndoDelete = (id) => {
    const updatedListItems = listItems.map((item) =>
      item.id === id ? { ...item, isDeleted: false } : item
    );
    setListItems(updatedListItems);
  };

  const handleClearList = () => {
    setListItems([]);
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
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <div className={styles.innerDiv}>
            <Button variant="contained" onClick={handleAddList}>
              Add List
            </Button>
            <CloseIcon onClick={() => setIsVisible(true)} />
          </div>
        </div>
      )}
      <ul>
        {listItems.map((item) => {
          if (!item.isDeleted) {
            return (
              <li key={item.id}>
                {item.name}{" "}
                <span onClick={() => handleDeleteItem(item.id)}></span>
              </li>
            );
          } else {
            return (
              <li key={item.id} className={styles.deletedItem}>
                {item.name}
                <span onClick={() => handleUndoDelete(item.id)}></span>
              </li>
            );
          }
        })}
      </ul>
      <div className={styles.btnWrapper} onClick={handleClearList}>
        <span>Clear list</span>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import styles from "./AddList.module.css";
// import AddIcon from "@mui/icons-material/Add";
// import { Button } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { nanoid } from "nanoid";

// export default function AddList() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isClicked, setIsClicked] = useState(false);
//   const [listItems, setListItems] = useState([]);
//   const [newItem, setNewItem] = useState("");

//   const handleAddList = () => {
//     if (newItem.trim() !== "") {
//       setListItems([
//         ...listItems,
//         { id: nanoid(), name: newItem, isDeleted: false },
//       ]);
//       setIsClicked(true);
//       setNewItem(""); // clear input after adding item
//     }
//   };

//   const handleDeleteItem = (id) => {
//     const updatedListItems = listItems.map((item) =>
//       item.id === id ? { ...item, isDeleted: true } : item
//     );
//     setListItems(updatedListItems);
//   };

//   const handleUndoDelete = (id) => {
//     const updatedListItems = listItems.map((item) =>
//       item.id === id ? { ...item, isDeleted: false } : item
//     );
//     setListItems(updatedListItems);
//   };

//   const handleClearList = () => {
//     setListItems([]);
//   };

//   return (
//     <div
//       className={styles.container}
//       style={{ backgroundColor: isClicked ? "white" : "" }}
//     >
//       {isVisible ? (
//         <div className={styles.btnWrapper} onClick={() => setIsVisible(false)}>
//           <AddIcon /> <span> Add another list</span>
//         </div>
//       ) : (
//         <div className={styles.inputWrapper}>
//           <input
//             type="text"
//             value={newItem}
//             onChange={(e) => setNewItem(e.target.value)}
//           />
//           <div className={styles.innerDiv}>
//             <Button variant="contained" onClick={handleAddList}>
//               Add List
//             </Button>
//             <CloseIcon onClick={() => setIsVisible(true)} />
//           </div>
//         </div>
//       )}
//       <ul>
//         {listItems.map((item) => {
//           if (!item.isDeleted) {
//             return (
//               <li key={item.id}>
//                 {item.name}{" "}
//                 <span onClick={() => handleDeleteItem(item.id)}></span>
//               </li>
//             );
//           } else {
//             return (
//               <li key={item.id} className={styles.deletedItem}>
//                 {item.name}
//                 <span onClick={() => handleUndoDelete(item.id)}></span>
//               </li>
//             );
//           }
//         })}
//       </ul>
//       <div className={styles.btnWrapper} onClick={handleClearList}>
//         <span>Clear list</span>
//       </div>
//     </div>
//   );
// }
