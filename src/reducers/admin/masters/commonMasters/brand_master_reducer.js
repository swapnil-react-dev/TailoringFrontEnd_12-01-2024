import {
    GET_BRAND_LIST_PROGRESS, GET_BRAND_LIST_SUCCESS, GET_BRAND_LIST_FAILURE,
    ADD_BRAND_PROGRESS, ADD_BRAND_SUCCESS, ADD_BRAND_FAILURE,
    EDIT_DELETE_BRAND_PROGRESS, EDIT_DELETE_BRAND_SUCCESS, EDIT_DELETE_BRAND_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    brand: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const brand_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_BRAND_LIST_SUCCESS:
            return { ...state, brand: action.brand, loading: false };
        case GET_BRAND_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_BRAND_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_BRAND_PROGRESS:
            return { ...state, loading: true };
        case ADD_BRAND_SUCCESS:
            return { ...state, brand: [...state.brand, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_BRAND_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_BRAND_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_BRAND_SUCCESS:
            return {
                ...state,
                brand: state.brand.map((brand) =>
                    brand.id === action.payload.id ? action.payload : brand
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_BRAND_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default brand_master_reducer;