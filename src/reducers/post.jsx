import {actionsType} from '../actions';

export function post(state = {}, actions) {
    switch (actions.type) {
    case actionsType.GET_CURRENT_POST:
        return {};    
    default:
        return state;
    }
}