import {
    GET_ROLE_LIST_PROGRESS, GET_ROLE_LIST_SUCCESS, GET_ROLE_LIST_FAILURE,
    ADD_ROLE_PROGRESS, ADD_ROLE_SUCCESS, ADD_ROLE_FAILURE,
    EDIT_DELETE_ROLE_PROGRESS, EDIT_DELETE_ROLE_SUCCESS, EDIT_DELETE_ROLE_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    role: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const role_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ROLE_LIST_SUCCESS:
            return { ...state, role: action.role, loading: false };
        case GET_ROLE_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_ROLE_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_ROLE_PROGRESS:
            return { ...state, loading: true };
        case ADD_ROLE_SUCCESS:
            return { ...state, role: [...state.role, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_ROLE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_ROLE_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_ROLE_SUCCESS:
            return {
                ...state,
                role: state.role.map((role) =>
                    role.id === action.payload.id ? action.payload : role
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_ROLE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default role_master_reducer;