import {
    GET_SHERWANI_CUFF_LIST_PROGRESS, GET_SHERWANI_CUFF_LIST_SUCCESS, GET_SHERWANI_CUFF_LIST_FAILURE,
    ADD_SHERWANI_CUFF_PROGRESS, ADD_SHERWANI_CUFF_SUCCESS, ADD_SHERWANI_CUFF_FAILURE,
    EDIT_DELETE_SHERWANI_CUFF_PROGRESS, EDIT_DELETE_SHERWANI_CUFF_SUCCESS, EDIT_DELETE_SHERWANI_CUFF_FAILURE,

    UPLOAD_SHERWANI_CUFF_IMAGE_PROGRESS,
    UPLOAD_SHERWANI_CUFF_IMAGE_SUCCESS,
    UPLOAD_SHERWANI_CUFF_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    sherwani_cuff : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    sherwani_cuff_image: " ",
}

const sherwani_cuff_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_SHERWANI_CUFF_LIST_SUCCESS:
            return { ...state, sherwani_cuff: action.sherwani_cuff, loading: false };
        case GET_SHERWANI_CUFF_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHERWANI_CUFF_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHERWANI_CUFF_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHERWANI_CUFF_SUCCESS:
            return { ...state, sherwani_cuff: [...state.sherwani_cuff, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHERWANI_CUFF_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHERWANI_CUFF_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHERWANI_CUFF_SUCCESS:
            return {
                ...state,
                sherwani_cuff: state.sherwani_cuff.map((sherwani_cuff) =>
                sherwani_cuff.id === action.payload.id ? action.payload : sherwani_cuff
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHERWANI_CUFF_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_SHERWANI_CUFF_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_SHERWANI_CUFF_IMAGE_SUCCESS:
            return { ...state, sherwani_cuff_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_SHERWANI_CUFF_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default sherwani_cuff_master_reducer;