import {
    GET_FABRIC_USE_LIST_PROGRESS, GET_FABRIC_USE_LIST_SUCCESS, GET_FABRIC_USE_LIST_FAILURE,
    ADD_FABRIC_USE_PROGRESS, ADD_FABRIC_USE_SUCCESS, ADD_FABRIC_USE_FAILURE,
    EDIT_DELETE_FABRIC_USE_PROGRESS, EDIT_DELETE_FABRIC_USE_SUCCESS, EDIT_DELETE_FABRIC_USE_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    fabric_use: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const fabric_use_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FABRIC_USE_LIST_SUCCESS:
            return { ...state, fabric_use: action.fabric_use, loading: false };
        case GET_FABRIC_USE_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_FABRIC_USE_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_FABRIC_USE_PROGRESS:
            return { ...state, loading: true };
        case ADD_FABRIC_USE_SUCCESS:
            return { ...state, fabric_use: [...state.fabric_use, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_FABRIC_USE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_FABRIC_USE_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_FABRIC_USE_SUCCESS:
            return {
                ...state,
                fabric_use: state.fabric_use.map((fabric_use) =>
                    fabric_use.id === action.payload.id ? action.payload : fabric_use
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_FABRIC_USE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default fabric_use_master_reducer;