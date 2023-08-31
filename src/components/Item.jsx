import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
    const {userInfo} = props;
    
    return (
        <Link to={`/${userInfo.id}`}>  
            <div>{userInfo.title}</div>
            <div>{userInfo.user}</div>
            <div>{userInfo.date}</div>
            <div>{userInfo.content}</div>
            <img src={`${userInfo.img}`} alt="" />
        </Link>
    );
}
