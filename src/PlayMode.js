import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import characterService from './services/characters'
import { updateCharacter } from './reducers/characterReducer'

const PlayMode = ({ chara }) => {
    const dispatch = useDispatch()
    const [ hp, setHitpoints ] = useState(chara.currentHitpoints)

    const heal = ( event ) => {
        event.preventDefault()
        let newHp = hp - (-event.target.heal.value) //adding would change object to string
        if (newHp > chara.hitpoints) { newHp = chara.hitpoints }
        setHitpoints(newHp)
        event.target.heal.value = null
    }
    const damage = ( event ) => {
        event.preventDefault()
        let newHp = hp - event.target.damage.value
        if (newHp < 0) { newHp = 0 }
        setHitpoints(newHp)
        event.target.damage.value = null
    }

    const save = async () => {
        chara.currentHitpoints = hp
        
        const updated = await characterService.update(chara.id, chara)
        console.log(updated)
        dispatch(updateCharacter(chara.id, updated))
    }

    const stat = (character, weapon, armor) => {
        if (!weapon && !armor){
            return character
        }

        let total = character
        if (weapon) total += weapon
        if(armor) total += armor

        return total
    }

    const weapon = chara.equipment.weapon
    const armor = chara.equipment.armor

    return(
        <div>
            <p>HP: {hp}/{stat(chara.hitpoints, weapon.hitpoints, armor.hitpoints)}</p>

            <form onSubmit={heal}>
                <input name="heal" type="number" min="1"/>
                <button type="submit">Heal</button>
            </form>
            <form onSubmit={damage}>
                <input name="damage" type="number" min="1"/>
                <button type="submit">Damage</button>
            </form>

            <button onClick={save}>save</button>
        </div>
    )
}

export default PlayMode