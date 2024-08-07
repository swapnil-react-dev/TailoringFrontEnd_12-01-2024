import {
    GET_KURTA_SLEEVE_LIST_PROGRESS, GET_KURTA_SLEEVE_LIST_SUCCESS, GET_KURTA_SLEEVE_LIST_FAILURE,
    ADD_KURTA_SLEEVE_PROGRESS, ADD_KURTA_SLEEVE_SUCCESS, ADD_KURTA_SLEEVE_FAILURE,
    EDIT_DELETE_KURTA_SLEEVE_PROGRESS, EDIT_DELETE_KURTA_SLEEVE_SUCCESS, EDIT_DELETE_KURTA_SLEEVE_FAILURE,

    UPLOAD_KURTA_SLEEVE_IMAGE_PROGRESS,
    UPLOAD_KURTA_SLEEVE_IMAGE_SUCCESS,
    UPLOAD_KURTA_SLEEVE_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    kurta_sleeve : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    kurta_sleeve_image: " ",
}

const kurta_sleeve_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_KURTA_SLEEVE_LIST_SUCCESS:
            return { ...state, kurta_sleeve: action.kurta_sleeve, loading: false };
        case GET_KURTA_SLEEVE_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_KURTA_SLEEVE_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_KURTA_SLEEVE_PROGRESS:
            return { ...state, loading: true };
        case ADD_KURTA_SLEEVE_SUCCESS:
            return { ...state, kurta_sleeve: [...state.kurta_sleeve, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_KURTA_SLEEVE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_KURTA_SLEEVE_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_KURTA_SLEEVE_SUCCESS:
            return {
                ...state,
                kurta_sleeve: state.kurta_sleeve.map((kurta_sleeve) =>
                kurta_sleeve.id === action.payload.id ? action.payload : kurta_sleeve
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_KURTA_SLEEVE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_KURTA_SLEEVE_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_KURTA_SLEEVE_IMAGE_SUCCESS:
            return { ...state, kurta_sleeve_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_KURTA_SLEEVE_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default kurta_sleeve_master_reducer;