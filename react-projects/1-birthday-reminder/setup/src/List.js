import React, { useState } from 'react';

const List = (props) => {
  const { people } = props;

  const [peopleRemove, setPeopleRemove] = useState(people);

  const remove = (id) => {
    setPeopleRemove(peopleRemove.filter((person) => person.id !== id))
  }
  
  return (
    <>
      {peopleRemove.map((person) => {
        const { id, name, age, image } = person;

        return (
          <>
            <article key={id} className='person'>
              <img src={image} alt={name}/>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
            <button style={{width: '55px'}} onClick={() => remove(id)}>Clear</button>
          </>
        );
      })}
    </>
  );
};

export default List;

