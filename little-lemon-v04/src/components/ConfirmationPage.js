import React from 'react';
import { useParams } from 'react-router-dom';
import "../css/confirm.css";

const ConfirmationPage = () => {
  const { result } = useParams();

  return (
    <div className='confirm-box'>
      <h1 className='confirm-title'>Order Confirmed!</h1>
      <div className='confirm-container'>
        <h2 className='confirm-text'>{result}</h2>
      </div>
    </div>
  );
};

export default ConfirmationPage;
