
import  {GET_FOOD} from '../actions/index'

const inicialState = {
    foots:[],
}
export default function rootReducer(state = inicialState, action){
    switch(action.type){
        case GET_FOOD:
            return{
                ...state,
                foors:action.payload
            }
        default: return state
    }
}