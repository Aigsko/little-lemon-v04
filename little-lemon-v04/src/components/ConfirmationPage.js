import React from 'react';
import { useParams } from 'react-router-dom';

const ConfirmationPage = () => {
  const { result } = useParams();

  return (
    <div>
      <h1>Order Confirmed!</h1>
      <h2>{result}</h2>
    </div>
  );
};

export default ConfirmationPage;
