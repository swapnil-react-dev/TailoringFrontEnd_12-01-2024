import {
    GET_WAIST_COAT_TYPE_LIST_PROGRESS, GET_WAIST_COAT_TYPE_LIST_SUCCESS, GET_WAIST_COAT_TYPE_LIST_FAILURE,
    ADD_WAIST_COAT_TYPE_PROGRESS, ADD_WAIST_COAT_TYPE_SUCCESS, ADD_WAIST_COAT_TYPE_FAILURE,
    EDIT_DELETE_WAIST_COAT_TYPE_PROGRESS, EDIT_DELETE_WAIST_COAT_TYPE_SUCCESS, EDIT_DELETE_WAIST_COAT_TYPE_FAILURE,

    UPLOAD_WAIST_COAT_TYPE_IMAGE_PROGRESS,
    UPLOAD_WAIST_COAT_TYPE_IMAGE_SUCCESS,
    UPLOAD_WAIST_COAT_TYPE_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    waist_coat_type: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    waist_coat_type_image: " ",
}

const waist_coat_type_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_WAIST_COAT_TYPE_LIST_SUCCESS:
            return { ...state, waist_coat_type: action.waist_coat_type, loading: false };
        case GET_WAIST_COAT_TYPE_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_WAIST_COAT_TYPE_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_WAIST_COAT_TYPE_PROGRESS:
            return { ...state, loading: true };
        case ADD_WAIST_COAT_TYPE_SUCCESS:
            return { ...state, waist_coat_type: [...state.waist_coat_type, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_WAIST_COAT_TYPE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_WAIST_COAT_TYPE_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_WAIST_COAT_TYPE_SUCCESS:
            return {
                ...state,
                waist_coat_type: state.waist_coat_type.map((waist_coat_type) =>
                waist_coat_type.id === action.payload.id ? action.payload : waist_coat_type
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_WAIST_COAT_TYPE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_WAIST_COAT_TYPE_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_WAIST_COAT_TYPE_IMAGE_SUCCESS:
            return { ...state, waist_coat_type_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_WAIST_COAT_TYPE_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default waist_coat_type_master_reducer;