
import  {GET_FOOD, GET_NAME_QUERY} from '../actions/index'

const inicialState = {
    foods:[],
}
export default function rootReducer(state = inicialState, action){
    switch(action.type){
        case GET_FOOD:
            return{
                ...state,
                foods:action.payload,
            }
        case GET_NAME_QUERY:
            return{
                ...state,
                foods:action.payload
            }
        default: return state
    }
}