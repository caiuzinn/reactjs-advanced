import React, { useRef, useEffect, useState } from 'react';

import { select, axisRight, axisBottom, scaleLinear, scaleBand, transition } from 'd3';

const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState(null);

    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(entry => {
                setDimensions(entry.contentRect)
            })
        })
        resizeObserver.observe(observeTarget);
        return () => {
            resizeObserver.unobserver(observeTarget)
        }
    }, [ref]);

    return dimensions;
}

const BarChart = ({data}) => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef)
    
    // will be called intially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current);

        if (!dimensions) return;

        // scale
        const xScale =
        scaleBand()
        .domain(data.map((value, index) => index))
        .range([0, dimensions.width]) //change
        .padding(0.5);
        
        const yScale =
        scaleLinear()
        .domain([0, 150]) // todo
        .range([dimensions.height, 0]); //change
        
        const colorScale =
        scaleLinear()
        .domain([75, 100 ,150])
        .range(['green', 'orange','red'])
        .clamp(true)
        
        const xAxis = axisBottom(xScale).ticks(data.length)
        
        svg
        .select('.x-axis')
        .style('transform', `translateY(${dimensions.height}px)`)
        .call(xAxis);
        
        
        const yAxis = axisRight(yScale);
        svg
        .select('.y-axis')
        .style('transform', `translateX(${dimensions.width}px)`)
        .call(yAxis);
        
        svg
        .selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('class', 'bar')
        .style('transform', 'scale(1, -1')
        .attr('x', (value, index) => xScale(index))
        .attr('y', -dimensions.height)
        .attr('width', xScale.bandwidth())
        .on("mouseenter", function (event, value) {
            // events have changed in d3 v6:
            // https://observablehq.com/@d3/d3v6-migration-guide#events
            const index = svg.selectAll(".bar").nodes().indexOf(this);
            svg
            .selectAll(".tooltip")
            .data([value])
            .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
            .attr("class", "tooltip")
            .text(value)
            .attr("x", xScale(index) + xScale.bandwidth() / 2)
            .attr("text-anchor", "middle")
            .transition()
            .attr("y", yScale(value) - 8)
            .attr("opacity", 1);
        })
        .on('mouseleave', () => svg.select('.tooltip').remove())
        .transition()
        .attr('fill', colorScale)
        .attr('height', value => dimensions.height - yScale(value))
        
        
    }, [data, dimensions]);
    return (
        <div ref={wrapperRef} style={{
                marginBottom: '2rem'}}>
            <svg ref={svgRef} style={{
                overflow: 'visible',
                width: '100%',
                display: 'block',
            }}>
               <g className='x-axis' />
               <g className='y-axis' />
            </svg>
        </div>
    )
}

export default BarChart;