import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refeContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refeContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refeContainer.current);
    refeContainer.current.focus();
  })

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refeContainer} />
          <button type='submit'>submit </button>
        </div>
        <div ref={divContainer}>Hello world</div>
      </form>
    </>
  );
};

export default UseRefBasics;
