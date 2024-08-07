import {
    GET_SHIRT_CUFF_LIST_PROGRESS, GET_SHIRT_CUFF_LIST_SUCCESS, GET_SHIRT_CUFF_LIST_FAILURE,
    ADD_SHIRT_CUFF_PROGRESS, ADD_SHIRT_CUFF_SUCCESS, ADD_SHIRT_CUFF_FAILURE,
    EDIT_DELETE_SHIRT_CUFF_PROGRESS, EDIT_DELETE_SHIRT_CUFF_SUCCESS, EDIT_DELETE_SHIRT_CUFF_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    shirt_cuff: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const shirt_cuff_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SHIRT_CUFF_LIST_SUCCESS:
            return { ...state, shirt_cuff: action.shirt_cuff, loading: false };
        case GET_SHIRT_CUFF_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHIRT_CUFF_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHIRT_CUFF_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHIRT_CUFF_SUCCESS:
            return { ...state, shirt_cuff: [...state.shirt_cuff, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHIRT_CUFF_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHIRT_CUFF_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHIRT_CUFF_SUCCESS:
            return {
                ...state,
                shirt_cuff: state.shirt_cuff.map((shirt_cuff) =>
                    shirt_cuff.id === action.payload.id ? action.payload : shirt_cuff
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHIRT_CUFF_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default shirt_cuff_master_reducer;