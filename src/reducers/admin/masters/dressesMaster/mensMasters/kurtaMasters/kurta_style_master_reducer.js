import {
    GET_KURTA_STYLE_LIST_PROGRESS, GET_KURTA_STYLE_LIST_SUCCESS, GET_KURTA_STYLE_LIST_FAILURE,
    ADD_KURTA_STYLE_PROGRESS, ADD_KURTA_STYLE_SUCCESS, ADD_KURTA_STYLE_FAILURE,
    EDIT_DELETE_KURTA_STYLE_PROGRESS, EDIT_DELETE_KURTA_STYLE_SUCCESS, EDIT_DELETE_KURTA_STYLE_FAILURE,

    UPLOAD_KURTA_STYLE_IMAGE_PROGRESS,
    UPLOAD_KURTA_STYLE_IMAGE_SUCCESS,
    UPLOAD_KURTA_STYLE_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    kurta_style : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    kurta_style_image: " ",
}

const kurta_style_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_KURTA_STYLE_LIST_SUCCESS:
            return { ...state, kurta_style: action.kurta_style, loading: false };
        case GET_KURTA_STYLE_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_KURTA_STYLE_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_KURTA_STYLE_PROGRESS:
            return { ...state, loading: true };
        case ADD_KURTA_STYLE_SUCCESS:
            return { ...state, kurta_style: [...state.kurta_style, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_KURTA_STYLE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_KURTA_STYLE_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_KURTA_STYLE_SUCCESS:
            return {
                ...state,
                kurta_style: state.kurta_style.map((kurta_style) =>
                kurta_style.id === action.payload.id ? action.payload : kurta_style
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_KURTA_STYLE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_KURTA_STYLE_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_KURTA_STYLE_IMAGE_SUCCESS:
            return { ...state, kurta_style_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_KURTA_STYLE_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default kurta_style_master_reducer;