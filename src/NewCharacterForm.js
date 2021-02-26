import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { newCharacter } from './reducers/characterReducer'
import characterService from './services/characters'

const NewCharacterForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const submit = async (event) => {
        event.preventDefault()
        const content = {
            "name": event.target.name.value,
            "level": event.target.lvl.value,
            "class": event.target.class.value,
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
            "currentHitpoints": event.target.hp.value,

            "equipment": {
                "weapon": { "name": " "},
                "armor": { "name": " "}
            },
            "items": {
                "weapons": [],
                "armors": []
            }
        }
        
        const newChara = await characterService.addCharacter(content)
        dispatch(newCharacter(newChara))

        //move back to the front page
        history.push('/')
    }

    return(
        <div>
            <h3>New Character</h3>
            <form onSubmit={submit}>
                <label>Name:</label>
                <input name="name" type="text" required/> <br/>

                <label>Class:</label> <br/>
                <select id="class" name="class" required>
                    <option value="soldier">Soldier</option>
                    <option value="cleric">Cleric</option>
                    <option value="mage">Mage</option>
                </select>
                <br/>

                <label>Level:</label>
                <input name="lvl" type="number" min="1" max="99" required/> <br/>

                <label>Strength:</label>
                <input name="str" type="number" min="1" max="20" required/> <br/>

                <label>Dexterity:</label>
                <input name="dex" type="number" min="1" max="20" required/> <br/>

                <label>Vitality:</label>
                <input name="vit" type="number" min="1" max="20" required/> <br/>

                <label>Magic:</label>
                <input name="mgc" type="number" min="1" max="20" required/> <br/>

                <label>Luck:</label>
                <input name="lck" type="number" min="1" max="20" required/> <br/>

                <label>Attack:</label>
                <input name="atk" type="number" min="1" max="20" required/> <br/>

                <label>Armor:</label>
                <input name="armor" type="number" min="1" max="20" required/> <br/>

                <label>Magic Attack:</label>
                <input name="mgcatk" type="number" min="1" max="20" required/> <br/>

                <label>Magic Armor:</label>
                <input name="mgcarmor" type="number" min="1" max="20" required/> <br/>

                <label>Hitpoints:</label>
                <input name="hp" type="number" min="10" max="200" required/> <br/>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewCharacterForm