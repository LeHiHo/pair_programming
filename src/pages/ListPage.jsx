import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserInfoContext } from "../Contexts/UserInfoContext";
import Item from "../components/Item.js";
import { imgUrl } from "../firebase.js";

export default function ListPage() {
  const [usersInfo, setUsersInfo] = useState([
    {
      id: 1,
      title: "제목1",
      user: "작성자1",
      date: "오늘날짜",
      content: "아무내용",
      img: imgUrl,
    },
    {
      id: 2,
      title: "제목2",
      user: "작성자2",
      date: "오늘날짜",
      content: "아무내용",
      img: imgUrl,
    },
    {
      id: 3,
      title: "제목3",
      user: "작성자3",
      date: "어제날짜",
      content: "아무내용3333333333333333",
      img: imgUrl,
    },
  ]);

  return (
    <>
      <h1>오늘 할 일</h1>
      <Link to="/ListWrite">아이템 추가</Link>
      {usersInfo.map((userInfo, index) => (
        <Item key={index} userInfo={userInfo} />
      ))}
    </>
  );
}
