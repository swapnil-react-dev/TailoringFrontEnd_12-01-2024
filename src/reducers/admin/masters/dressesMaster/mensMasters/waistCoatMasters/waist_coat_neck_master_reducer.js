import {
    GET_WAIST_COAT_NECK_LIST_PROGRESS, GET_WAIST_COAT_NECK_LIST_SUCCESS, GET_WAIST_COAT_NECK_LIST_FAILURE,
    ADD_WAIST_COAT_NECK_PROGRESS, ADD_WAIST_COAT_NECK_SUCCESS, ADD_WAIST_COAT_NECK_FAILURE,
    EDIT_DELETE_WAIST_COAT_NECK_PROGRESS, EDIT_DELETE_WAIST_COAT_NECK_SUCCESS, EDIT_DELETE_WAIST_COAT_NECK_FAILURE,

    UPLOAD_WAIST_COAT_NECK_IMAGE_PROGRESS,
    UPLOAD_WAIST_COAT_NECK_IMAGE_SUCCESS,
    UPLOAD_WAIST_COAT_NECK_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    waist_coat_neck: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    waist_coat_neck_image: " ",
}

const waist_coat_neck_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_WAIST_COAT_NECK_LIST_SUCCESS:
            return { ...state, waist_coat_neck: action.waist_coat_neck, loading: false };
        case GET_WAIST_COAT_NECK_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_WAIST_COAT_NECK_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_WAIST_COAT_NECK_PROGRESS:
            return { ...state, loading: true };
        case ADD_WAIST_COAT_NECK_SUCCESS:
            return { ...state, waist_coat_neck: [...state.waist_coat_neck, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_WAIST_COAT_NECK_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_WAIST_COAT_NECK_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_WAIST_COAT_NECK_SUCCESS:
            return {
                ...state,
                waist_coat_neck: state.waist_coat_neck.map((waist_coat_neck) =>
                waist_coat_neck.id === action.payload.id ? action.payload : waist_coat_neck
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_WAIST_COAT_NECK_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_WAIST_COAT_NECK_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_WAIST_COAT_NECK_IMAGE_SUCCESS:
            return { ...state, waist_coat_neck_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_WAIST_COAT_NECK_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default waist_coat_neck_master_reducer;