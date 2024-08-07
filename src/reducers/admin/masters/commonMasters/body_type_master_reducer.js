import {
    GET_BODY_TYPE_LIST_PROGRESS, GET_BODY_TYPE_LIST_SUCCESS, GET_BODY_TYPE_LIST_FAILURE,
    ADD_BODY_TYPE_PROGRESS, ADD_BODY_TYPE_SUCCESS, ADD_BODY_TYPE_FAILURE,
    EDIT_DELETE_BODY_TYPE_PROGRESS, EDIT_DELETE_BODY_TYPE_SUCCESS, EDIT_DELETE_BODY_TYPE_FAILURE,

    UPLOAD_BODY_TYPE_IMAGE_PROGRESS,
    UPLOAD_BODY_TYPE_IMAGE_SUCCESS,
    UPLOAD_BODY_TYPE_IMAGE_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    body_type: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    body_type_image: "",
}

const body_type_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_BODY_TYPE_LIST_SUCCESS:
            return { ...state, body_type: action.body_type, loading: false };
        case GET_BODY_TYPE_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_BODY_TYPE_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_BODY_TYPE_PROGRESS:
            return { ...state, loading: true };
        case ADD_BODY_TYPE_SUCCESS:
            return { ...state, body_type: [...state.body_type, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_BODY_TYPE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_BODY_TYPE_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_BODY_TYPE_SUCCESS:
            return {
                ...state,
                body_type: state.body_type.map((body_type) =>
                    body_type.id === action.payload.id ? action.payload : body_type
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_BODY_TYPE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_BODY_TYPE_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_BODY_TYPE_IMAGE_SUCCESS:
            return { ...state, body_type_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_BODY_TYPE_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default body_type_master_reducer;