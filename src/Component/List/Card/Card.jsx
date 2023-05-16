import React, { useState } from "react";
import "./Card.css";

import EditIcon from "@mui/icons-material/Edit";

import Dropdown from "../Dropdown/Dropdown";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { id, title } = props.card;
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_top_labels"></div>
        <div
          className="card_top_more"
          onClick={(event) => {
            event.stopPropagation();
            setShowDropdown(true);
          }}
        >
          <EditIcon />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeCard(props.boardId, id)}>
                Delete Card
              </p>
            </Dropdown>
          )}
        </div>
      </div>

      <div className="card_title">{title}</div>
    </div>
  );
}

export default Card;
