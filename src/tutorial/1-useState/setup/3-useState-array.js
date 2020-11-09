import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setpPeople] = React.useState(data)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id); 
    // setpPeople(newPeople)
    setpPeople((oldPeople) => {
        return oldPeople.filter((person) => person.id !== id); 
      })
  }

  return (
    <>
      {
        people.map((person) => {
          const { id, name } = person;

          return <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>;
        })
      }
      <button className='btn' onClick={() => setpPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
