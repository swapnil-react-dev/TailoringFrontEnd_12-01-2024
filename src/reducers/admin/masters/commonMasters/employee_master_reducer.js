import {
    GET_EMPLOYEE_LIST_PROGRESS, GET_EMPLOYEE_LIST_SUCCESS, GET_EMPLOYEE_LIST_FAILURE,
    ADD_EMPLOYEE_PROGRESS, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAILURE,
    EDIT_DELETE_EMPLOYEE_PROGRESS, EDIT_DELETE_EMPLOYEE_SUCCESS, EDIT_DELETE_EMPLOYEE_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    employee: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const employee_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_EMPLOYEE_LIST_SUCCESS:
            return { ...state, employee: action.employee, loading: false };
        case GET_EMPLOYEE_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_EMPLOYEE_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_EMPLOYEE_PROGRESS:
            return { ...state, loading: true };
        case ADD_EMPLOYEE_SUCCESS:
            return { ...state, employee: [...state.employee, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_EMPLOYEE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_EMPLOYEE_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employee: state.employee.map((employee) =>
                    employee.id === action.payload.id ? action.payload : employee
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_EMPLOYEE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default employee_master_reducer;