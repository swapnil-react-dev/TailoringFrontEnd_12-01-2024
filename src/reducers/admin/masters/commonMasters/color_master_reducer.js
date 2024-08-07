import {
    GET_COLOR_LIST_PROGRESS, GET_COLOR_LIST_SUCCESS, GET_COLOR_LIST_FAILURE,
    ADD_COLOR_PROGRESS, ADD_COLOR_SUCCESS, ADD_COLOR_FAILURE,
    EDIT_DELETE_COLOR_PROGRESS, EDIT_DELETE_COLOR_SUCCESS, EDIT_DELETE_COLOR_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    color: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const color_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COLOR_LIST_SUCCESS:
            return { ...state, color: action.color, loading: false };
        case GET_COLOR_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_COLOR_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_COLOR_PROGRESS:
            return { ...state, loading: true };
        case ADD_COLOR_SUCCESS:
            return { ...state, color: [...state.color, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_COLOR_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_COLOR_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_COLOR_SUCCESS:
            return {
                ...state,
                color: state.color.map((color) =>
                    color.id === action.payload.id ? action.payload : color
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_COLOR_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default color_master_reducer;