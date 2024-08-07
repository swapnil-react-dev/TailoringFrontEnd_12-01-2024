import {
    GET_SHIRT_FITTING_LIST_PROGRESS, GET_SHIRT_FITTING_LIST_SUCCESS, GET_SHIRT_FITTING_LIST_FAILURE,
    ADD_SHIRT_FITTING_PROGRESS, ADD_SHIRT_FITTING_SUCCESS, ADD_SHIRT_FITTING_FAILURE,
    EDIT_DELETE_SHIRT_FITTING_PROGRESS, EDIT_DELETE_SHIRT_FITTING_SUCCESS, EDIT_DELETE_SHIRT_FITTING_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    shirt_fitting: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const shirt_fitting_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SHIRT_FITTING_LIST_SUCCESS:
            return { ...state, shirt_fitting: action.shirt_fitting, loading: false };
        case GET_SHIRT_FITTING_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHIRT_FITTING_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHIRT_FITTING_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHIRT_FITTING_SUCCESS:
            return { ...state, shirt_fitting: [...state.shirt_fitting, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHIRT_FITTING_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHIRT_FITTING_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHIRT_FITTING_SUCCESS:
            return {
                ...state,
                shirt_fitting: state.shirt_fitting.map((shirt_fitting) =>
                    shirt_fitting.id === action.payload.id ? action.payload : shirt_fitting
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHIRT_FITTING_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default shirt_fitting_master_reducer;