import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('oi');
    if (value > 1) {
      document.title = `New Messades(${value})`
    }
  }, [value]);

  useEffect(() => {
    console.log('ola')
  }, []);

  console.log('tchau')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Button
      </button>
    </>
  );
};

export default UseEffectBasics;
