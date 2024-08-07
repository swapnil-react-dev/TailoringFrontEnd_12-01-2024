import {
    GET_CHARGES_LIST_PROGRESS, GET_CHARGES_LIST_SUCCESS, GET_CHARGES_LIST_FAILURE,
    ADD_CHARGES_PROGRESS, ADD_CHARGES_SUCCESS, ADD_CHARGES_FAILURE,
    EDIT_DELETE_CHARGES_PROGRESS, EDIT_DELETE_CHARGES_SUCCESS, EDIT_DELETE_CHARGES_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    charges: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const charges_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_CHARGES_LIST_SUCCESS:
            return { ...state, charges: action.charges, loading: false };
        case GET_CHARGES_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_CHARGES_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_CHARGES_PROGRESS:
            return { ...state, loading: true };
        case ADD_CHARGES_SUCCESS:
            return { ...state, charges: [...state.charges, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_CHARGES_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_CHARGES_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_CHARGES_SUCCESS:
            return {
                ...state,
                charges: state.charges.map((charges) =>
                    charges.id === action.payload.id ? action.payload : charges
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_CHARGES_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default charges_master_reducer;