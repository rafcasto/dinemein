import {ADD_ARTICLE,SEARCH_BY_COUNTRY,SHOW_ALL} from "../constants/action-types";
import MenuData from '../Data/Menu.json'
import RecepiesData from '../Data/Recepies.json'
const initialState = {
    articles : [],
    searchByCountry:"",
    recepies:RecepiesData,
    filterRecepies:RecepiesData,
    menu:MenuData
}

const rootReducer = (state = initialState, action ) => {
    switch(action.type)
    {
        case ADD_ARTICLE:            
            return {...state,articles:[...state.articles,action.payload]};
        case SEARCH_BY_COUNTRY:                    
            return { ...state,filterRecepies: state.recepies.filter(item => item.country === action.payload.country)}
        case SHOW_ALL:
        return {...state,recepies:[...state.recepies,RecepiesData]}
        default:
        
            return state;
    }
}; 
export default rootReducer;