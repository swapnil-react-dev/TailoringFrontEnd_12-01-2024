import {
    GET_OCCASION_LIST_PROGRESS, GET_OCCASION_LIST_SUCCESS, GET_OCCASION_LIST_FAILURE,
    ADD_OCCASION_PROGRESS, ADD_OCCASION_SUCCESS, ADD_OCCASION_FAILURE,
    EDIT_DELETE_OCCASION_PROGRESS, EDIT_DELETE_OCCASION_SUCCESS, EDIT_DELETE_OCCASION_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    occasion: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const occasion_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_OCCASION_LIST_SUCCESS:
            return { ...state, occasion: action.occasion, loading: false };
        case GET_OCCASION_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_OCCASION_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_OCCASION_PROGRESS:
            return { ...state, loading: true };
        case ADD_OCCASION_SUCCESS:
            return { ...state, occasion: [...state.occasion, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_OCCASION_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_OCCASION_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_OCCASION_SUCCESS:
            return {
                ...state,
                occasion: state.occasion.map((occasion) =>
                    occasion.id === action.payload.id ? action.payload : occasion
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_OCCASION_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default occasion_master_reducer;