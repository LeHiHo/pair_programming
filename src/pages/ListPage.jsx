import React, { useState, useEffect, useContext, useId } from "react";
import { Link } from "react-router-dom";
import { UserInfoContext } from "../Contexts/UserInfoContext";
import Item from "../components/Item.js";
import { querySnapshot } from "../firebase.js";
import { auth } from "../components/Login";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function ListPage() {
  const [usersInfo, setUsersInfo] = useState([]);

  const [uid, setUid] = useState(auth.currentUser);

  useEffect(() => {
    querySnapshot.forEach((el) => {
      setUsersInfo((prev) => [...prev, { ...el.data() }]);
    });
    return () => {
      setUsersInfo([]);
    };
  }, []);

  async function emailLogout() {
    await auth.signOut();setUid(null);
  }

  return (
    <>
      <h1>오늘 할 일</h1>
      <Link to="/ListWrite">아이템 추가</Link>
      {/* {onAuthStateChanged(auth, (user) => {
        if (user) {
          return <Link to="/Login">로그인</Link>;
        }
        return <button onClick={emailLogout}>로그아웃</button>;
      })} */}
      {uid === null ? <Link to="/Login">로그인</Link> : <button onClick={emailLogout}>로그아웃</button>}
      {usersInfo.map((userInfo, index) => (
        <Item key={index} userInfo={userInfo} />
      ))}
    </>
  );
}
