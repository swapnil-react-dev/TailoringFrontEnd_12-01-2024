import {
    GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_PROGRESS, GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_SUCCESS, GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_FAILURE,
    ADD_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS, ADD_SHIRT_COLLAR_CUFF_THICKNESS_SUCCESS, ADD_SHIRT_COLLAR_CUFF_THICKNESS_FAILURE,
    EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS, EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_SUCCESS, EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_FAILURE,
    
    UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_PROGRESS,
    UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_SUCCESS,
    UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_FAILURE,

    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    shirt_collar_cuff_thickness: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    shirt_collar_cuff_thickness_image: "",
}

const shirt_collar_cuff_thickness_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_SUCCESS:
            return { ...state, shirt_collar_cuff_thickness: action.shirt_collar_cuff_thickness, loading: false };
        case GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHIRT_COLLAR_CUFF_THICKNESS_SUCCESS:
            return { ...state, shirt_collar_cuff_thickness: [...state.shirt_collar_cuff_thickness, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHIRT_COLLAR_CUFF_THICKNESS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_SUCCESS:
            return {
                ...state,
                shirt_collar_cuff_thickness: state.shirt_collar_cuff_thickness.map((shirt_collar_cuff_thickness) =>
                    shirt_collar_cuff_thickness.id === action.payload.id ? action.payload : shirt_collar_cuff_thickness
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

            case UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_PROGRESS:
                return { ...state, loading: true };
            case UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_SUCCESS:
                return { ...state, shirt_collar_cuff_thickness_image: action.payload.result || "", loading: false, error: false, };
            case UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_FAILURE:
                return { ...state, loading: false, error: action.payload, message: action.payload.message };
    

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default shirt_collar_cuff_thickness_master_reducer;