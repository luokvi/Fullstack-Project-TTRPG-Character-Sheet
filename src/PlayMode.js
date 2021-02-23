import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import characterService from './services/characters'
import { updateCharacter } from './reducers/characterReducer'

const Dropdown = ({ chara, items }) => {
    let rest, label
    switch (items) {
        case "weapons":
            rest = chara.items.weapons
            label = "weapons"
            break

        case "armor":
            rest = chara.items.armors
            label = "armor"
            break

        default:
            return (<p>something went wrong</p>)
    }

    return itemlist(rest, label)
}

const itemlist = (rest, label) => {
    return(
        <select id={label} name={label}>
            {rest.map(item => 
                <option value={item.id} key={item.name}>{item.name}</option>
            )}
        </select>
    )
}

const PlayMode = ({ chara }) => {
    const dispatch = useDispatch()
    const [ hp, setHitpoints ] = useState(chara.currentHitpoints)
    const [ weapon, setWeapon ] = useState(chara.equipment.weapon)
    const [ armor, setArmor ] = useState(chara.equipment.armor)

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

    const equip = ( event ) => {
        event.preventDefault()
        const wId = event.target.weapons.value
        const newWeapon = chara.items.weapons.find(w => w.id === Number(wId))
        setWeapon(newWeapon)

        const aId = event.target.armor.value
        const newArmor = chara.items.armors.find(a => a.id === Number(aId))
        setArmor(newArmor)

    }

    const save = async () => {
        chara.currentHitpoints = hp
        chara.equipment.weapon = weapon
        chara.equipment.armor = armor
        
        const updated = await characterService.update(chara.id, chara)
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

            <p>Equipment: {weapon.name} {armor.name}</p>
            <form onSubmit={equip}>
                <label htmlFor="weapons">Weapon: </label>
                <Dropdown items="weapons" chara={chara} />
                <label htmlFor="armor">Armor: </label>
                <Dropdown items="armor" chara={chara} />
                <button type="submit">Equip</button>
            </form>

            <button onClick={save}>save</button>
        </div>
    )
}

export default PlayMode