import {
    GET_GRN_LIST_PROGRESS, GET_GRN_LIST_SUCCESS, GET_GRN_LIST_FAILURE,
    ADD_GRN_PROGRESS, ADD_GRN_SUCCESS, ADD_GRN_FAILURE,
    EDIT_DELETE_GRN_PROGRESS, EDIT_DELETE_GRN_SUCCESS, EDIT_DELETE_GRN_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    grn: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const grn_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_GRN_LIST_SUCCESS:
            return { ...state, grn: action.grn, loading: false };
        case GET_GRN_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_GRN_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_GRN_PROGRESS:
            return { ...state, loading: true };
        case ADD_GRN_SUCCESS:
            return { ...state, color: [...state.color, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_GRN_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_GRN_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_GRN_SUCCESS:
            return {
                ...state,
                grn: state.grn.map((grn) =>
                    grn.id === action.payload.id ? action.payload : grn
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_GRN_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default grn_reducer;