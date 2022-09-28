
import  {GET_DIETS, GET_FOOD, GET_NAME_QUERY} from '../actions/index'

const inicialState = {
    foods:[],
    diets:[]
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
        case GET_DIETS:
                return{
                    ...state,
                    diets:action.payload
                }
        default: return state
    }
}