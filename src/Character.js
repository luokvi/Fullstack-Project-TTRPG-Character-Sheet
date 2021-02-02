import React from 'react'

const Character = ({ chara }) => {
    return (
        <div>
            <h2>{chara.name},</h2>
            <h3>{chara.class}, level {chara.level}</h3>
            <p>HP: {chara.currentHitpoints}/{chara.hitpoints}</p>
            <table>
                <tbody>
                    <tr>
                        <th>str</th>
                        <th>dex</th>
                        <th>vit</th>
                        <th>mgc</th>
                        <th>sprt</th>
                        <th>lck</th>
                    </tr>
                    <tr>
                        <td>{chara.strength}</td>
                        <td>{chara.dexterity}</td>
                        <td>{chara.vitality}</td>
                        <td>{chara.magic}</td>
                        <td>{chara.spirit}</td>
                        <td>{chara.luck}</td>
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
                        <td>{chara.attack}</td>
                        <td>{chara.armor}</td>
                        <td>{chara.magicAttack}</td>
                        <td>{chara.magicArmor}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Character