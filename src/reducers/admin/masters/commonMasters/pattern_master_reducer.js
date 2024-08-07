import {
    GET_PATTERN_LIST_PROGRESS, GET_PATTERN_LIST_SUCCESS, GET_PATTERN_LIST_FAILURE,
    ADD_PATTERN_PROGRESS, ADD_PATTERN_SUCCESS, ADD_PATTERN_FAILURE,
    EDIT_DELETE_PATTERN_PROGRESS, EDIT_DELETE_PATTERN_SUCCESS, EDIT_DELETE_PATTERN_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    pattern: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const pattern_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PATTERN_LIST_SUCCESS:
            return { ...state, pattern: action.pattern, loading: false };
        case GET_PATTERN_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_PATTERN_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_PATTERN_PROGRESS:
            return { ...state, loading: true };
        case ADD_PATTERN_SUCCESS:
            return { ...state, pattern: [...state.pattern, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_PATTERN_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_PATTERN_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_PATTERN_SUCCESS:
            return {
                ...state,
                pattern: state.pattern.map((pattern) =>
                    pattern.id === action.payload.id ? action.payload : pattern
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_PATTERN_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default pattern_master_reducer;