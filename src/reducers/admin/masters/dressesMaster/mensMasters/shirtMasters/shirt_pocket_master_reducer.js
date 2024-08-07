import {
    GET_SHIRT_POCKET_LIST_PROGRESS, GET_SHIRT_POCKET_LIST_SUCCESS, GET_SHIRT_POCKET_LIST_FAILURE,
    ADD_SHIRT_POCKET_PROGRESS, ADD_SHIRT_POCKET_SUCCESS, ADD_SHIRT_POCKET_FAILURE,
    EDIT_DELETE_SHIRT_POCKET_PROGRESS, EDIT_DELETE_SHIRT_POCKET_SUCCESS, EDIT_DELETE_SHIRT_POCKET_FAILURE,
  
    UPLOAD_SHIRT_POCKET_IMAGE_PROGRESS,
    UPLOAD_SHIRT_POCKET_IMAGE_SUCCESS,
    UPLOAD_SHIRT_POCKET_IMAGE_FAILURE,

    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    shirt_pocket: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    shirt_pocket_image: "",
}

const shirt_pocket_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SHIRT_POCKET_LIST_SUCCESS:
            return { ...state, shirt_pocket: action.shirt_pocket, loading: false };
        case GET_SHIRT_POCKET_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHIRT_POCKET_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHIRT_POCKET_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHIRT_POCKET_SUCCESS:
            return { ...state, shirt_pocket: [...state.shirt_pocket, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHIRT_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHIRT_POCKET_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHIRT_POCKET_SUCCESS:
            return {
                ...state,
                shirt_pocket: state.shirt_pocket.map((shirt_pocket) =>
                    shirt_pocket.id === action.payload.id ? action.payload : shirt_pocket
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHIRT_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

            case UPLOAD_SHIRT_POCKET_IMAGE_PROGRESS:
                return { ...state, loading: true };
            case UPLOAD_SHIRT_POCKET_IMAGE_SUCCESS:
                return { ...state, shirt_pocket_image: action.payload.result || "", loading: false, error: false, };
            case UPLOAD_SHIRT_POCKET_IMAGE_FAILURE:
                return { ...state, loading: false, error: action.payload, message: action.payload.message };
    

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default shirt_pocket_master_reducer;