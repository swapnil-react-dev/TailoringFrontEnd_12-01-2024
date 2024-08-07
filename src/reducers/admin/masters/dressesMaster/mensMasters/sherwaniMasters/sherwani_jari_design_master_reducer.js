import {
    GET_SHERWANI_JARI_DESIGN_LIST_PROGRESS, GET_SHERWANI_JARI_DESIGN_LIST_SUCCESS, GET_SHERWANI_JARI_DESIGN_LIST_FAILURE,
    ADD_SHERWANI_JARI_DESIGN_PROGRESS, ADD_SHERWANI_JARI_DESIGN_SUCCESS, ADD_SHERWANI_JARI_DESIGN_FAILURE,
    EDIT_DELETE_SHERWANI_JARI_DESIGN_PROGRESS, EDIT_DELETE_SHERWANI_JARI_DESIGN_SUCCESS, EDIT_DELETE_SHERWANI_JARI_DESIGN_FAILURE,

    UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_PROGRESS,
    UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_SUCCESS,
    UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    sherwani_jari_design : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    sherwani_jari_design_image: " ",
}

const sherwani_jari_design_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_SHERWANI_JARI_DESIGN_LIST_SUCCESS:
            return { ...state, sherwani_jari_design: action.sherwani_jari_design, loading: false };
        case GET_SHERWANI_JARI_DESIGN_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHERWANI_JARI_DESIGN_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHERWANI_JARI_DESIGN_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHERWANI_JARI_DESIGN_SUCCESS:
            return { ...state, sherwani_jari_design: [...state.sherwani_jari_design, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHERWANI_JARI_DESIGN_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHERWANI_JARI_DESIGN_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHERWANI_JARI_DESIGN_SUCCESS:
            return {
                ...state,
                sherwani_jari_design: state.sherwani_jari_design.map((sherwani_jari_design) =>
                sherwani_jari_design.id === action.payload.id ? action.payload : sherwani_jari_design
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHERWANI_JARI_DESIGN_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_SUCCESS:
            return { ...state, sherwani_jari_design_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default sherwani_jari_design_master_reducer;