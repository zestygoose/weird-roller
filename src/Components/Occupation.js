import React, { useState, useEffect } from 'react'
import { occupations } from '../Helpers/Tables';

const Occupation = (props) => {
    const { triggerRoll } = props;

    const [occupation, setOccupation] = useState();
    const [occRoll, setOccRoll] = useState();

    useEffect(() => {
        if (triggerRoll) {
            var roll = Math.floor(Math.random() * 100 + 1);
            setOccRoll(roll);
            setOccupation(occupations.find(o => o.roll === roll));
        }
    },[triggerRoll])

    return (
        <div className='bg-slate-600 text-white rounded-xl m-2 w-full md:w-1/3 lg:w-1/4'>
            <h1 className='p-2 text-center'>Occupation</h1>
            <div className='p-2'>
                <h2 className='font-semibold'>{occupation?.occupation}</h2>
                <p className='text-xs font-thin text-gray-300'>{occRoll}</p>
                <p className='font-light pt-3'>{occupation?.weapon}</p>
                <p className='font-light'>{occupation?.goods}</p>
            </div>
        </div>
    )
}

export default Occupation