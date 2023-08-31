import React from 'react';
import { useState } from 'react';

const date = new Date();

const today =
  date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

const dummy = {
  title: 'title',
  user: 'sunpa',
  date: today,
  content: '어쩌구',
  img: 'https://file.notion.so/f/s/ebf37348-eb25-4f20-b8ea-148d07ed8f93/image.png?id=7e526f8e-f8ff-4ef4-8ff2-d9f718841c0b&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1693533600000&signature=rFOiNKRuZ6t8XnrXXK8C2UwY3Ob7CseyEUp3x9Wy-o0&downloadName=image.png',
};

function Item() {
  const { title, user, date, content, img } = dummy;
  //   const [item, setItem] = useState(0);

  return (
    <>
      <div className='container'>
        <img src={img}></img>
        <div>
          <ul>
            <li>{title}</li>
            <li>{user}</li>
            <li>{date}</li>
            <li>{content}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Item;
