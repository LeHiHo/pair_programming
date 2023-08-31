import React from 'react';
import { useParams } from 'react-router';

export default function () {
    const {id} = useParams();

    return (
        <>  
            디테일페이지
        </>
    );
}
