import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import characterService from './services/characters'
import { updateCharacter } from './reducers/characterReducer'
import Stat, { stat } from './Stats'
import NewItemForm from './NewItemForm'

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
            <option value="empty" defaultValue></option>
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
        if(event.target.weapons.value !== "empty" ){
            const wId = event.target.weapons.value
            const newWeapon = chara.items.weapons.find(w => w.id === Number(wId))
            setWeapon(newWeapon)
            event.target.weapons.value = null
        }
        if (event.target.armor.value !== "empty"){
            const aId = event.target.armor.value
            const newArmor = chara.items.armors.find(a => a.id === Number(aId))
            setArmor(newArmor)
            event.target.weapons.value = null
        }
    }

    const save = async () => {
        chara.currentHitpoints = hp
        chara.equipment.weapon = weapon
        chara.equipment.armor = armor
        
        const updated = await characterService.update(chara.id, chara)
        dispatch(updateCharacter(chara.id, updated))
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
            <Stat chara={chara} weapon={weapon} armor={armor} />

            <p><b>Equipment</b></p>
            
            <form onSubmit={equip}>
            <p>Weapon: {weapon.name}</p>
                <label htmlFor="weapons">Weapon: </label>
                <Dropdown items="weapons" chara={chara} /><br></br>
                <p>Armor: {armor.name}</p>
                <label htmlFor="armor">Armor: </label>
                <Dropdown items="armor" chara={chara} />
                <br></br><button type="submit">Equip</button>
            </form>
            <NewItemForm chara={chara} />

            <button onClick={save}>save</button>
        </div>
    )
}

export default PlayMode