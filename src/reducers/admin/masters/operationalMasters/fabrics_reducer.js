import {
    GET_FABRICS_LIST_PROGRESS, GET_FABRICS_LIST_SUCCESS, GET_FABRICS_LIST_FAILURE,
    ADD_FABRICS_PROGRESS, ADD_FABRICS_SUCCESS, ADD_FABRICS_FAILURE,
    EDIT_DELETE_FABRICS_PROGRESS, EDIT_DELETE_FABRICS_SUCCESS, EDIT_DELETE_FABRICS_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    fabrics: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const fabrics_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FABRICS_LIST_SUCCESS:
            return { ...state, fabrics: action.fabrics, loading: false };
        case GET_FABRICS_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_FABRICS_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_FABRICS_PROGRESS:
            return { ...state, loading: true };
        case ADD_FABRICS_SUCCESS:
            return { ...state, fabrics: [...state.fabrics, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_FABRICS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_FABRICS_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_FABRICS_SUCCESS:
            return {
                ...state,
                fabrics: state.fabrics.map((fabrics) =>
                    fabrics.id === action.payload.id ? action.payload : fabrics
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_FABRICS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default fabrics_reducer;