import {
    GET_USER_MEASUREMENTS_UPPERBODY_LIST_PROGRESS, GET_USER_MEASUREMENTS_UPPERBODY_LIST_SUCCESS, GET_USER_MEASUREMENTS_UPPERBODY_LIST_FAILURE,
    ADD_USER_MEASUREMENTS_UPPERBODY_PROGRESS, ADD_USER_MEASUREMENTS_UPPERBODY_SUCCESS, ADD_USER_MEASUREMENTS_UPPERBODY_FAILURE,
    EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_PROGRESS, EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_SUCCESS, EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    user_measurements_upperbody: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const user_measurements_upperbody_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER_MEASUREMENTS_UPPERBODY_LIST_SUCCESS:
            return { ...state, user_measurements_upperbody: action.user_measurements_upperbody, loading: false };
        case GET_USER_MEASUREMENTS_UPPERBODY_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_USER_MEASUREMENTS_UPPERBODY_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_USER_MEASUREMENTS_UPPERBODY_PROGRESS:
            return { ...state, loading: true };
        case ADD_USER_MEASUREMENTS_UPPERBODY_SUCCESS:
            return { ...state, user_measurements_upperbody: [...state.user_measurements_upperbody, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_USER_MEASUREMENTS_UPPERBODY_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_SUCCESS:
            return {
                ...state,
                user_measurements_upperbody: state.user_measurements_upperbody.map((user_measurements_upperbody) =>
                user_measurements_upperbody.id === action.payload.id ? action.payload : user_measurements_upperbody
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default user_measurements_upperbody_reducer;