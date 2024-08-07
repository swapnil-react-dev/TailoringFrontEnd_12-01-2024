import {
    GET_KURTA_POCKET_LIST_PROGRESS, GET_KURTA_POCKET_LIST_SUCCESS, GET_KURTA_POCKET_LIST_FAILURE,
    ADD_KURTA_POCKET_PROGRESS, ADD_KURTA_POCKET_SUCCESS, ADD_KURTA_POCKET_FAILURE,
    EDIT_DELETE_KURTA_POCKET_PROGRESS, EDIT_DELETE_KURTA_POCKET_SUCCESS, EDIT_DELETE_KURTA_POCKET_FAILURE,

    UPLOAD_KURTA_POCKET_IMAGE_PROGRESS,
    UPLOAD_KURTA_POCKET_IMAGE_SUCCESS,
    UPLOAD_KURTA_POCKET_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    kurta_pocket : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    kurta_pocket_image: " ",
}

const kurta_pocket_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_KURTA_POCKET_LIST_SUCCESS:
            return { ...state, kurta_pocket: action.kurta_pocket, loading: false };
        case GET_KURTA_POCKET_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_KURTA_POCKET_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_KURTA_POCKET_PROGRESS:
            return { ...state, loading: true };
        case ADD_KURTA_POCKET_SUCCESS:
            return { ...state, kurta_pocket: [...state.kurta_pocket, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_KURTA_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_KURTA_POCKET_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_KURTA_POCKET_SUCCESS:
            return {
                ...state,
                kurta_pocket: state.kurta_pocket.map((kurta_pocket) =>
                kurta_pocket.id === action.payload.id ? action.payload : kurta_pocket
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_KURTA_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_KURTA_POCKET_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_KURTA_POCKET_IMAGE_SUCCESS:
            return { ...state, kurta_pocket_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_KURTA_POCKET_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default kurta_pocket_master_reducer;