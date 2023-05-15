// import React from "react";
import "./Card.css";

import EditIcon from "@mui/icons-material/Edit";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Chip from "../Chip/Chip";

function Card() {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_labels">
          <Chip text="Items" color="tomato" />
          {/* <Chip close text="Argent" color="tomato"/> */}
        </div>
        <EditIcon />
      </div>

      <div className="card_title">Lorem ipsum dolor sit amet.</div>

      <div className="card_footer">
        <p>
          {" "}
          <AccessTimeIcon /> 11 May 2023
        </p>
      </div>
    </div>
  );
}

export default Card;
