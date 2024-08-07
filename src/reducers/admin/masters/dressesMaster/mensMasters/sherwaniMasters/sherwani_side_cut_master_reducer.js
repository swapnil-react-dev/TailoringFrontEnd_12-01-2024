import {
    GET_SHERWANI_SIDE_CUT_LIST_PROGRESS, GET_SHERWANI_SIDE_CUT_LIST_SUCCESS, GET_SHERWANI_SIDE_CUT_LIST_FAILURE,
    ADD_SHERWANI_SIDE_CUT_PROGRESS, ADD_SHERWANI_SIDE_CUT_SUCCESS, ADD_SHERWANI_SIDE_CUT_FAILURE,
    EDIT_DELETE_SHERWANI_SIDE_CUT_PROGRESS, EDIT_DELETE_SHERWANI_SIDE_CUT_SUCCESS, EDIT_DELETE_SHERWANI_SIDE_CUT_FAILURE,

    UPLOAD_SHERWANI_SIDE_CUT_IMAGE_PROGRESS,
    UPLOAD_SHERWANI_SIDE_CUT_IMAGE_SUCCESS,
    UPLOAD_SHERWANI_SIDE_CUT_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    sherwani_side_cut : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    sherwani_side_cut_image: " ",
}

const sherwani_side_cut_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_SHERWANI_SIDE_CUT_LIST_SUCCESS:
            return { ...state, sherwani_side_cut: action.sherwani_side_cut, loading: false };
        case GET_SHERWANI_SIDE_CUT_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHERWANI_SIDE_CUT_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHERWANI_SIDE_CUT_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHERWANI_SIDE_CUT_SUCCESS:
            return { ...state, sherwani_side_cut: [...state.sherwani_side_cut, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHERWANI_SIDE_CUT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHERWANI_SIDE_CUT_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHERWANI_SIDE_CUT_SUCCESS:
            return {
                ...state,
                sherwani_side_cut: state.sherwani_side_cut.map((sherwani_side_cut) =>
                sherwani_side_cut.id === action.payload.id ? action.payload : sherwani_side_cut
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHERWANI_SIDE_CUT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_SHERWANI_SIDE_CUT_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_SHERWANI_SIDE_CUT_IMAGE_SUCCESS:
            return { ...state, sherwani_side_cut_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_SHERWANI_SIDE_CUT_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default sherwani_side_cut_master_reducer;