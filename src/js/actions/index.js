import {ADD_ARTICLE,SEARCH_BY_COUNTRY,DEFAULTSTATE,SHOW_ALL} from '../constants/action-types'
export const addArticle = article => ({type:ADD_ARTICLE,payload:article})
export const searchByCountry = recepies => ({type:SEARCH_BY_COUNTRY,payload:recepies})
export const defaultState = state => ({type:DEFAULTSTATE,payload:state})
export const showAll = recepies => ({type:SHOW_ALL,payload:recepies})
