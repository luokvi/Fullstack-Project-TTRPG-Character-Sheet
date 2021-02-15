import React from 'react'
import { useDispatch } from 'react-redux'
import { newCharacter } from './reducers/characterReducer'
import characterService from './services/characters'

const NewCharacterForm = () => {
    const dispatch = useDispatch()

    const submit = async (event) => {
        event.preventDefault()
        const content = {
            "name": event.target.name.value,
            "level": event.target.level.value,
            "class": "cleric",
            "strength": 6,
            "dexterity": 8,
            "vitality": 9,
            "magic": 9,
            "spirit": 7,
            "luck": 6,
            "attack": 8,
            "armor": 13,
            "magicAttack": 13,
            "magicArmor": 10,
            "hitpoints": 50,
            "currentHitpoints": 40
        }
        event.target.name.value = ''
        event.target.level.value = ''

        const newChara = await characterService.addCharacter(content)
        dispatch(newCharacter(newChara))
    }

    return(
        <div>
            <h2>New Character</h2>
            <form onSubmit={submit}>
                <input name="name"/>
                <input name="level"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewCharacterForm