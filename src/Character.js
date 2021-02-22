import React from 'react'
import { useParams } from 'react-router-dom'
import PlayMode from './PlayMode'

const StatsLine = ({ label, value}) =>{
    return (
      <tr>
        <th>{label}</th>
        <td>{value}</td>
        </tr>
    )
  }

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
                    <StatsLine label={"strength"} value={stat(chara.strength, weapon.strength, armor.strength)} />
                    <StatsLine label={"dexterity"} value={stat(chara.dexterity, weapon.dexterity, armor.dexterity)} />
                    <StatsLine label={"vitality"} value={stat(chara.vitality, weapon.vitality, armor.vitality)} />
                    <StatsLine label={"magic"} value={stat(chara.magic, weapon.magic, armor.magic)} />
                    <StatsLine label={"luck"} value={stat(chara.luck, weapon.luck, armor.luck)} />
                </tbody>
            </table>

            <table>
                <tbody>
                    <StatsLine label={"attack"} value={stat(chara.attack, weapon.attack, armor.attack)} />
                    <StatsLine label={"armor"} value={stat(chara.armor, weapon.armor, armor.armor)} />
                    <StatsLine label={"magic atk"} value={stat(chara.magicAttack, weapon.magicAttack, armor.magicAttack)} />
                    <StatsLine label={"magic arm"} value={stat(chara.magicArmor, weapon.magicArmor, armor.magicArmor)} />
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