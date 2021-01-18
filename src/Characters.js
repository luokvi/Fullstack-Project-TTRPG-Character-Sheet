import React from 'react'
import { useSelector} from 'react-redux'

const Characters = () => {
    const charas = useSelector(({ characters }) => {
        return characters
    })
    console.log(charas)

    return (
        <div>
            <ul>
                {charas.map(chara => 
                    <li key={chara.id}>
                        <b>{chara.name}</b>, {chara.level} lvl {chara.class}
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default Characters