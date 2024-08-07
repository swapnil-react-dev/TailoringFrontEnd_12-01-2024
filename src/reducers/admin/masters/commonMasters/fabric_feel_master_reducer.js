import {
    GET_FABRIC_FEEL_LIST_PROGRESS, GET_FABRIC_FEEL_LIST_SUCCESS, GET_FABRIC_FEEL_LIST_FAILURE,
    ADD_FABRIC_FEEL_PROGRESS, ADD_FABRIC_FEEL_SUCCESS, ADD_FABRIC_FEEL_FAILURE,
    EDIT_DELETE_FABRIC_FEEL_PROGRESS, EDIT_DELETE_FABRIC_FEEL_SUCCESS, EDIT_DELETE_FABRIC_FEEL_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    fabric_feel: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const fabric_feel_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FABRIC_FEEL_LIST_SUCCESS:
            return { ...state, fabric_feel: action.fabric_feel, loading: false };
        case GET_FABRIC_FEEL_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_FABRIC_FEEL_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_FABRIC_FEEL_PROGRESS:
            return { ...state, loading: true };
        case ADD_FABRIC_FEEL_SUCCESS:
            return { ...state, fabric_feel: [...state.fabric_feel, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_FABRIC_FEEL_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_FABRIC_FEEL_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_FABRIC_FEEL_SUCCESS:
            return {
                ...state,
                fabric_feel: state.fabric_feel.map((fabric_feel) =>
                    fabric_feel.id === action.payload.id ? action.payload : fabric_feel
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_FABRIC_FEEL_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default fabric_feel_master_reducer;