// import React, { useState } from 'react';
// import data from './data';
// import List from './List';

//data tem os 5 aniversariantes


function App() {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
      setPeople([]);
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={handleClick}>clear all</button>
      </section>
    </main>
  );
}

// export default App;






















// function App2() {
//   const [people, setPeople] = useState(data);
//   return (
//     <main>
//       <section className='container'>
//         <h3>{people.length} birthdays today</h3>
//         <List people={people} />
//         <button onClick={() => setPeople([])}>clear all</button>
//       </section>
//     </main>
//   );
// }

// export default App2;
