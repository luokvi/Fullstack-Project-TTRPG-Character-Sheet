import React from 'react'
import { useDispatch } from 'react-redux'
import characterService from './services/characters'
import { updateCharacter } from './reducers/characterReducer'

const NewItemForm = ({ chara }) => {
    const dispatch = useDispatch()

    const addItem = async (event) => {
        event.preventDefault()
        const newItem = {
            "name": event.target.name.value,
            "strength": event.target.str.value,
            "dexterity": event.target.dex.value,
            "vitality": event.target.vit.value,
            "magic": event.target.mgc.value,
            "luck": event.target.lck.value,
            "attack": event.target.atk.value,
            "armor": event.target.armor.value,
            "magicAttack": event.target.mgcatk.value,
            "magicArmor": event.target.mgcarmor.value,
            "hitpoints": event.target.hp.value,
        }

        if(event.target.item.value === "weapon"){
            chara.items.weapons = [...chara.items.weapons, newItem]
        }
        if(event.target.item.value === "armor"){
            chara.items.armors = [...chara.items.armors, newItem]
        }

        const updated = await characterService.update(chara.id, chara)
        dispatch(updateCharacter(chara.id, updated))
    }
    return (
        <form onSubmit={addItem}>
            <p>Add new item</p>

            <label>Type:</label>
            <select id="itemtype" name="item" required>
                <option value="weapon">Weapon</option>
                <option value="armor">Armor</option>
            </select>
            <br/>
            <label htmlFor="name">Name:</label>
            <input name="name" required/> <br/>

            <label>Strength:</label>
            <input name="str" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <label>Dexterity:</label>
            <input name="dex" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <label>Vitality:</label>
            <input name="vit" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <label>Magic:</label>
            <input name="mgc" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <label>Luck:</label>
            <input name="lck" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <label>Attack:</label>
            <input name="atk" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <label>Armor:</label>
            <input name="armor" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <label>Magic Attack:</label>
            <input name="mgcatk" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <label>Magic Armor:</label>
            <input name="mgcarmor" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <label>Hitpoints:</label>
            <input name="hp" type="number" min="-20" max="20" defaultValue="0"/> <br/>

            <button type="submit">Add</button>
        </form>
    )
}

export default NewItemForm