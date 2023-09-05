import React from "react";
import { useParams } from "react-router";
import Memo from "../components/Memo";
import "./ListDetail.css";

export default function ListDetail() {
  const { id } = useParams();

  const data = {
    title: "제목1",
    user: "작성자1",
    date: "오늘날짜",
    content: "오늘은 2023년 9월 1일입니다. 날씨가 매우 좋네요. ",
    img: "",
  };
  const { title, user, date, content, img } = data;

  return (
    <div className="container">
      <div className="content">
        <h1>{title}</h1>
        <div>
          <p>{user}</p>
          <p>{date}</p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>

        <div>{content}</div>
      </div>
      <Memo />
    </div>
  );
}
