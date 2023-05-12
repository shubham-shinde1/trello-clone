import Board from "./Component/List/Board/Board";
import Editable from "./Component/List/Editable/Editable";
import MenuAppBar from "./Component/Header/Header";
import "./App.css";
import Navbar from "./Component/Navbar/NavBar"


const App = () => {
  return (
    <div className="app">
      <div className="app_navbar">
        <MenuAppBar />
        <Navbar />
      </div>
      <div className="app_outer">
        <div className="app_boards">
          <Board />

          <Editable />
        </div>
      </div>
    </div>
  );
};

export default App;
