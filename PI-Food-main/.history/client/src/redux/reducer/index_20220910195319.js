
import  {FILTER_BY_DIETS, GET_DIETS, GET_FOOD, GET_NAME_QUERY} from '../actions/index'

const inicialState = {
    foods:[],
    diets:[],
    allFoods:[]
}
export default function rootReducer(state = inicialState, action){
    switch(action.type){
        case GET_FOOD:
            return{
                ...state,
                foods:action.payload,
                allFoods:action.payload
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
        case FILTER_BY_DIETS:
            let food_diets = state.allFoods
            let foodFilter = []
            if(action.payload='All') foodFilter = food_diets
            else{
                for(let i= 0;i<food_diets.length;i++){
                let find = food_diets[i].diets.find(d=>d === action.payload)
                if(find) foodFilter.push(food_diets[i])
                }
            }
            console.log(action.payload)
            return{
                ...state,
                foods:foodFilter
            }
        default: return state
    }
}