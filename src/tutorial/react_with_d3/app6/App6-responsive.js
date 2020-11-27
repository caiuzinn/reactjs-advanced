import React, { useRef, useEffect, useState } from 'react';

import BarChart from './BarChart';

// Axes and Scales

const App = () => {
    const [data, setData] = useState([25, 30, 45, 60, 20, 75])
    
    return (
        <>
            <BarChart data={data}/>
            <button style={styleButton} onClick={() => setData(data.map(value => value + 5))}>
                Update data
            </button>
            <br />
            <button style={styleButton} onClick={() => setData(data.filter(value => value > 35))}>
                Filter data
            </button>
            <br />
            <button style={styleButton} onClick={() => setData([...data, Math.round(Math.random() * 100)])}>
                Add data
            </button>
            </>
    );
};


export default App;



const styleButton = {
    width: '100px',
    border: '1px solid black',
    margin: '0 auto 5px'
}