import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Stats, { stat } from './Stats'
import PlayMode from './PlayMode'


const Character = ({ charas }) => {
    const [onPlaymode, setPlaymode] = useState(false)
    const id = useParams().id
    const chara = charas.find(c => c.id === Number(id))
    if (!chara){
        return(
            <div>
                <p>loading...</p>
            </div>
        )
    }

    const togglePlaymode = () => { setPlaymode(!onPlaymode) }

    const weapon = chara.equipment.weapon
    const armor = chara.equipment.armor
    
    return (
        <div>
            <h2>{chara.name}</h2>
            <h3>{chara.class}, level {chara.level}</h3>
            
            {
                onPlaymode
                ?<div>
                    <button onClick={togglePlaymode}>close</button>
                    <PlayMode chara={chara} />
                </div>
                : <div>
                    <p>HP: {chara.currentHitpoints}/{stat(chara.hitpoints, weapon.hitpoints, armor.hitpoints)}</p>
                    <Stats chara={chara} weapon={weapon} armor={armor} />
                    <p><b>Equipment</b></p>
                    <p>Weapon: {weapon.name}</p>
                    <p>Armor: {armor.name}</p>
                    <button onClick={togglePlaymode}>Enter playmode</button>
                </div> 
            }
        </div>
    )
}

export default Character