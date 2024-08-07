import {
    GET_USER_ADDRESSES_LIST_PROGRESS, GET_USER_ADDRESSES_LIST_SUCCESS, GET_USER_ADDRESSES_LIST_FAILURE,
    ADD_USER_ADDRESSES_PROGRESS, ADD_USER_ADDRESSES_SUCCESS, ADD_USER_ADDRESSES_FAILURE,
    EDIT_DELETE_USER_ADDRESSES_PROGRESS, EDIT_DELETE_USER_ADDRESSES_SUCCESS, EDIT_DELETE_USER_ADDRESSES_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    user_addresses: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const user_addresses_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER_ADDRESSES_LIST_SUCCESS:
            return { ...state, user_addresses: action.user_addresses, loading: false };
        case GET_USER_ADDRESSES_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_USER_ADDRESSES_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_USER_ADDRESSES_PROGRESS:
            return { ...state, loading: true };
        case ADD_USER_ADDRESSES_SUCCESS:
            return { ...state, user_addresses: [...state.user_addresses, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_USER_ADDRESSES_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_USER_ADDRESSES_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_USER_ADDRESSES_SUCCESS:
            return {
                ...state,
                user_addresses: state.user_addresses.map((item) =>
                user_addresses.id === action.payload.id ? action.payload : item
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_USER_ADDRESSES_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default user_addresses_reducer;