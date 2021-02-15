import characterService from '../services/characters'

const characterReducer = (state = [], action) => {
    switch(action.type){
        case 'INIT_CHARACTERS':
            return action.data
        
        case 'UPDATE':
            const id = action.data.id
            return state.map(chara =>
                chara.id !== id ? chara : action.data.content)

        case 'NEW_CHARACTER':
            console.log(action.data)
            return [...state, action.data]

        default:
            return state
    }
}

export const initializeCharacters = (characters) => {
    return async dispatch => {
        const characters = await characterService.getAll()
        dispatch({
            type: 'INIT_CHARACTERS',
            data: characters,
        })
    }
}

export const updateCharacter = (id, content) => {
    return async dispatch => {
        dispatch({
            type: 'UPDATE',
            data: {
                content,
                id
            }
        })
    }
}


export const newCharacter = (content) => {
    return async dispatch => {
        dispatch({
            type: 'NEW_CHARACTER',
            data: content
        })
    }
}

export default characterReducer