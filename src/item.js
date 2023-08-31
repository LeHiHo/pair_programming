import React from 'react';
import { useState } from 'react';
import './item.css';

function Item({ dummy, name }) {
  const { title, date, content, img } = dummy;
  //   const [item, setItem] = useState(0);

  return (
    <>
      <div className='container'>
        <img className='img' src={img} alt='' />
        <div>
          <ul className='info'>
            <li className='info_title'>{title}</li>
            <li className='info_user'>{name}</li>
            <li className='info_date'>{date}</li>
            <li className='info_content'>{content}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Item;
