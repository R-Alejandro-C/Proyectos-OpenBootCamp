import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions";

const initialState = {
    fetching: false,
    token: null,
    error: null,
    loged: null
}

export const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
                loged: false
            }
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: null,
                token: action.payload.token,
                loged: true
            }
        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload.error,
                loged: false
            }

        default:
            return state
            break;
    }
}