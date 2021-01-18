import characterService from '../services/characters'

const characterReducer = (state = [], action) => {
    switch(action.type){
        case 'INIT_CHARACTERS':
            return action.data
        
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

export default characterReducer