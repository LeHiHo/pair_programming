import React from "react";
import { Link } from "react-router-dom";

const ListWrite = () => {
  return (
    <div>
      <div className="listWrite__input">
        <label htmlFor=""></label>
        <input type="text" id="listWrite__title" />
        <button>작성</button>
      </div>
      <div className="listWrite__input">
        <div className="listWrite__content" contentEditable="true"></div>
      </div>
    </div>
  );
};

export default ListWrite;
