import React from 'react'
import { useSelector} from 'react-redux'

const Characters = () => {
    const charas = useSelector(({characters}) => {
        return characters
    })


    return (
        <div>
            <ul>
                {charas.map(chara => 
                    <li key={chara.id}>
                        {chara.name}, {chara.class} {chara.level}lvl
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default Characters