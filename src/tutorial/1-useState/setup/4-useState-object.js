import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    messsage: 'random message'
  });

  // const [name, setName] = useState('peter')
  // const [age, setAge] = useState(24)
  // const [messsage, setMesssage] = useState('random message')

  const changeMessage = () => {
    //setMesssage('Hello World')
    setPerson({ ...person, messsage: 'Hello world' })
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.messsage}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
