import React, { createContext, useState } from "react";

export const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
  const [usersInfo, setUsersInfo] = useState([
    {
      id: 1,
      title: "제목1",
      user: "작성자1",
      date: "오늘날짜",
      content: "아무내용",
      img: "img-1.jpg",
    },
    {
      id: 2,
      title: "제목2",
      user: "작성자2",
      date: "오늘날짜",
      content: "아무내용",
      img: "img-2.jpg",
    },
    {
      id: 3,
      title: "제목3",
      user: "작성자3",
      date: "어제날짜",
      content: "아무내용3333333333333333",
      img: "img-3.jpg",
    },
  ]);
  const handleListWrite = ({ userInfo }) => {
    setUsersInfo((prev) =>
      [...prev].push({
        id: 3,
        title: userInfo.title,
        user: "작성자3",
        date: "어제날짜",
        content: userInfo.content,
        img: "img-3.jpg",
      })
    );
  };

  return <UserInfoContext.Provider value={{ usersInfo, handleListWrite }}>{children}</UserInfoContext.Provider>;
}
