import {
    GET_MANUFRACTURERS_LIST_PROGRESS, GET_MANUFRACTURERS_LIST_SUCCESS, GET_MANUFRACTURERS_LIST_FAILURE,
    ADD_MANUFRACTURERS_PROGRESS, ADD_MANUFRACTURERS_SUCCESS, ADD_MANUFRACTURERS_FAILURE,
    EDIT_DELETE_MANUFRACTURERS_PROGRESS, EDIT_DELETE_MANUFRACTURERS_SUCCESS, EDIT_DELETE_MANUFRACTURERS_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    manufracturers: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const manufracturers_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MANUFRACTURERS_LIST_SUCCESS:
            return { ...state, manufracturers: action.manufracturers, loading: false };
        case GET_MANUFRACTURERS_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_MANUFRACTURERS_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_MANUFRACTURERS_PROGRESS:
            return { ...state, loading: true };
        case ADD_MANUFRACTURERS_SUCCESS:
            return { ...state, manufracturers: [...state.manufracturers, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_MANUFRACTURERS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_MANUFRACTURERS_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_MANUFRACTURERS_SUCCESS:
            return {
                ...state,
                manufracturers: state.manufracturers.map((manufracturers) =>
                    manufracturers.id === action.payload.id ? action.payload : manufracturers
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_MANUFRACTURERS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default manufracturers_reducer;