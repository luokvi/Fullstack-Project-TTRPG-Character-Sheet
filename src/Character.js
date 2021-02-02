import React from 'react'

const Character = ({ chara }) => {
    return (
        <div>
            <h2>{chara.name},</h2>
            <h3>{chara.class} level {chara.level}</h3>
            <p>HP: {chara.currentHitpoints}/{chara.hitpoints}</p>
            <table>
                <tbody>
                <tr>
                    <th>str</th>
                    <th>dex</th>
                    <th>vit</th>
                </tr>
                <tr>
                    <td>{chara.strength}</td>
                    <td>{chara.dexterity}</td>
                    <td>{chara.vitality}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Character