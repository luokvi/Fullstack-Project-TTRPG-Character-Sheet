import React from 'react'

const StatsLine = ({ label, value}) =>{
    return (
      <tr>
        <th>{label}</th>
        <td>{value}</td>
        </tr>
    )
  }

export const stat = (character, weapon, armor) => {
    if (!weapon && !armor){
        return character
    }

    let total = character
    if (weapon) total += weapon
    if(armor) total += armor

    return total
}

const Stats = ({ chara, weapon, armor }) => {

    

    return (
        <div>
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
            </div>
    )
}

export default Stats