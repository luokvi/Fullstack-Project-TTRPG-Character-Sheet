import React from 'react'
import { useParams } from 'react-router-dom'
import PlayMode from './PlayMode'

const Character = ({ charas }) => {
    const id = useParams().id
    const chara = charas.find(c => c.id === Number(id))

    if (!chara){
        return(
            <div>
                <p>loading...</p>
            </div>
        )
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
    
    return (
        <div>
            <h2>{chara.name},</h2>
            <h3>{chara.class}, level {chara.level}</h3>
            <p>HP: {chara.currentHitpoints}/{stat(chara.hitpoints, weapon.hitpoints, armor.hitpoints)}</p>
            <table>
                <tbody>
                    <tr>
                        <th>str</th>
                        <th>dex</th>
                        <th>vit</th>
                        <th>mgc</th>
                        <th>lck</th>
                    </tr>
                    <tr>
                        <td>{stat(chara.strength, weapon.strength, armor.strength)}</td>
                        <td>{stat(chara.dexterity, weapon.dexterity, armor.dexterity)}</td>
                        <td>{stat(chara.vitality, weapon.vitality, armor.vitality)}</td>
                        <td>{stat(chara.magic, weapon.magic, armor.magic)}</td>
                        <td>{stat(chara.luck, weapon.luck, armor.luck)}</td>
                    </tr>
                </tbody>
            </table>

            <table>
                <tbody>
                    <tr>
                        <th>attack</th>
                        <th>armor</th>
                        <th>magic atk</th>
                        <th>magic ar</th>
                    </tr>
                    <tr>
                        <td>{stat(chara.attack, weapon.attack, armor.attack)}</td>
                        <td>{stat(chara.armor, weapon.armor, armor.armor)}</td>
                        <td>{stat(chara.magicAttack, weapon.magicAttack, armor.magicAttack)}</td>
                        <td>{stat(chara.magicArmor, weapon.magicArmor, armor.magicArmor)}</td>
                    </tr>
                </tbody>
            </table>

            <p><b>Equipment</b></p>
            <p>Weapon: {weapon.name}</p>
            <p>Armor: {armor.name}</p>

            <div>
                <h2>PlayMode!</h2>
                <PlayMode chara={chara}/>
            </div>
        </div>
    )
}

export default Character