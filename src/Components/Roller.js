import React, { useState } from 'react'
import Ability from './Ability'
import Luck from './Luck';
import Occupation from './Occupation';
import OtherStats from './OtherStats'

const Roller = () => {
    const [roll, setRoll] = useState(false);
    const [sta, setStamina] = useState();
    const [per, setPersonality] = useState();
    const [luk, setLuck] = useState();

    const getStamina = (sta) => {
        setStamina(sta);
    }

    const getPersonality = (per) => {
        setPersonality(per);
    }

    const getLuck = (luk) => {
        setLuck(luk);
    }

    return (
        <>
            <div className=''>
                <div className='flex flex-wrap'>
                    <Ability triggerRoll={roll} getSta={getStamina} getPer={getPersonality} getLuk={getLuck}></Ability>
                    <OtherStats stamina={sta} personality={per}></OtherStats>
                    <Luck luck={luk}></Luck>
                    <Occupation triggerRoll={roll}></Occupation>
                </div>

                <div className='p-2'>
                    <input
                        className='rounded-lg bg-blue-600 text-white text-md p-2 w-32 cursor-pointer hover:bg-blue-500'
                        type='button'
                        value='Roll'
                        onClick={() => { setRoll([]) }}>
                    </input>
                </div>
            </div>



        </>
    )
}

export default Roller