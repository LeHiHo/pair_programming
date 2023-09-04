import React, { useState } from "react";
import "./Item.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Item({ userInfo }) {
  const { title, date, content, img, user } = userInfo;
  const [isActive, setIsActive] = useState(false);
  const [heartCount, setHeartCount] = useState(0);

  const toggleHeart = () => {
    setIsActive(!isActive);
    setHeartCount(isActive ? heartCount - 1 : heartCount + 1);
  };

  return (
    <>
      <div className="container">
        <img className="img" src={`/img/${img}`} alt="" />
        <div>
          <ul className="info">
            <li className="info_title">
              {title}
              <div className="info_title__heart" onClick={toggleHeart}>
                {isActive ? <AiFillHeart /> : <AiOutlineHeart />}
                <span>{heartCount}</span>
              </div>
            </li>
            <li className="info_user">{user}</li>
            <li className="info_date">{date}</li>
            <li className="info_content">{content}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Item;
