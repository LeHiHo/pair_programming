import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserInfoContext } from "../Contexts/UserInfoContext";
import Item from "../components/Item.js";

export default function ListPage() {
  const { usersInfo } = useContext(UserInfoContext);

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
