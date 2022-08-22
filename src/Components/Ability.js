import React, { useState, useEffect } from 'react'
import { ability_modifiers } from '../Helpers/Tables';

const Ability = (props) => {
    const { triggerRoll, getSta, getPer, getLuk } = props;

    const [str, setStr] = useState();
    const [agi, setAgi] = useState();
    const [sta, setSta] = useState();
    const [per, setPer] = useState();
    const [int, setInt] = useState();
    const [luk, setLuk] = useState();

    const [strRolls, setStrRolls] = useState();
    const [agiRolls, setAgiRolls] = useState();
    const [staRolls, setStaRolls] = useState();
    const [perRolls, setPerRolls] = useState();
    const [intRolls, setIntRolls] = useState();
    const [lukRolls, setLukRolls] = useState();

    useEffect(() => {
        if (triggerRoll) {
            setStr(rollDice(3, setStrRolls))
            setAgi(rollDice(3, setAgiRolls))
            setInt(rollDice(3, setIntRolls))

            var t_luk = rollDice(3, setLukRolls);
            setLuk(t_luk, getLuk(t_luk))

            var t_sta = rollDice(3, setStaRolls);
            setSta(t_sta, getSta(t_sta))

            var t_per = rollDice(3, setPerRolls);
            setPer(t_per, getPer(t_per))
        }
    }, [triggerRoll])

    const rollDice = (d, setRolls) => {
        var sum = 0;
        var rolls = [];

        for (var i = 0; i < d; i++) {
            var roll = Math.floor(Math.random() * 6 + 1);
            rolls.push(roll);
            sum += roll;
        }

        setRolls(rolls);

        return sum;
    }

    const dispRolls = (rolls) => rolls?.join(' ')

    return (
        <div className='bg-slate-600 text-white rounded-xl m-2 w-full md:w-1/3 lg:w-1/4'>
            <h1 className='p-2 text-center'>Ability Stats</h1>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className='p-2 font-semibold text-lg'>
                            <div>Strength</div>
                            <div className='text-xs font-thin text-gray-300'>
                                {dispRolls(strRolls)}
                            </div>
                        </td>
                        <td className='p-2 columns-2 align-top'>
                            <div>
                                {str}
                            </div>
                            <div className=''>
                                {ability_modifiers.find(x => x.stat === str)?.modtxt}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 font-semibold text-lg'>
                            <div>Agility</div>
                            <div className='text-xs font-thin text-gray-300'>
                                {dispRolls(agiRolls)}
                            </div>
                        </td>
                        <td className='p-2 columns-2 align-top'>
                            <div>
                                {agi}
                            </div>
                            <div>
                                {ability_modifiers.find(x => x.stat === agi)?.modtxt}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 font-semibold text-lg'>
                            <div>Stamina</div>
                            <div className='text-xs font-thin text-gray-300'>
                                {dispRolls(staRolls)}
                            </div>
                        </td>
                        <td className='p-2 columns-2 align-top'>
                            <div>
                                {sta}
                            </div>
                            <div>
                                {ability_modifiers.find(x => x.stat === sta)?.modtxt}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 font-semibold text-lg'>
                            <div>Personality</div>
                            <div className='text-xs font-thin text-gray-300'>
                                {dispRolls(perRolls)}
                            </div>
                        </td>
                        <td className='p-2 columns-2 align-top'>
                            <div>
                                {per}
                            </div>
                            <div>
                                {ability_modifiers.find(x => x.stat === per)?.modtxt}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 font-semibold text-lg'>
                            <div>Intelligence</div>
                            <div className='text-xs font-thin text-gray-300'>
                                {dispRolls(intRolls)}
                            </div>
                        </td>
                        <td className='p-2 columns-2 align-top'>
                            <div>
                                {int}
                            </div>
                            <div>
                                {ability_modifiers.find(x => x.stat === int)?.modtxt}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-2 font-semibold text-lg'>
                            <div>Luck</div>
                            <div className='text-xs font-thin text-gray-300'>
                                {dispRolls(lukRolls)}
                            </div>
                        </td>
                        <td className='p-2 columns-2 align-top'>
                            <div>
                                {luk}
                            </div>
                            <div>
                                {ability_modifiers.find(x => x.stat === luk)?.modtxt}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Ability