import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./components/board/board.component";

class Game extends React.Component {
  render(){
    return (
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          {/* status */}
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);