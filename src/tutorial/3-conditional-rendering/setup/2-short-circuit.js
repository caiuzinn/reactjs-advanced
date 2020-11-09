import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world'; // se o texto for falso o retorno do valor será o segundo, porém se for verdadeiro retornara o primiro
  const secondValue = text && 'hello world'; //nesse caso o primeiro é retornado caso sejá falso, se for verdadeiro  o segundo é retornado 

  return (
    <>
      <h1>{ firstValue} </h1>
      <h1>Value: { secondValue} </h1>
    </>
  );
  
};

export default ShortCircuit;
