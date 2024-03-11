import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
// import { Slider } from "@material-tailwind/react";
import "./indexterm.css";
// import rangebg from '../../assets/images/range.svg';
const MultiRangeSlider = ({ min, max, symbol }) => {
    // const [minVal,  setMinVal] = useState(min);
    const minVal =min;
    const [maxVal,
        setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(value => Math.round(((value - min) / (max - min)) * 100), [min, max]);

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    return (
        <div className="mt-10 container flex flex-col w-full">
            <div className="w-full flex flex-row justify-between">
                <div className="">Term</div>
                <div className="">{maxVal === 0 ? "0" :  Math.floor(maxVal*45/28)}month</div>
            </div>
            <div className="mt-4 slider">
                <div className="Tright">
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxVal}
                        onChange={event => {
                            const value = Math.max(Number(event.target.value), minVal);
                            setMaxVal(value);
                            maxValRef.current = value;
                        }}
                        className="thumbterm thumb--Tright" />
                </div>
                <div className="slider__track" />
                <div ref={range} className="Tslider__range" />
                
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

export default MultiRangeSlider;
