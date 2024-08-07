import {
    GET_WAIST_COAT_POCKET_LIST_PROGRESS, GET_WAIST_COAT_POCKET_LIST_SUCCESS, GET_WAIST_COAT_POCKET_LIST_FAILURE,
    ADD_WAIST_COAT_POCKET_PROGRESS, ADD_WAIST_COAT_POCKET_SUCCESS, ADD_WAIST_COAT_POCKET_FAILURE,
    EDIT_DELETE_WAIST_COAT_POCKET_PROGRESS, EDIT_DELETE_WAIST_COAT_POCKET_SUCCESS, EDIT_DELETE_WAIST_COAT_POCKET_FAILURE,

    UPLOAD_WAIST_COAT_POCKET_IMAGE_PROGRESS,
    UPLOAD_WAIST_COAT_POCKET_IMAGE_SUCCESS,
    UPLOAD_WAIST_COAT_POCKET_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    waist_coat_pocket: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    waist_coat_pocket_image: " ",
}

const waist_coat_pocket_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_WAIST_COAT_POCKET_LIST_SUCCESS:
            return { ...state, waist_coat_pocket: action.waist_coat_pocket, loading: false };
        case GET_WAIST_COAT_POCKET_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_WAIST_COAT_POCKET_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_WAIST_COAT_POCKET_PROGRESS:
            return { ...state, loading: true };
        case ADD_WAIST_COAT_POCKET_SUCCESS:
            return { ...state, waist_coat_pocket: [...state.waist_coat_pocket, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_WAIST_COAT_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_WAIST_COAT_POCKET_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_WAIST_COAT_POCKET_SUCCESS:
            return {
                ...state,
                waist_coat_pocket: state.waist_coat_pocket.map((waist_coat_pocket) =>
                waist_coat_pocket.id === action.payload.id ? action.payload : waist_coat_pocket
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_WAIST_COAT_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_WAIST_COAT_POCKET_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_WAIST_COAT_POCKET_IMAGE_SUCCESS:
            return { ...state, waist_coat_pocket_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_WAIST_COAT_POCKET_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default waist_coat_pocket_master_reducer;