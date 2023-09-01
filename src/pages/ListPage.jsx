import React, { useState } from 'react';
import Item from '../components/Item.js';

export default function ListPage() {
  const [usersInfo, setUsersInfo] = useState([
    {
      id: 1,
      title: '제목1',
      user: '작성자1',
      date: '오늘날짜',
      content: '아무내용',
      img: 'https://www.notion.so/9-f49289d79dad467391e0b9301828c580?pvs=4#7e526f8ef8ff4ef48ff2d9f718841c0b',
    },
    {
      id: 2,
      title: '제목2',
      user: '작성자2',
      date: '오늘날짜',
      content: '아무내용',
      img: 'https://www.notion.so/9-f49289d79dad467391e0b9301828c580?pvs=4#7e526f8ef8ff4ef48ff2d9f718841c0b',
    },
    {
      id: 3,
      title: '제목3',
      user: '작성자3',
      date: '어제날짜',
      content: '아무내용3333333333333333',
      img: 'https://www.notion.so/9-f49289d79dad467391e0b9301828c580?pvs=4#7e526f8ef8ff4ef48ff2d9f718841c0b',
    },
  ]);

  return (
    <>
      <h1>오늘 할 일</h1>
      <a>아이템 추가</a>
      {usersInfo.map((userInfo, index) => (
        <Item key={index} userInfo={userInfo} />
      ))}
    </>
  );
}
