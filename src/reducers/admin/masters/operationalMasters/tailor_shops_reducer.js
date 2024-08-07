import {
    GET_TAILOR_SHOPS_LIST_PROGRESS, GET_TAILOR_SHOPS_LIST_SUCCESS, GET_TAILOR_SHOPS_LIST_FAILURE,
    ADD_TAILOR_SHOPS_PROGRESS, ADD_TAILOR_SHOPS_SUCCESS, ADD_TAILOR_SHOPS_FAILURE,
    EDIT_DELETE_TAILOR_SHOPS_PROGRESS, EDIT_DELETE_TAILOR_SHOPS_SUCCESS, EDIT_DELETE_TAILOR_SHOPS_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    tailor_shops: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const tailor_shops_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TAILOR_SHOPS_LIST_SUCCESS:
            return { ...state, tailor_shops: action.tailor_shops, loading: false };
        case GET_TAILOR_SHOPS_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_TAILOR_SHOPS_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_TAILOR_SHOPS_PROGRESS:
            return { ...state, loading: true };
        case ADD_TAILOR_SHOPS_SUCCESS:
            return { ...state, tailor_shops: [...state.tailor_shops, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_TAILOR_SHOPS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_TAILOR_SHOPS_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_TAILOR_SHOPS_SUCCESS:
            return {
                ...state,
                tailor_shops: state.tailor_shops.map((tailor_shops) =>
                    tailor_shops.id === action.payload.id ? action.payload : tailor_shops
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_TAILOR_SHOPS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default tailor_shops_reducer;