import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(props) {
  const [btnStyle, setBtnStyle] = useState({ display: "none" });

  return (
    <div>
      <div
        className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
        onMouseOver={() => {
          setBtnStyle({ display: "" });
        }}
        onMouseOut={() => {
          setBtnStyle({ display: "none" });
        }}
      >
        <span
          className="me-auto"
          style={
            props.completed
              ? {
                  textDecoration: "line-through",
                }
              : null
          }
        >
          {props.title}
        </span>

        <button
          className="btn btn-success"
          style={btnStyle}
          onClick={() => props.onMark()}
        >
          <IconCheck />
        </button>
        <button
          className="btn btn-secondary"
          style={btnStyle}
          onClick={() => props.moveUp()}
        >
          <IconArrowUp />
        </button>
        <button
          className="btn btn-secondary"
          style={btnStyle}
          onClick={() => props.moveDown()}
        >
          <IconArrowDown />
        </button>
        <button
          className="btn btn-danger"
          style={btnStyle}
          onClick={() => props.onDelete()}
        >
          <IconTrash />
        </button>
      </div>
    </div>
  );
}
