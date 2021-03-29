import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_action'


const search = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.results
        case CLEAR_SEARCH_RESULTS:
            return [];
        default:
            return state;
    }
}

export default search;