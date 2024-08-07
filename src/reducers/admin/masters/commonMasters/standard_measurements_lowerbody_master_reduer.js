import {
    GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_PROGRESS, GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_SUCCESS, GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_FAILURE,
    ADD_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS, ADD_STANDARD_MEASUREMENTS_LOWERBODY_SUCCESS, ADD_STANDARD_MEASUREMENTS_LOWERBODY_FAILURE,
    EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS, EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_SUCCESS, EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    standard_measurements_lowerbody: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const standard_measurements_lowerbody_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_SUCCESS:
            return { ...state, standard_measurements_lowerbody: action.standard_measurements_lowerbody, loading: false };
        case GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS:
            return { ...state, loading: true };
        case ADD_STANDARD_MEASUREMENTS_LOWERBODY_SUCCESS:
            return { ...state, standard_measurements_lowerbody: [...state.standard_measurements_lowerbody, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_STANDARD_MEASUREMENTS_LOWERBODY_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_SUCCESS:
            return {
                ...state,
                standard_measurements_lowerbody: state.standard_measurements_lowerbody.map((standard_measurements_lowerbody) =>
                standard_measurements_lowerbody.id === action.payload.id ? action.payload : standard_measurements_lowerbody
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default standard_measurements_lowerbody_reducer;