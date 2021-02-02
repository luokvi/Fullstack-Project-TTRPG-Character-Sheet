import React from 'react'
import { Link } from 'react-router-dom'

const Characters = ({ charas }) => {
    

    return (
        <div>
            <ul>
                {charas.map(chara => 
                    <li key={chara.id}>
                        <Link to={`/character/${chara.id}`}>
                            <b>{chara.name}</b>, {chara.level} lvl {chara.class}
                        </Link>
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default Characters