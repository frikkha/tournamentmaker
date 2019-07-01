import {GET_TOURNAMENTS, ADD_TOURNAMENT, DELETE_TOURNAMENT, TOURNAMENTS_LOADING} from "../actions/types";


const initialState = {
    tournaments: [],
    loading: false
};

export default function (state = initialState, action){
       switch(action.type){
           case GET_TOURNAMENTS:
               return {
                   ...state,
                   tournaments: action.payload,
                   loading: false
               };
           case DELETE_TOURNAMENT:
               return {
                   ...state,
                   tournaments: state.tournaments.filter(tournament => tournament._id !== action.payload)
               };
           case ADD_TOURNAMENT:
               console.log(action.payload);
               return {
                   ...state,
                   tournaments: state.tournaments.concat(action.payload)
               };
           case TOURNAMENTS_LOADING:
               return {
                   ...state,
                   loading: true
               };
               /*
           case UPDATE_TOURNAMENT:
               return {
                   ...state,
                   tournaments: state.concat(action.payload)
               }; */
           default:
               return state
       }
};