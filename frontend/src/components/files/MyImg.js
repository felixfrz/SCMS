import React from 'react';
import { useParams } from 'react-router-dom';


const MyImg = () => {

    const { path } = useParams();

  return (
    <div className='container text-center'>
        <img src={`/uploads/${path}`} alt='data-img' style={{height:500, width:500}} />      
    </div>
  )
}

export default MyImg
