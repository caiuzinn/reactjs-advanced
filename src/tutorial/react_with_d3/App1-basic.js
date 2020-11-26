import React, { useRef, useEffect, useState } from 'react';
import { select, svg } from 'd3';

// basics
const App = () => {
    const [data, setData] = useState([25, 30, 45, 60, 20])
    const svgRef = useRef();

    useEffect(() => {
        console.log(svgRef);
        const svg = select(svgRef.current);

        svg.selectAll("circle")
            .data(data)
        //     .join(
        //         enter => 
        //             enter
        //                 .append("circle")
        //                 .attr('class', 'new')
                        
        //                 .attr('stroke', 'red'),
        //         // update => update.attr('class', 'update'),
                        
        //         // exit => exit.remove()
        // )
        .join('circle')
        .attr('cx', d => d * 2)
        .attr('cy', d => d * 2)
        .attr('r', d => d)
        .attr('stroke', 'red')
    }, [data]);

    return (
        <>
            <svg ref={svgRef}>
                
            </svg>
            <br />
            <button onClick={() => setData(data.map(value => value + 5))}>
                Update data
            </button>
            <button onClick={() => setData(data.filter(value => value > 35))}>
                    Filter data
            </button>
            </>
    );
};

export default App;