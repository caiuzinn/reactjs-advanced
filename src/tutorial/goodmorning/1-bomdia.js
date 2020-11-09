import React, { useState, useEffect } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState('Bom dia')
  const [isStarted, setIsStarted] = useState(false)
  const [index, setIndex] = useState(0);

  const startGoodMorning = () => {
    setTimeout(() => {
      // setValue(value + 1) é assincrono ele acaba nao alterando varios 
      setIsStarted(true)
      
    }, 2000)
  }

  useEffect(() => {
    if (isStarted === true) {
      console.log(index)
      switch (index) {
        case 0:
          setTimeout(() => {
            // setValue(value + 1) é assincrono ele acaba nao alterando varios 
            setValue('Pessoal');
             setIndex(1);
          }, 2000)
         
          break;
        case 1:
          setTimeout(() => {
            // setValue(value + 1) é assincrono ele acaba nao alterando varios 
            setValue('Espero')
            setIndex(2);
          }, 2000)
          
          break;
        case 2:
          setTimeout(() => {
            // setValue(value + 1) é assincrono ele acaba nao alterando varios 
            setValue('que tenham')
            setIndex(3);
          }, 2000)
         
    
          break;
        case 3:
          setTimeout(() => {
            // setValue(value + 1) é assincrono ele acaba nao alterando varios 
            setValue('um ótimo')
            setIndex(4);
          }, 2000)
         
          break;
        case 4:
          setTimeout(() => {
            // setValue(value + 1) é assincrono ele acaba nao alterando varios 
            setValue('dia ! s2')
            setIndex(5);

          }, 2000)
          
          break;
        case 5:
          setTimeout(() => {
            // setValue(value + 1) é assincrono ele acaba nao alterando varios 
            setValue('sextou ')
            setIsStarted(false)
          }, 2000)
          break;
      };
    }
  })

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h1 style={{fontSize: '150px'}}>{value}</h1>
        <button className='btn' onClick={startGoodMorning}>start</button>
      </section>
    </>
  );
};

export default UseStateCounter;
