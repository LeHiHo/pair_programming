import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserInfoContext } from "../Contexts/UserInfoContext";
import Item from "../components/Item.js";
import { querySnapshot } from "../firebase.js";

const arr2 = [];
export default function ListPage() {
  let a = 0;
  a++;
  const [usersInfo, setUsersInfo] = useState([]);
  console.log(a)
 
  useEffect(() => {
    console.log('useEffect 내부')
    arr2.push(2);
    querySnapshot.forEach((el) => {
      setUsersInfo((prev) => [...prev, { ...el.data() }]);
    });
  }, []);
  // console.log('useEffect 이후')

  return (
    <>
    {console.log('retun 안')}
      <h1>오늘 할 일</h1>
      <Link to="/ListWrite">아이템 추가</Link>
      {usersInfo.map((userInfo, index) => (
        <Item key={index} userInfo={userInfo} />
      ))}
    </>
  );
}
