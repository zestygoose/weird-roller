import React, {useState, useEffect} from 'react'
import { ability_modifiers, lucky_signs } from '../Helpers/Tables';

const Luck = (props) => {
    const {luck} = props;

    const [sign, setSign] = useState();
    const [signRoll, setSignRoll] = useState();

    useEffect(() => {
        // If lucky enough to have a sign at all
        if (luck && ability_modifiers.find(x => x.stat == luck).mod > 0) {
            var roll = Math.floor(Math.random() * 30 + 1);
            var abilityMod = ability_modifiers.find(a => a.stat == luck);

            setSignRoll(abilityMod.mod !=0 ? `${roll} ${abilityMod.modtxt}` : roll);
            var rollResult = roll + abilityMod.mod;

            if (rollResult < 1) { rollResult = 1}
            if (rollResult > 30) { rollResult = 30}

            setSign(lucky_signs.find(s => s.roll == rollResult));
        } 
        // Not lucky enough for a sign
        else if (luck) {
            setSignRoll(null)
            setSign(lucky_signs.find(s => s.roll == 0));
        }
    }, [luck])

    return (
        <div className='bg-slate-600 text-white rounded-xl m-2 w-full md:w-1/3 lg:w-1/4'>
            <h1 className='p-2 text-center'>Lucky Sign</h1>
            <div className='p-2'>
                <h2 className='font-semibold'>{sign?.name}</h2>
                <p className='text-xs font-thin text-gray-300'>{signRoll}</p>
                <p className='font-light pt-3'>{sign?.desc}</p>
            </div>
        </div>
    )
}

export default Luck