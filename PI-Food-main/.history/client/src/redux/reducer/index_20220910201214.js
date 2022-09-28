
import  {FILTER_BY_DIETS, GET_DIETS, GET_FOOD, GET_NAME_QUERY, ORDER_BY_NAME} from '../actions/index'

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
            const food_diets = state.allFoods
            let foodFilter = []
            if(action.payload==='All') foodFilter = food_diets
            else{
                for(let i= 0;i<food_diets.length;i++){
                let find = food_diets[i].diets.find(d=>d === action.payload)
                if(find) foodFilter.push(food_diets[i])
                }
            }
            console.log(action.payload)
            console.log(foodFilter)
            return{
                ...state,
                foods:foodFilter
            }
        case ORDER_BY_NAME:
            let food = state.allFoods
            food = food.sort((a,b)=>{
                const titleA = a.title.toLowerCase()
                const titleB = b.title.toLowerCase()
                if(titleA<titleB) return -1
                if(titleB<titleA) return 1
                return 0
            })
        default: return state
    }
}