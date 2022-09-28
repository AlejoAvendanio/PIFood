
import  {GET_FOOD} from '../actions/index'

const inicialState = {
    foods:[],
}
export default function rootReducer(state = inicialState, action){
    switch(action.type){
        case GET_FOOD:
            console.log(foods.action.payload)
            return{
                ...state,
                foods:action.payload
            }
        default: return state
    }
}