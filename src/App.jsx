// import Board from "./Component/List/Board/Board";
// import Editable from "./Component/List/Editable/Editable";
// import BoardAppBar from "./Component/Header/Header";
// import "./App.css";
// <<<<<<< HEAD
// import Navbar from "./Component/Navbar/NavBar"
// =======
// import Discription from "./Component/discription/Discription";
// import CardDetails from "./Component/discription/Discription";
// >>>>>>> e1f8561984aa77da5549417adb7f2d6258662d0a

// import AddList from "./Component/AddList/AddList";
// const App = () => {
//   return (
// <<<<<<< HEAD
//     <div className="app">
//       <div className="app_navbar">
//         <Navbar />
//         <MenuAppBar />

//         <AddList />
//       </div>
// =======
//     <>
//       {/* //  <Discription />
//     // <div className="app">
//     //   <div className="app_navbar"> */}
//       {/* <BoardAppBar /> */}
//       <CardDetails />
//       {/* <Navbar /> */}
//       {/* </div>
// >>>>>>> e1f8561984aa77da5549417adb7f2d6258662d0a
//       <div className="app_outer">
//         <div className="app_boards">
//           <Board />

//           <Editable />
//         </div>
//       </div>
//     </div> */}
//     </>
//   );
// };

// export default App;
// import Board from "./Component/List/Board/Board";
// import Editable from "./Component/List/Editable/Editable";
// // import BoardAppBar from "./Component/Header/Header";
// import AddList from "./Component/AddList/AddList";
// import "./App.css";
// import Navbar from "./Component/Navbar/NavBar"

// // import AddList from "./Component/AddList/AddList";
// const App = () => {
//   return (
//     <div className="app">
//       <div className="app_navbar">
//         <Navbar />
//         {/* <MenuAppBar /> */}

//         <AddList />
//       </div>
//       <div className="app_outer">
//         <div className="app_boards">
//           <Board />

//           <Editable />
//         </div>
//       </div>
//     </div> 
  
//   );
// };

// export default App;





import Board from "./Component/List/Board/Board";
import Editable from "./Component/List/Editable/Editable";
import BoardAppBar from "./Component/Header/BoardAppBar";
import "./App.css";

import { useState, useEffect } from "react";

const App = () => {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  const addboardHandler = (name) => {
    const tempBoards = [...boards];
    tempBoards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoards);
  };

  const removeBoard = (id) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(index, 1);
    setBoards(tempBoards);
  };

  const addCardHandler = (id, title) => {
    const index = boards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,

      date: "",
    });
    setBoards(tempBoards);
  };

  const removeCard = (bid, cid) => {
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);

  return (
    <div className="app">
      <div className="app_navbar">
        <BoardAppBar />
      </div>

      <div className="app_outer">
        <div className="app_boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
            />
          ))}

          <div className="app_boards_board">
            <Editable
              displayClass="app_boards_add-board"
              editClass="app_boards_add-board_edit"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;





// // import Board from "./Component/List/Board/Board";
// // import Editable from "./Component/List/Editable/Editable";
// // import BoardAppBar from "./Component/Header/Header";
// // import "./App.css";

// // import { useState ,useEffect} from "react";

// // import Discription from "./Component/discription/Discription";
// // import CardDetails from "./Component/discription/Discription";


// // // import Navbar from "./Component/navBar/NavBar";
// // const App = () => {
// //   const [boards, setBoards] = useState(
// //     JSON.parse(localStorage.getItem("prac-kanban")) || []
// //   );


// //  const addboardHandler = (name) => {
// //     const tempBoards = [...boards];
// //     tempBoards.push({
// //       id: Date.now() + Math.random() * 2,
// //       title: name,
// //       cards: [],
// //     });
// //     setBoards(tempBoards);
// //   };

 
// //   const removeBoard = (id) => {
// //     const index = boards.findIndex((item) => item.id === id);
// //     if (index < 0) return;

// //     const tempBoards = [...boards];
// //     tempBoards.splice(index, 1);
// //     setBoards(tempBoards);
// //   };

// //   const addCardHandler = (id, title) => {
// //     const index = boards.findIndex((item) => item.id === id);
// //     if (index < 0) return;

// //     const tempBoards = [...boards];
// //     tempBoards[index].cards.push({
// //       id: Date.now() + Math.random() * 2,
// //       title,
   
// //       date: "",
 
// //     });
// //     setBoards(tempBoards);
// //   };

// //   const removeCard = (bid, cid) => {
// //     const index = boards.findIndex((item) => item.id === bid);
// //     if (index < 0) return;

// //     const tempBoards = [...boards];
// //     const cards = tempBoards[index].cards;

// //     const cardIndex = cards.findIndex((item) => item.id === cid);
// //     if (cardIndex < 0) return;

// //     cards.splice(cardIndex, 1);
// //     setBoards(tempBoards);
// //   };

// //   useEffect(() => {
// //     localStorage.setItem("prac-kanban", JSON.stringify(boards));
// //   }, [boards]);

// //   return(
    
// //     <div className="app">
    
// //       <div className="app_navbar">
// //         <MenuAppBar />
// //         {/* <Navbar /> */}
// //       </div>

//     <>
//       {/* //  <Discription />
//     // <div className="app">
//     //   <div className="app_navbar"> */}
//       {/* <BoardAppBar /> */}
//       {/* <CardDetails /> */}
//       {/* <Navbar /> */}
//       {/* {/* </div> */}

//       {/* <div className="app_outer">
//         <div className="app_boards">

        // {boards.map((item) => (
        //     <Board
        //       key={item.id}
        //       board={item}
        //       addCard={addCardHandler}
        //       removeBoard={() => removeBoard(item.id)}
        //       removeCard={removeCard}
        //     />
        //   ))}


//           <div className="app_boards_board">
//           <Editable
//               displayClass="app_boards_add-board"
//               editClass="app_boards_add-board_edit"
//               placeholder="Enter Board Name"
//               text="Add Board"
//               buttonText="Add Board"
//               onSubmit={addboardHandler}
//             />
//           </div>
//         </div>
//       </div>
//     </div> 
//     </>
//   );
// };

// export default App; */}