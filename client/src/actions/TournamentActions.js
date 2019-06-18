import axios from 'axios';
import {GET_TOURNAMENTS, ADD_TOURNAMENT, DELETE_TOURNAMENT, TOURNAMENTS_LOADING} from "./types";


export const getTournaments = () => dispatch =>{
    dispatch(setTournamentsLoading());
    axios
        .get(`api/tournaments/q=all`)
        .then(res =>
            dispatch({
                type: GET_TOURNAMENTS,
                payload: res.data
            })
        )
    };

export const addTournament = (tournament) => dispatch => {
    console.log(tournament);
    axios
        .post(`/api/tournaments/q=add`, tournament)
        .then(res =>
            dispatch({
            type: ADD_TOURNAMENT,
            payload: res.config.data
            })
        )
        .catch(err => console.log(err.response));
};

export const deleteTournament = id => dispatch => {
    axios
        .delete(`api/tournaments/${id}`)
        .then( () => dispatch ({
            type: DELETE_TOURNAMENT,
            payload: id
        }))

};


export const setTournamentsLoading = () => {
    return {
        type: TOURNAMENTS_LOADING
    }
};


