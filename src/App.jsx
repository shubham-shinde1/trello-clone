import Board from "./Component/List/Board/Board";
import Editable from "./Component/List/Editable/Editable";
import BoardAppBar from "./Component/Header/Header";
import "./App.css";
<<<<<<< HEAD
import Navbar from "./Component/Navbar/NavBar"
=======
import Discription from "./Component/discription/Discription";
import CardDetails from "./Component/discription/Discription";
>>>>>>> e1f8561984aa77da5549417adb7f2d6258662d0a

import AddList from "./Component/AddList/AddList";
const App = () => {
  return (
<<<<<<< HEAD
    <div className="app">
      <div className="app_navbar">
        <Navbar />
        <MenuAppBar />

        <AddList />
      </div>
=======
    <>
      {/* //  <Discription />
    // <div className="app">
    //   <div className="app_navbar"> */}
      {/* <BoardAppBar /> */}
      <CardDetails />
      {/* <Navbar /> */}
      {/* </div>
>>>>>>> e1f8561984aa77da5549417adb7f2d6258662d0a
      <div className="app_outer">
        <div className="app_boards">
          <Board />

          <Editable />
        </div>
      </div>
    </div> */}
    </>
  );
};

export default App;
