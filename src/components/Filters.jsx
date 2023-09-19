import React, { useState } from 'react';
import "./css/Filters.css";

export default function Filters({ RangeValue, setRangeValue, setminToMaxPrice, setmaxtoMinPrice, setAlphab }) {
    const [isCheckedMin, setIsCheckedMin] = useState(false);
    const [isCheckedMax, setIsCheckedMax] = useState(false);

    const handleChange = (e) => {
        setRangeValue(e.target.value);
    }

    const handleCheck = (type) => {
        setIsCheckedMin(type === 'min');
        setIsCheckedMax(type === 'max');
        setminToMaxPrice(type === 'min');
        setmaxtoMinPrice(type === 'max');
    }

    const handleAlphabetic = (e) => {
        setAlphab(e.target.checked);
    }

    return (
        <div className='filter__container'>
            <div className='filter__header'>
                <label className='filter__label' htmlFor="filtrado">
                    Filtrar
                </label>
            </div>

            <form className="slider-container">
                <label htmlFor="rango">Precio Máximo</label>
                <input
                    onChange={handleChange}
                    value={RangeValue}
                    type="range"
                    id="rango"
                    name="rango"
                    min="0"
                    max="1000"
                    step="1"
                    className="slider"
                />
                <output htmlFor="rango" id="valor" className="slider-value">
                    {RangeValue}
                </output>
            </form>

            <div className='filterscontainer'>
                <div className='div'>
                    <label htmlFor="minPrice">Menor a Mayor</label>
                    <input type="checkbox" id='minprice' checked={isCheckedMin} onChange={() => handleCheck('min')} />
                </div>
                <div className='div'>
                    <label htmlFor="maxprice">Mayor a Menor</label>
                    <input type="checkbox" id='maxprice' checked={isCheckedMax} onChange={() => handleCheck('max')} />
                </div>
                <div className='div'>
                    <label htmlFor="alphab">Alfabeticamente</label>
                    <input type="checkbox" id='alphab' onChange={handleAlphabetic} />
                </div>
            </div>
        </div>
    )
}