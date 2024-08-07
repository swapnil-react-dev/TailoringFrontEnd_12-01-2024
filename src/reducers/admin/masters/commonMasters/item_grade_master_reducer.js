import {
    GET_ITEM_GRADE_LIST_PROGRESS, GET_ITEM_GRADE_LIST_SUCCESS, GET_ITEM_GRADE_LIST_FAILURE,
    ADD_ITEM_GRADE_PROGRESS, ADD_ITEM_GRADE_SUCCESS, ADD_ITEM_GRADE_FAILURE,
    EDIT_DELETE_ITEM_GRADE_PROGRESS, EDIT_DELETE_ITEM_GRADE_SUCCESS, EDIT_DELETE_ITEM_GRADE_FAILURE,
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    item_grade: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const item_grade_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ITEM_GRADE_LIST_SUCCESS:
            return { ...state, item_grade: action.item_grade, loading: false };
        case GET_ITEM_GRADE_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_ITEM_GRADE_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_ITEM_GRADE_PROGRESS:
            return { ...state, loading: true };
        case ADD_ITEM_GRADE_SUCCESS:
            return { ...state, item_grade: [...state.item_grade, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_ITEM_GRADE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_ITEM_GRADE_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_ITEM_GRADE_SUCCESS:
            return {
                ...state,
                item_grade: state.item_grade.map((item_grade) =>
                item_grade.id === action.payload.id ? action.payload : item_grade
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_ITEM_GRADE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default item_grade_master_reducer;