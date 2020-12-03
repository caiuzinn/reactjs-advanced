import React, { useRef, useEffect, useState } from 'react';

import { select, arc, pie } from 'd3';

import  useResizeObserver  from './useResizeObserver';


const BarChart = ({ data }) => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef)
    
    // will be called intially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current);

        if (!dimensions) return;

        const arcGenerator = arc().innerRadius(75).outerRadius(150);

        const pieGenerator = pie();
        const instructions = pieGenerator(data);


        svg
            .selectAll('.slice')
            .data(instructions)
            .join('path')
            .attr('class', 'slice')
            .attr('fill', 'none')
            .style('transform', `translate(${dimensions.width / 2}px, ${dimensions.height}px)`)
            .attr('d', instruction => arcGenerator(instruction) )
        
    }, [data, dimensions]);

    return (
        <div ref={wrapperRef} style={{
                marginBottom: '2rem'}}>
            <svg ref={svgRef} style={{
                overflow: 'visible',
                width: '100%',
                display: 'block',
            }}>
              
            </svg>
        </div>
    )
}

export default BarChart;