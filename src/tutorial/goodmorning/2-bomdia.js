import React, { useState, useEffect } from 'react';

const GoodMorning2 = () => {
  const [value, setValue] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isCatch, setIsCatch] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('')
  

  const [goodMorning, setGoodMorning] = useState({
    bomDia: '',
  })
  

  const startGoodMorning = () => {
    setTimeout(() => {
      // setValue(value + 1) é assincrono ele acaba nao alterando varios 
      setIsStarted(true)
      
    }, 2000)
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGoodMorning({
      ...goodMorning, [name]: value }) //spread operator serve pra salvar os dados já que estavamos usando um objeto, se eu ficar só salvando o novo eu perco o resto

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goodMorning.bomDia) {
      const newGoodMorning = { ...goodMorning, id: new Date().getTime().toString() };
      setValue([...value, newGoodMorning]);
      setGoodMorning({bomDia: ''})
    }
  }

  const soletrando = (i) => {
    setTimeout(() => {
          // setValue(value + 1) é assincrono ele acaba nao alterando varios 
      setText(value[0].bomDia.slice(0, i + 1));
      setIndex(i + 1);
    }, 1500)
    
  }

  useEffect(() => {
    if (isStarted === true) {
      setTimeout(() => {
        setIsCatch(true)
      }, 2000)

    if (text.length !== value[0].bomDia.length) {
        soletrando(index);
    }
      console.log(`${index}`)
    return (() => soletrando(index));
      
    }
  }, [isStarted, index])

  if (!isStarted) {
    return (
      <>
        <form className='form' >
          <div className='form-control'>
            <label htmlFor='bomDia'>Olá ! </label>
            <input
              type='text'
              id='bomDia'
              name='bomDia'
              value={goodMorning.bomDia}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add</button>
        </form>
        <button className='btn' onClick={startGoodMorning}>start</button>
      </>
    );
  } 
  if (isStarted) {
    return (
    <>
          <section style={{ margin: '4rem 0' }}>
            <div type='text'>
      {!isCatch ? <MapValue value={value} /> : <h1 style={{fontSize: '150px'}}>{ text }</h1>}
            </div>
          </section>
    </>
  );
  }
  
};

const MapValue = (props) => {
  const goodMorning = props.value;


  return goodMorning.map((props) => {
      const { id, bomDia } = props;
      return <h1 key={id}>{bomDia}</h1>
  })
}

export default GoodMorning2;
