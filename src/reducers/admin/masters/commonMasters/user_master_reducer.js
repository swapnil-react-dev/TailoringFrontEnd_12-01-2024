import {
    GET_USER_LIST_PROGRESS, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE,
    ADD_USER_PROGRESS, ADD_USER_SUCCESS, ADD_USER_FAILURE,
    EDIT_DELETE_USER_PROGRESS, EDIT_DELETE_USER_SUCCESS, EDIT_DELETE_USER_FAILURE,

    LOGIN_PROGRESS,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_PROGRESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    user: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const user_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_PROGRESS:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, loginUser: action.loginUser, loading: false, error: false, message: action.loginUser.message };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case LOGOUT_PROGRESS:
            return { ...state, loading: true };
        case LOGOUT_SUCCESS:
            return { ...state, loginUser: null, loading: false, error: false };
        case LOGOUT_FAILURE:
            return { ...state, loading: false, error: action.payload };


        case GET_USER_LIST_SUCCESS:
            return { ...state, user: action.user, loading: false };
        case GET_USER_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_USER_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_USER_PROGRESS:
            return { ...state, loading: true };
        case ADD_USER_SUCCESS:
            return { ...state, user: [...state.user, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_USER_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_USER_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_USER_SUCCESS:
            return {
                ...state,
                user: state.user.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default user_master_reducer;