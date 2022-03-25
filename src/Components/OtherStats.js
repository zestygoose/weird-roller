import React, { useState, useEffect } from 'react'
import { ability_modifiers } from '../Helpers/Tables';

const OtherStats = (props) => {
    const { stamina, personality } = props;

    const [grit, setGrit] = useState();
    const [hit, setHit] = useState();
    const [hitResult, setHitResult] = useState();
    const [gritResult, setGritResult] = useState();
    const [dead, setDead] = useState();

    useEffect(() => {
        if (stamina && personality) {
            setGritResult(`(${stamina} + ${personality}) / 2`)
            setGrit(Math.floor((stamina + personality) / 2))

            var roll = Math.floor(Math.random() * 4 + 1);
            var ability = ability_modifiers.find(m => m.stat == stamina);

            setHitResult(ability.mod != 0 ? `${roll} ${ability.modtxt}` : roll);

            var totalHit = roll + ability.mod;
            setHit(totalHit);

            setDead(totalHit < 1 ? 'DEAD' : '');
        }

    }, [stamina, personality])

    return (
        <div className='bg-slate-600 text-white rounded-xl m-2 w-full md:w-1/5'>
            <h1 className='p-2 text-center'>Other stats</h1>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td className='p-2 font-semibold text-lg'>
                        <div>Hit Points</div>
                        <div className='text-xs font-thin text-gray-300'>
                            {hitResult}
                        </div>
                    </td>
                    <td className='p-2 align-top'>
                        {hit} {dead}
                    </td>
                </tr>
                <tr>
                    <td className='p-2 font-semibold text-lg'>
                        <div>Grit</div>
                        <div className='text-xs font-thin text-gray-300'>
                            {gritResult}
                        </div>
                    </td>
                    <td className='p-2 align-top'>
                        {grit}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OtherStats