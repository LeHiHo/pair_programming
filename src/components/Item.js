import React from 'react';
import './Item.css';

function Item({ userInfo }) {
  const { title, date, content, img, user } = userInfo;

  return (
    <>
      <div className='container'>
        <img className='img' src={img} alt='' />
        <div>
          <ul className='info'>
            <li className='info_title'>{title}</li>
            <li className='info_user'>{user}</li>
            <li className='info_date'>{date}</li>
            <li className='info_content'>{content}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Item;
