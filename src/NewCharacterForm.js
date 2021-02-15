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
            "spirit": event.target.sprt.value,
            "luck": event.target.lck.value,
            "attack": event.target.atk.value,
            "armor": event.target.armor.value,
            "magicAttack": event.target.mgcatk.value,
            "magicArmor": event.target.mgcarmor.value,
            "hitpoints": event.target.hp.value,
            "currentHitpoints": event.target.hp.value,
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
                <input name="name" type="text"/> <br/>

                <label>Class:</label> <br/>
                <input type="radio" name="class" value="cleric" />
                <label>Cleric</label>
                <input type="radio" name="class" value="mage" />
                <label>Mage</label>
                <input type="radio" name="class" value="soldier" />
                <label>Soldier</label>
                <br/>

                <label>Level:</label>
                <input name="lvl" type="number" min="1" max="99" /> <br/>

                <label>Strength:</label>
                <input name="str" type="number" min="1" max="20" /> <br/>

                <label>Dexterity:</label>
                <input name="dex" type="number" min="1" max="20"/> <br/>

                <label>Vitality:</label>
                <input name="vit" type="number" min="1" max="20"/> <br/>

                <label>Magic:</label>
                <input name="mgc" type="number" min="1" max="20"/> <br/>

                <label>Spirit:</label>
                <input name="sprt" type="number" min="1" max="20"/> <br/>

                <label>Luck:</label>
                <input name="lck" type="number" min="1" max="20"/> <br/>

                <label>Attack:</label>
                <input name="atk" type="number" min="1" max="20"/> <br/>

                <label>Armor:</label>
                <input name="armor" type="number" min="1" max="20"/> <br/>

                <label>Magic Attack:</label>
                <input name="mgcatk" type="number" min="1" max="20"/> <br/>

                <label>Magic Armor:</label>
                <input name="mgcarmor" type="number" min="1" max="20"/> <br/>

                <label>Hitpoints:</label>
                <input name="hp" type="number" min="10" max="200"/> <br/>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewCharacterForm