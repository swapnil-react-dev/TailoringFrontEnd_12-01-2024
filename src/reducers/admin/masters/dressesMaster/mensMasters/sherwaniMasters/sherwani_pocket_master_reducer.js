import {
    GET_SHERWANI_POCKET_LIST_PROGRESS, GET_SHERWANI_POCKET_LIST_SUCCESS, GET_SHERWANI_POCKET_LIST_FAILURE,
    ADD_SHERWANI_POCKET_PROGRESS, ADD_SHERWANI_POCKET_SUCCESS, ADD_SHERWANI_POCKET_FAILURE,
    EDIT_DELETE_SHERWANI_POCKET_PROGRESS, EDIT_DELETE_SHERWANI_POCKET_SUCCESS, EDIT_DELETE_SHERWANI_POCKET_FAILURE,

    UPLOAD_SHERWANI_POCKET_IMAGE_PROGRESS,
    UPLOAD_SHERWANI_POCKET_IMAGE_SUCCESS,
    UPLOAD_SHERWANI_POCKET_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    sherwani_pocket : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    sherwani_pocket_image: " ",
}

const sherwani_pocket_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_SHERWANI_POCKET_LIST_SUCCESS:
            return { ...state, sherwani_pocket: action.sherwani_pocket, loading: false };
        case GET_SHERWANI_POCKET_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHERWANI_POCKET_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHERWANI_POCKET_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHERWANI_POCKET_SUCCESS:
            return { ...state, sherwani_pocket: [...state.sherwani_pocket, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHERWANI_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHERWANI_POCKET_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHERWANI_POCKET_SUCCESS:
            return {
                ...state,
                sherwani_pocket: state.sherwani_pocket.map((sherwani_pocket) =>
                sherwani_pocket.id === action.payload.id ? action.payload : sherwani_pocket
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHERWANI_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_SHERWANI_POCKET_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_SHERWANI_POCKET_IMAGE_SUCCESS:
            return { ...state, sherwani_pocket_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_SHERWANI_POCKET_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default sherwani_pocket_master_reducer;