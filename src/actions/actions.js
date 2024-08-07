import {
    LOGIN_PROGRESS, LOGOUT_PROGRESS,
    GET_USER_LIST_PROGRESS, ADD_USER_PROGRESS, EDIT_DELETE_USER_PROGRESS,
    GET_BODY_TYPE_LIST_PROGRESS, ADD_BODY_TYPE_PROGRESS, EDIT_DELETE_BODY_TYPE_PROGRESS, GET_BRAND_LIST_PROGRESS, ADD_BRAND_PROGRESS, EDIT_DELETE_BRAND_PROGRESS, GET_CHARGES_LIST_PROGRESS, ADD_CHARGES_PROGRESS, EDIT_DELETE_CHARGES_PROGRESS, GET_COLOR_LIST_PROGRESS, ADD_COLOR_PROGRESS, EDIT_DELETE_COLOR_PROGRESS, GET_EMPLOYEE_LIST_PROGRESS, ADD_EMPLOYEE_PROGRESS, EDIT_DELETE_EMPLOYEE_PROGRESS, GET_FABRIC_FEEL_LIST_PROGRESS, ADD_FABRIC_FEEL_PROGRESS, EDIT_DELETE_FABRIC_FEEL_PROGRESS, GET_FABRIC_MATERIAL_LIST_PROGRESS, ADD_FABRIC_MATERIAL_PROGRESS, EDIT_DELETE_FABRIC_MATERIAL_PROGRESS, GET_FABRIC_QUALITY_LIST_PROGRESS, ADD_FABRIC_QUALITY_PROGRESS, EDIT_DELETE_FABRIC_QUALITY_PROGRESS, GET_FABRIC_USE_LIST_PROGRESS, ADD_FABRIC_USE_PROGRESS, EDIT_DELETE_FABRIC_USE_PROGRESS, GET_OCCASION_LIST_PROGRESS, ADD_OCCASION_PROGRESS, EDIT_DELETE_OCCASION_PROGRESS, GET_PATTERN_LIST_PROGRESS, ADD_PATTERN_PROGRESS, EDIT_DELETE_PATTERN_PROGRESS, GET_ROLE_LIST_PROGRESS, ADD_ROLE_PROGRESS, EDIT_DELETE_ROLE_PROGRESS, GET_UNIT_LIST_PROGRESS, ADD_UNIT_PROGRESS, EDIT_DELETE_UNIT_PROGRESS, EDIT_DELETE_SHIRT_BACKPLEAT_PROGRESS, ADD_SHIRT_BACKPLEAT_PROGRESS, GET_SHIRT_BACKPLEAT_LIST_PROGRESS, GET_SHIRT_BOTTOM_LIST_PROGRESS, ADD_SHIRT_BOTTOM_PROGRESS, EDIT_DELETE_SHIRT_BOTTOM_PROGRESS, EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS, ADD_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS, GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_PROGRESS, EDIT_DELETE_SHIRT_COLLAR_PROGRESS, ADD_SHIRT_COLLAR_PROGRESS, GET_SHIRT_COLLAR_LIST_PROGRESS, GET_SHIRT_CUFF_LIST_PROGRESS, ADD_SHIRT_CUFF_PROGRESS, EDIT_DELETE_SHIRT_CUFF_PROGRESS, GET_SHIRT_FITTING_LIST_PROGRESS, ADD_SHIRT_FITTING_PROGRESS, EDIT_DELETE_SHIRT_FITTING_PROGRESS, GET_SHIRT_FRONT_LIST_PROGRESS, ADD_SHIRT_FRONT_PROGRESS, EDIT_DELETE_SHIRT_FRONT_PROGRESS, GET_SHIRT_POCKET_LIST_PROGRESS, ADD_SHIRT_POCKET_PROGRESS, EDIT_DELETE_SHIRT_POCKET_PROGRESS, EDIT_DELETE_TROUSER_BOTTOM_PROGRESS, ADD_TROUSER_BOTTOM_PROGRESS, GET_TROUSER_BOTTOM_LIST_PROGRESS, GET_TROUSER_CROTCH_LIST_PROGRESS, ADD_TROUSER_CROTCH_PROGRESS, EDIT_DELETE_TROUSER_CROTCH_PROGRESS, GET_TROUSER_POCKET_LIST_PROGRESS, ADD_TROUSER_POCKET_PROGRESS, EDIT_DELETE_TROUSER_POCKET_PROGRESS, UPLOAD_BODY_TYPE_IMAGE_PROGRESS, GET_FABRICS_LIST_PROGRESS, ADD_FABRICS_PROGRESS, EDIT_DELETE_FABRICS_PROGRESS, EDIT_DELETE_MANUFRACTURERS_PROGRESS, ADD_MANUFRACTURERS_PROGRESS, GET_MANUFRACTURERS_LIST_PROGRESS, GET_STITCHING_CENTERS_LIST_PROGRESS, ADD_STITCHING_CENTERS_PROGRESS, EDIT_DELETE_STITCHING_CENTERS_PROGRESS, EDIT_DELETE_TAILOR_SHOPS_PROGRESS, ADD_TAILOR_SHOPS_PROGRESS, GET_TAILOR_SHOPS_LIST_PROGRESS, UPLOAD_SHIRT_COLLAR_IMAGE_PROGRESS, UPLOAD_SHIRT_BACKPLEAT_IMAGE_PROGRESS, UPLOAD_SHIRT_BOTTOM_IMAGE_PROGRESS, UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_PROGRESS, UPLOAD_SHIRT_FRONT_IMAGE_PROGRESS, UPLOAD_SHIRT_POCKET_IMAGE_PROGRESS, UPLOAD_TROUSER_POCKET_IMAGE_PROGRESS, UPLOAD_TROUSER_BOTTOM_IMAGE_PROGRESS, UPLOAD_TROUSER_CROTCH_IMAGE_PROGRESS, GET_WAIST_COAT_BOTTOM_TYPE_LIST_PROGRESS, ADD_WAIST_COAT_BOTTOM_TYPE_PROGRESS, EDIT_DELETE_WAIST_COAT_BOTTOM_TYPE_PROGRESS, UPLOAD_WAIST_COAT_BOTTOM_TYPE_IMAGE_PROGRESS, GET_WAIST_COAT_TYPE_LIST_PROGRESS, ADD_WAIST_COAT_TYPE_PROGRESS, EDIT_DELETE_WAIST_COAT_TYPE_PROGRESS, UPLOAD_WAIST_COAT_TYPE_IMAGE_SUCCESS, UPLOAD_WAIST_COAT_TYPE_IMAGE_PROGRESS, GET_WAIST_COAT_NECK_LIST_PROGRESS, ADD_WAIST_COAT_NECK_PROGRESS, EDIT_DELETE_WAIST_COAT_NECK_PROGRESS, UPLOAD_WAIST_COAT_NECK_IMAGE_PROGRESS, GET_WAIST_COAT_POCKET_LIST_PROGRESS, UPLOAD_WAIST_COAT_POCKET_IMAGE_PROGRESS, EDIT_DELETE_WAIST_COAT_POCKET_PROGRESS, ADD_WAIST_COAT_POCKET_PROGRESS, GET_SHERWANI_COLLAR_DESIGN_LIST_PROGRESS, ADD_SHERWANI_COLLAR_DESIGN_PROGRESS, EDIT_DELETE_SHERWANI_COLLAR_DESIGN_PROGRESS, UPLOAD_SHERWANI_COLLAR_DESIGN_IMAGE_PROGRESS, EDIT_DELETE_SHERWANI_COLLAR_PROGRESS, UPLOAD_SHERWANI_COLLAR_IMAGE_PROGRESS, GET_SHERWANI_COLLAR_LIST_PROGRESS, ADD_SHERWANI_COLLAR_PROGRESS, GET_SHERWANI_CUFF_DESIGN_LIST_PROGRESS, ADD_SHERWANI_CUFF_DESIGN_PROGRESS, UPLOAD_SHERWANI_CUFF_DESIGN_IMAGE_PROGRESS, EDIT_DELETE_SHERWANI_CUFF_DESIGN_PROGRESS, ADD_SHERWANI_CUFF_PROGRESS, EDIT_DELETE_SHERWANI_CUFF_PROGRESS, UPLOAD_SHERWANI_CUFF_IMAGE_PROGRESS, GET_SHERWANI_CUFF_LIST_PROGRESS, GET_SHERWANI_FRONT_LIST_PROGRESS, ADD_SHERWANI_FRONT_PROGRESS, EDIT_DELETE_SHERWANI_FRONT_PROGRESS, UPLOAD_SHERWANI_FRONT_IMAGE_PROGRESS, GET_SHERWANI_JARI_DESIGN_LIST_PROGRESS, ADD_SHERWANI_JARI_DESIGN_PROGRESS, EDIT_DELETE_SHERWANI_JARI_DESIGN_PROGRESS, UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_PROGRESS, GET_SHERWANI_POCKET_LIST_PROGRESS, ADD_SHERWANI_POCKET_PROGRESS, EDIT_DELETE_SHERWANI_POCKET_PROGRESS, UPLOAD_SHERWANI_POCKET_IMAGE_PROGRESS, GET_SHERWANI_SIDE_CUT_LIST_PROGRESS, ADD_SHERWANI_SIDE_CUT_PROGRESS, EDIT_DELETE_SHERWANI_SIDE_CUT_PROGRESS, UPLOAD_SHERWANI_SIDE_CUT_IMAGE_PROGRESS, GET_KURTA_COLLAR_LIST_PROGRESS, ADD_KURTA_COLLAR_PROGRESS, EDIT_DELETE_KURTA_COLLAR_PROGRESS, UPLOAD_KURTA_COLLAR_IMAGE_PROGRESS, GET_KURTA_FRONT_LIST_PROGRESS, ADD_KURTA_FRONT_PROGRESS, EDIT_DELETE_KURTA_FRONT_PROGRESS, UPLOAD_KURTA_FRONT_IMAGE_PROGRESS, GET_KURTA_POCKET_LIST_PROGRESS, ADD_KURTA_POCKET_PROGRESS, EDIT_DELETE_KURTA_POCKET_PROGRESS, UPLOAD_KURTA_POCKET_IMAGE_PROGRESS, GET_KURTA_SLEEVE_LIST_PROGRESS, ADD_KURTA_SLEEVE_PROGRESS, EDIT_DELETE_KURTA_SLEEVE_PROGRESS, UPLOAD_KURTA_SLEEVE_IMAGE_PROGRESS, GET_KURTA_STYLE_LIST_PROGRESS, EDIT_DELETE_KURTA_STYLE_PROGRESS, UPLOAD_KURTA_STYLE_IMAGE_PROGRESS, ADD_KURTA_STYLE_PROGRESS, GET_GRN_LIST_PROGRESS, ADD_GRN_PROGRESS, EDIT_DELETE_GRN_PROGRESS, ADD_ORDER_ISSUE_PROGRESS, EDIT_DELETE_ORDER_ISSUE_PROGRESS, GET_ORDERS_LIST_PROGRESS, GET_ITEM_LIST_PROGRESS, GET_ITEM_GRADE_LIST_PROGRESS, ADD_ITEM_GRADE_PROGRESS, EDIT_DELETE_ITEM_GRADE_PROGRESS, GET_ITEM_CATEGORY_LIST_PROGRESS, ADD_ITEM_PROGRESS, EDIT_DELETE_ITEM_PROGRESS, GET_ORDER_ISSUE_LIST_PROGRESS, GET_USER_ADDRESSES_LIST_PROGRESS, ADD_USER_ADDRESSES_PROGRESS, EDIT_DELETE_USER_ADDRESSES_PROGRESS, GET_USER_MEASUREMENTS_LIST_PROGRESS, ADD_USER_MEASUREMENTS_PROGRESS, EDIT_DELETE_USER_MEASUREMENTS_PROGRESS, GET_USER_MEASUREMENTS_UPPERBODY_LIST_PROGRESS, ADD_USER_MEASUREMENTS_UPPERBODY_PROGRESS, EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_PROGRESS, GET_USER_MEASUREMENTS_LOWERBODY_LIST_PROGRESS, ADD_USER_MEASUREMENTS_LOWERBODY_PROGRESS, EDIT_DELETE_USER_MEASUREMENTS_LOWERBODY_PROGRESS, GET_STANDARD_MEASUREMENTS_UPPERBODY_LIST_PROGRESS, ADD_STANDARD_MEASUREMENTS_UPPERBODY_PROGRESS, EDIT_DELETE_STANDARD_MEASUREMENTS_UPPERBODY_PROGRESS, GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_PROGRESS, ADD_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS, EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS
    

} from '../types/actionTypes';

export const login = (record) => ({
    type: LOGIN_PROGRESS,
    payload: record,
});

export const logout = (record) => ({
    type: LOGOUT_PROGRESS,
    payload: record,
});

// ====================== Admin User Master ===============================

export const getUserList = () => {
    return {
        type: GET_USER_LIST_PROGRESS,
    };
}

export const addUser = (record) => ({
    type: ADD_USER_PROGRESS,
    payload: record,
});

export const editDeleteUser = (record) => ({
    type: EDIT_DELETE_USER_PROGRESS,
    payload: record,
});


// ====================== Body Type Master ===============================

export const getBodyTypeList = () => {
    return {
        type: GET_BODY_TYPE_LIST_PROGRESS,
    };
}

export const addBodyType = (record) => ({
    type: ADD_BODY_TYPE_PROGRESS,
    payload: record,
});

export const editDeleteBodyType = (record) => ({
    type: EDIT_DELETE_BODY_TYPE_PROGRESS,
    payload: record,
});

export const UploadBodyTypeImage = (record) => ({
    type: UPLOAD_BODY_TYPE_IMAGE_PROGRESS,
    payload: record,
});

// ====================== Brand Master ===============================

export const getBrandList = () => {
    return {
        type: GET_BRAND_LIST_PROGRESS,
    };
}

export const addBrand = (record) => ({
    type: ADD_BRAND_PROGRESS,
    payload: record,
});

export const editDeleteBrand = (record) => ({
    type: EDIT_DELETE_BRAND_PROGRESS,
    payload: record,
});

// ====================== Charges Master ===============================

export const getChargesList = () => {
    return {
        type: GET_CHARGES_LIST_PROGRESS,
    };
}

export const addCharges = (record) => ({
    type: ADD_CHARGES_PROGRESS,
    payload: record,
});

export const editDeleteCharges = (record) => ({
    type: EDIT_DELETE_CHARGES_PROGRESS,
    payload: record,
});

// ====================== Color Master ===============================

export const getColorList = () => {
    return {
        type: GET_COLOR_LIST_PROGRESS,
    };
}

export const addColor = (record) => ({
    type: ADD_COLOR_PROGRESS,
    payload: record,
});

export const editDeleteColor = (record) => ({
    type: EDIT_DELETE_COLOR_PROGRESS,
    payload: record,
});


// ====================== Employee Master ===============================

export const getEmployeeList = () => {
    return {
        type: GET_EMPLOYEE_LIST_PROGRESS,
    };
}

export const addEmployee = (record) => ({
    type: ADD_EMPLOYEE_PROGRESS,
    payload: record,
});

export const editDeleteEmployee = (record) => ({
    type: EDIT_DELETE_EMPLOYEE_PROGRESS,
    payload: record,
});

// ====================== Admin User Master ===============================

export const getFabricFeelList = () => {
    return {
        type: GET_FABRIC_FEEL_LIST_PROGRESS,
    };
}

export const addFabricFeel = (record) => ({
    type: ADD_FABRIC_FEEL_PROGRESS,
    payload: record,
});

export const editDeleteFabricFeel = (record) => ({
    type: EDIT_DELETE_FABRIC_FEEL_PROGRESS,
    payload: record,
});

// ====================== Fabric Material Master ===============================

export const getFabricMaterialList = () => {
    return {
        type: GET_FABRIC_MATERIAL_LIST_PROGRESS,
    };
}

export const addFabricMaterial = (record) => ({
    type: ADD_FABRIC_MATERIAL_PROGRESS,
    payload: record,
});

export const editDeleteFabricMaterial = (record) => ({
    type: EDIT_DELETE_FABRIC_MATERIAL_PROGRESS,
    payload: record,
});

// ====================== Fabric Quality Master ===============================

export const getFabricQualityList = () => {
    return {
        type: GET_FABRIC_QUALITY_LIST_PROGRESS,
    };
}

export const addFabricQuality = (record) => ({
    type: ADD_FABRIC_QUALITY_PROGRESS,
    payload: record,
});

export const editDeleteFabricQuality = (record) => ({
    type: EDIT_DELETE_FABRIC_QUALITY_PROGRESS,
    payload: record,
});

// ====================== Fabric Use Master ===============================

export const getFabricUseList = () => {
    return {
        type: GET_FABRIC_USE_LIST_PROGRESS,
    };
}

export const addFabricUse = (record) => ({
    type: ADD_FABRIC_USE_PROGRESS,
    payload: record,
});

export const editDeleteFabricUse = (record) => ({
    type: EDIT_DELETE_FABRIC_USE_PROGRESS,
    payload: record,
});

// ====================== Occasion Master ===============================

export const getOccasionList = () => {
    return {
        type: GET_OCCASION_LIST_PROGRESS,
    };
}

export const addOccasion = (record) => ({
    type: ADD_OCCASION_PROGRESS,
    payload: record,
});

export const editDeleteOccasion = (record) => ({
    type: EDIT_DELETE_OCCASION_PROGRESS,
    payload: record,
});

// ====================== Pattern Master ===============================

export const getPatternList = () => {
    return {
        type: GET_PATTERN_LIST_PROGRESS,
    };
}

export const addPattern = (record) => ({
    type: ADD_PATTERN_PROGRESS,
    payload: record,
});

export const editDeletePattern = (record) => ({
    type: EDIT_DELETE_PATTERN_PROGRESS,
    payload: record,
});

// ====================== Role Master ===============================

export const getRoleList = () => {
    return {
        type: GET_ROLE_LIST_PROGRESS,
    };
}

export const addRole = (record) => ({
    type: ADD_ROLE_PROGRESS,
    payload: record,
});

export const editDeleteRole = (record) => ({
    type: EDIT_DELETE_ROLE_PROGRESS,
    payload: record,
});

// ====================== Unit Master ===============================

export const getUnitList = () => {
    return {
        type: GET_UNIT_LIST_PROGRESS,
    };
}

export const addUnit = (record) => ({
    type: ADD_UNIT_PROGRESS,
    payload: record,
});

export const editDeleteUnit = (record) => ({
    type: EDIT_DELETE_UNIT_PROGRESS,
    payload: record,
});

// ====================== Shirt BackPleat Master ===============================

export const getShirtBackPleatList = () => {
    return {
        type: GET_SHIRT_BACKPLEAT_LIST_PROGRESS,
    };
}

export const addShirtBackPleat = (record) => ({
    type: ADD_SHIRT_BACKPLEAT_PROGRESS,
    payload: record,
});

export const editDeleteShirtBackPleat = (record) => ({
    type: EDIT_DELETE_SHIRT_BACKPLEAT_PROGRESS,
    payload: record,
});

export const UploadShirtBackPleatImage = (record) => ({
    type: UPLOAD_SHIRT_BACKPLEAT_IMAGE_PROGRESS,
    payload: record,
});
// ====================== Shirt Bottom Master ===============================

export const getShirtBottomList = () => {
    return {
        type: GET_SHIRT_BOTTOM_LIST_PROGRESS,
    };
}

export const addShirtBottom = (record) => ({
    type: ADD_SHIRT_BOTTOM_PROGRESS,
    payload: record,
});

export const editDeleteShirtBottom = (record) => ({
    type: EDIT_DELETE_SHIRT_BOTTOM_PROGRESS,
    payload: record,
});

export const UploadShirtBottomImage = (record) => ({
    type: UPLOAD_SHIRT_BOTTOM_IMAGE_PROGRESS,
    payload: record,
});

// ====================== Shirt colaar cuff thickness Master ===============================

export const getShirtCollarCuffThicknessList = () => {
    return {
        type: GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_PROGRESS,
    };
}

export const addShirtCollarCuffThickness = (record) => ({
    type: ADD_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS,
    payload: record,
});

export const editDeleteShirtCollarCuffThickness = (record) => ({
    type: EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS,
    payload: record,
});

export const UploadShirtCollarCuffThicknessImage = (record) => ({
    type: UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_PROGRESS,
    payload: record,
});

// ====================== Shirt collar Master ===============================

export const getShirtCollarList = () => {
    return {
        type: GET_SHIRT_COLLAR_LIST_PROGRESS,
    };
}

export const addShirtCollar = (record) => ({
    type: ADD_SHIRT_COLLAR_PROGRESS,
    payload: record,
});

export const editDeleteShirtCollar = (record) => ({
    type: EDIT_DELETE_SHIRT_COLLAR_PROGRESS,
    payload: record,
});

export const UploadShirtCollarImage = (record) => ({
    type: UPLOAD_SHIRT_COLLAR_IMAGE_PROGRESS,
    payload: record,
});
// ====================== Shirt Cuff Master ===============================

export const getShirtCuffList = () => {
    return {
        type: GET_SHIRT_CUFF_LIST_PROGRESS,
    };
}

export const addShirtCuff = (record) => ({
    type: ADD_SHIRT_CUFF_PROGRESS,
    payload: record,
});

export const editDeleteShirtCuff = (record) => ({
    type: EDIT_DELETE_SHIRT_CUFF_PROGRESS,
    payload: record,
});

// ====================== Shirt Fitting Master ===============================

export const getShirtFittingList = () => {
    return {
        type: GET_SHIRT_FITTING_LIST_PROGRESS,
    };
}

export const addShirtFitting = (record) => ({
    type: ADD_SHIRT_FITTING_PROGRESS,
    payload: record,
});

export const editDeleteShirtFitting = (record) => ({
    type: EDIT_DELETE_SHIRT_FITTING_PROGRESS,
    payload: record,
});

// ====================== Shirt front Master ===============================

export const getShirtFrontList = () => {
    return {
        type: GET_SHIRT_FRONT_LIST_PROGRESS,
    };
}

export const addShirtFront = (record) => ({
    type: ADD_SHIRT_FRONT_PROGRESS,
    payload: record,
});

export const editDeleteShirtFront = (record) => ({
    type: EDIT_DELETE_SHIRT_FRONT_PROGRESS,
    payload: record,
});

export const UploadShirtFrontImage = (record) => ({
    type: UPLOAD_SHIRT_FRONT_IMAGE_PROGRESS,
    payload: record,
});

// ====================== Shirt Pocket Master ===============================

export const getShirtPocketList = () => {
    return {
        type: GET_SHIRT_POCKET_LIST_PROGRESS,
    };
}

export const addShirtPocket = (record) => ({
    type: ADD_SHIRT_POCKET_PROGRESS,
    payload: record,
});

export const editDeleteShirtPocket = (record) => ({
    type: EDIT_DELETE_SHIRT_POCKET_PROGRESS,
    payload: record,
});

export const UploadShirtPocketImage = (record) => ({
    type: UPLOAD_SHIRT_POCKET_IMAGE_PROGRESS,
    payload: record,
});
// ====================== Trouser Bottom Master ===============================

export const getTrouserBottomList = () => {
    return {
        type: GET_TROUSER_BOTTOM_LIST_PROGRESS,
    };
}

export const addTrouserBottom = (record) => ({
    type: ADD_TROUSER_BOTTOM_PROGRESS,
    payload: record,
});

export const editDeleteTrouserBottom = (record) => ({
    type: EDIT_DELETE_TROUSER_BOTTOM_PROGRESS,
    payload: record,
});

export const UploadTrouserBottomImage = (record) => ({
    type: UPLOAD_TROUSER_BOTTOM_IMAGE_PROGRESS,
    payload: record,
});
// ====================== Trouser Crotch Master ===============================

export const getTrouserCrotchList = () => {
    return {
        type: GET_TROUSER_CROTCH_LIST_PROGRESS,
    };
}

export const addTrouserCrotch = (record) => ({
    type: ADD_TROUSER_CROTCH_PROGRESS,
    payload: record,
});

export const editDeleteTrouserCrotch = (record) => ({
    type: EDIT_DELETE_TROUSER_CROTCH_PROGRESS,
    payload: record,
});

export const UploadTrouserCrotchImage = (record) => ({
    type: UPLOAD_TROUSER_CROTCH_IMAGE_PROGRESS,
    payload: record,
});
// ====================== Trouser Pocket Master ===============================
export const getTrouserPocketList = () => {
    return {
        type: GET_TROUSER_POCKET_LIST_PROGRESS,
    };
}

export const addTrouserPocket = (record) => ({
    type: ADD_TROUSER_POCKET_PROGRESS,
    payload: record,
});

export const editDeleteTrouserPocket = (record) => ({
    type: EDIT_DELETE_TROUSER_POCKET_PROGRESS,
    payload: record,
});

export const UploadTrouserPocketImage = (record) => ({
    type: UPLOAD_TROUSER_POCKET_IMAGE_PROGRESS,
    payload: record,
});

// ====================== Fabrics Master ===============================

export const getFabricsList = () => {
    return {
        type: GET_FABRICS_LIST_PROGRESS,
    };
}

export const addFabrics = (record) => ({
    type: ADD_FABRICS_PROGRESS,
    payload: record,
});

export const editDeleteFabrics = (record) => ({
    type: EDIT_DELETE_FABRICS_PROGRESS,
    payload: record,
});

// ====================== Manufracturers Master ===============================
export const getManufracturersList = () => {
    return {
        type: GET_MANUFRACTURERS_LIST_PROGRESS,
    };
}

export const addManufracturers = (record) => ({
    type: ADD_MANUFRACTURERS_PROGRESS,
    payload: record,
});

export const editDeleteManufracturers = (record) => ({
    type: EDIT_DELETE_MANUFRACTURERS_PROGRESS,
    payload: record,
});

// ====================== Stitching centers Master ===============================
export const getStitchingCentersList = () => {
    return {
        type: GET_STITCHING_CENTERS_LIST_PROGRESS,
    };
}

export const addStitchingCenters = (record) => ({
    type: ADD_STITCHING_CENTERS_PROGRESS,
    payload: record,
});

export const editDeleteStitchingCenters = (record) => ({
    type: EDIT_DELETE_STITCHING_CENTERS_PROGRESS,
    payload: record,
});

// ====================== Tailor Shops Master ===============================
export const getTailorShopsList = () => {
    return {
        type: GET_TAILOR_SHOPS_LIST_PROGRESS,
    };
}
 
export const addTailorShops = (record) => ({
    type: ADD_TAILOR_SHOPS_PROGRESS,
    payload: record,
});

export const editDeleteTailorShops = (record) => ({
    type: EDIT_DELETE_TAILOR_SHOPS_PROGRESS,
    payload: record,
});

//FEB
// ====================Waist Coat Bottom Type master ======================

export const getWaistCoatBottomTypeList = () => {
    return {
        type: GET_WAIST_COAT_BOTTOM_TYPE_LIST_PROGRESS,
    };
}
 
export const addWaistCoatBottomType = (record) => ({
    type: ADD_WAIST_COAT_BOTTOM_TYPE_PROGRESS,
    payload: record,
});

export const editDeleteWaistCoatBottomType = (record) => ({
    type: EDIT_DELETE_WAIST_COAT_BOTTOM_TYPE_PROGRESS,
    payload: record,
});

export const UploadWaistCoatBottomTypeImage = (record) => ({
    type: UPLOAD_WAIST_COAT_BOTTOM_TYPE_IMAGE_PROGRESS,
    payload: record,
});

// ====================Waist Coat Bottom master ======================

export const getWaistCoatTypeList = () => {
    return {
        type: GET_WAIST_COAT_TYPE_LIST_PROGRESS
    };
}
 
export const addWaistCoatType = (record) => ({
    type: ADD_WAIST_COAT_TYPE_PROGRESS,
    payload: record,
});

export const editDeleteWaistCoatType = (record) => ({
    type: EDIT_DELETE_WAIST_COAT_TYPE_PROGRESS,
    payload: record,
});

export const UploadWaistCoatTypeImage = (record) => ({
    type: UPLOAD_WAIST_COAT_TYPE_IMAGE_PROGRESS,
    payload: record,
});

// ==================== Waist Coat Neck master ======================

export const getWaistCoatNeckList = () => {
    return {
        type: GET_WAIST_COAT_NECK_LIST_PROGRESS
    };
}
 
export const addWaistCoatNeck = (record) => ({
    type: ADD_WAIST_COAT_NECK_PROGRESS,
    payload: record,
});

export const editDeleteWaistCoatNeck = (record) => ({
    type: EDIT_DELETE_WAIST_COAT_NECK_PROGRESS,
    payload: record,
});

export const UploadWaistCoatNeckImage = (record) => ({
    type: UPLOAD_WAIST_COAT_NECK_IMAGE_PROGRESS,
    payload: record,
});

// ====================Waist Coat Pocket Master======================

export const getWaistCoatPocketList = () => {
    return {
        type: GET_WAIST_COAT_POCKET_LIST_PROGRESS
    };
}
 
export const addWaistCoatPocket = (record) => ({
    type: ADD_WAIST_COAT_POCKET_PROGRESS,
    payload: record,
});

export const editDeleteWaistCoatPocket = (record) => ({
    type: EDIT_DELETE_WAIST_COAT_POCKET_PROGRESS,
    payload: record,
});

export const UploadWaistCoatPocketImage = (record) => ({
    type: UPLOAD_WAIST_COAT_POCKET_IMAGE_PROGRESS,
    payload: record,
});

// ==================== Sherwani Collar Design Master ======================

export const getSherwaniCollarDesignList = () => {
    return {
        type: GET_SHERWANI_COLLAR_DESIGN_LIST_PROGRESS
    };
}
 
export const addSherwaniCollarDesign = (record) => ({
    type: ADD_SHERWANI_COLLAR_DESIGN_PROGRESS,
    payload: record,
});

export const editDeleteSherwaniCollarDesign = (record) => ({
    type: EDIT_DELETE_SHERWANI_COLLAR_DESIGN_PROGRESS,
    payload: record,
});

export const UploadSherwaniCollarDesignImage = (record) => ({
    type: UPLOAD_SHERWANI_COLLAR_DESIGN_IMAGE_PROGRESS,
    payload: record,
});

// ====================Sherwani Collar Master======================

export const getSherwaniCollarList = () => {
    return {
        type: GET_SHERWANI_COLLAR_LIST_PROGRESS
    };
}
 
export const addSherwaniCollar = (record) => ({
    type: ADD_SHERWANI_COLLAR_PROGRESS,
    payload: record,
});

export const editDeleteSherwaniCollar = (record) => ({
    type: EDIT_DELETE_SHERWANI_COLLAR_PROGRESS,
    payload: record,
});

export const UploadSherwaniCollarImage = (record) => ({
    type: UPLOAD_SHERWANI_COLLAR_IMAGE_PROGRESS,
    payload: record,
});

// ====================Sherwani Cuff Design Master======================

export const getSherwaniCuffDesignList = () => {
    return {
        type: GET_SHERWANI_CUFF_DESIGN_LIST_PROGRESS
    };
}
 
export const addSherwaniCuffDesign = (record) => ({
    type: ADD_SHERWANI_CUFF_DESIGN_PROGRESS,
    payload: record,
});

export const editDeleteSherwaniCuffDesign = (record) => ({
    type: EDIT_DELETE_SHERWANI_CUFF_DESIGN_PROGRESS,
    payload: record,
});

export const UploadSherwaniCuffDesignImage = (record) => ({
    type: UPLOAD_SHERWANI_CUFF_DESIGN_IMAGE_PROGRESS,
    payload: record,
});

// ====================Sherwani Cuff Master======================

export const getSherwaniCuffList = () => {
    return {
        type: GET_SHERWANI_CUFF_LIST_PROGRESS
    };
}
 
export const addSherwaniCuff = (record) => ({
    type: ADD_SHERWANI_CUFF_PROGRESS,
    payload: record,
});

export const editDeleteSherwaniCuff = (record) => ({
    type: EDIT_DELETE_SHERWANI_CUFF_PROGRESS,
    payload: record,
});

export const UploadSherwaniCuffImage = (record) => ({
    type: UPLOAD_SHERWANI_CUFF_IMAGE_PROGRESS,
    payload: record,
});

// ====================Sherwani Front Master======================

export const getSherwaniFrontList = () => {
    return {
        type: GET_SHERWANI_FRONT_LIST_PROGRESS
    };
}
 
export const addSherwaniFront = (record) => ({
    type: ADD_SHERWANI_FRONT_PROGRESS,
    payload: record,
});

export const editDeleteSherwaniFront = (record) => ({
    type: EDIT_DELETE_SHERWANI_FRONT_PROGRESS,
    payload: record,
});

export const UploadSherwaniFrontImage = (record) => ({
    type: UPLOAD_SHERWANI_FRONT_IMAGE_PROGRESS,
    payload: record,
});

// ====================Sherwani Jari Design Master======================

export const getSherwaniJariDesignList = () => {
    return {
        type: GET_SHERWANI_JARI_DESIGN_LIST_PROGRESS
    };
}
 
export const addSherwaniJariDesign = (record) => ({
    type: ADD_SHERWANI_JARI_DESIGN_PROGRESS,
    payload: record,
});

export const editDeleteSherwaniJariDesign = (record) => ({
    type: EDIT_DELETE_SHERWANI_JARI_DESIGN_PROGRESS,
    payload: record,
});

export const UploadSherwaniJariDesignImage = (record) => ({
    type: UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_PROGRESS,
    payload: record,
});

// ====================Sherwani Pocket Master======================

export const getSherwaniPocketList = () => {
    return {
        type: GET_SHERWANI_POCKET_LIST_PROGRESS
    };
}
 
export const addSherwaniPocket = (record) => ({
    type: ADD_SHERWANI_POCKET_PROGRESS,
    payload: record,
});

export const editDeleteSherwaniPocket = (record) => ({
    type: EDIT_DELETE_SHERWANI_POCKET_PROGRESS,
    payload: record,
});

export const UploadSherwaniPocketImage = (record) => ({
    type: UPLOAD_SHERWANI_POCKET_IMAGE_PROGRESS,
    payload: record,
});

// ====================Sherwani Side Cut Master======================

export const getSherwaniSideCutList = () => {
    return {
        type: GET_SHERWANI_SIDE_CUT_LIST_PROGRESS
    };
}
 
export const addSherwaniSideCut = (record) => ({
    type: ADD_SHERWANI_SIDE_CUT_PROGRESS,
    payload: record,
});

export const editDeleteSherwaniSideCut = (record) => ({
    type: EDIT_DELETE_SHERWANI_SIDE_CUT_PROGRESS,
    payload: record,
});

export const UploadSherwaniSideCutImage = (record) => ({
    type: UPLOAD_SHERWANI_SIDE_CUT_IMAGE_PROGRESS,
    payload: record,
});

// ====================Kurta Collar Master======================

export const getKurtaCollarList = () => {
    return {
        type: GET_KURTA_COLLAR_LIST_PROGRESS
    };
}
 
export const addKurtaCollar = (record) => ({
    type: ADD_KURTA_COLLAR_PROGRESS,
    payload: record,
});

export const editDeleteKurtaCollar = (record) => ({
    type: EDIT_DELETE_KURTA_COLLAR_PROGRESS,
    payload: record,
});

export const UploadKurtaCollarImage = (record) => ({
    type: UPLOAD_KURTA_COLLAR_IMAGE_PROGRESS,
    payload: record,
});

// ====================Kurta Front Master======================

export const getKurtaFrontList = () => {
    return {
        type: GET_KURTA_FRONT_LIST_PROGRESS
    };
}

export const addKurtaFront = (record) => ({
    type: ADD_KURTA_FRONT_PROGRESS,
    payload: record,
});

export const editDeleteKurtaFront = (record) => ({
    type: EDIT_DELETE_KURTA_FRONT_PROGRESS,
    payload: record,
});

export const UploadKurtaFrontImage = (record) => ({
    type: UPLOAD_KURTA_FRONT_IMAGE_PROGRESS,
    payload: record,
});

// ====================Kurta Pocket Master======================

export const getKurtaPocketList = () => {
    return {
        type: GET_KURTA_POCKET_LIST_PROGRESS
    };
}

export const addKurtaPocket = (record) => ({
    type: ADD_KURTA_POCKET_PROGRESS,
    payload: record,
});

export const editDeleteKurtaPocket = (record) => ({
    type: EDIT_DELETE_KURTA_POCKET_PROGRESS,
    payload: record,
});

export const UploadKurtaPocketImage = (record) => ({
    type: UPLOAD_KURTA_POCKET_IMAGE_PROGRESS,
    payload: record,
});

// ====================Kurta Sleeve Master======================

export const getKurtaSleeveList = () => {
    return {
        type: GET_KURTA_SLEEVE_LIST_PROGRESS
    };
}

export const addKurtaSleeve = (record) => ({
    type: ADD_KURTA_SLEEVE_PROGRESS,
    payload: record,
});

export const editDeleteKurtaSleeve = (record) => ({
    type: EDIT_DELETE_KURTA_SLEEVE_PROGRESS,
    payload: record,
});

export const UploadKurtaSleeveImage = (record) => ({
    type: UPLOAD_KURTA_SLEEVE_IMAGE_PROGRESS,
    payload: record,
});

// ====================Kurta Style Master======================

export const getKurtaStyleList = () => {
    return {
        type: GET_KURTA_STYLE_LIST_PROGRESS
    };
}

export const addKurtaStyle = (record) => ({
    type: ADD_KURTA_STYLE_PROGRESS,
    payload: record,
});

export const editDeleteKurtaStyle = (record) => ({
    type: EDIT_DELETE_KURTA_STYLE_PROGRESS,
    payload: record,
});

export const UploadKurtaStyleImage = (record) => ({
    type: UPLOAD_KURTA_STYLE_IMAGE_PROGRESS,
    payload: record,
});

// ====================GRN======================

export const getGrnList = () => {
    return {
        type: GET_GRN_LIST_PROGRESS
    };
}

export const addGrn = (record) => ({
    type: ADD_GRN_PROGRESS,
    payload: record,
});

export const editDeleteGrn = (record) => ({
    type: EDIT_DELETE_GRN_PROGRESS,
    payload: record,
});

// =================Order Issue===================

export const getOrderIssueList = () => {
    return {
        type: GET_ORDER_ISSUE_LIST_PROGRESS
    }
}

export const addOrderIssue = (record) => ({
    type: ADD_ORDER_ISSUE_PROGRESS,
    payload: record
})

export const editDeleteOrderIssue = (record) => ({
    type: EDIT_DELETE_ORDER_ISSUE_PROGRESS,
    payload: record
})


// =================Orders===================

export const getOrdersList = () => {
    return {
        type: GET_ORDERS_LIST_PROGRESS
    }
}

// ==================Item Master===================

export const getItemList = () => {
    return {
        type: GET_ITEM_LIST_PROGRESS
    }
}

export const addItem = (record) => ({
    type: ADD_ITEM_PROGRESS,
    payload: record
})

export const editDeleteItem = (record) => ({
    type: EDIT_DELETE_ITEM_PROGRESS,
    payload: record
})

// ===============Item Grade Master==============

export const getItemGradeList = () => {
    return {
        type: GET_ITEM_GRADE_LIST_PROGRESS
    }
}

export const addItemGrade = (record) => ({
    type: ADD_ITEM_GRADE_PROGRESS,
    payload: record
})

export const editDeleteItemGrade = (record) => ({
    type: EDIT_DELETE_ITEM_GRADE_PROGRESS,
    payload: record
})

// ===============Item Category Master==============

export const getItemCategoryList = () => {
    return {
        type: GET_ITEM_CATEGORY_LIST_PROGRESS
    }
}

// ===============User Addresses==============

export const getUserAddressesList = (record) => {
    return {
        type: GET_USER_ADDRESSES_LIST_PROGRESS,
        payload: record
    }
}

export const addUserAddresses = (record) => ({
    type: ADD_USER_ADDRESSES_PROGRESS,
    payload: record
})

export const editDeleteUserAddresses = (record) => ({
    type: EDIT_DELETE_USER_ADDRESSES_PROGRESS,
    payload: record
})

// ===============User Measurements UpperBody==============

export const getUserMeasurementsUpperBodyList = () => {
    return {
        type: GET_USER_MEASUREMENTS_UPPERBODY_LIST_PROGRESS,
    }
}

export const addUserMeasurementsUpperBody = (record) => ({
    type: ADD_USER_MEASUREMENTS_UPPERBODY_PROGRESS,
    payload: record
})

export const editDeleteUserMeasurementsUpperBody = (record) => ({
    type: EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_PROGRESS,
    payload: record
})


// ===============User Measurements LowerBody==============

export const getUserMeasurementsLowerBodyList = () => {
    return {
        type: GET_USER_MEASUREMENTS_LOWERBODY_LIST_PROGRESS,
    }
}

export const addUserMeasurementsLowerBody = (record) => ({
    type: ADD_USER_MEASUREMENTS_LOWERBODY_PROGRESS,
    payload: record
})

export const editDeleteUserMeasurementsLowerBody = (record) => ({
    type: EDIT_DELETE_USER_MEASUREMENTS_LOWERBODY_PROGRESS,
    payload: record
})

// ===============Standard Measurements UpperBody==============

export const getStandardMeasurementsUpperBodyList = () => {
    return {
        type: GET_STANDARD_MEASUREMENTS_UPPERBODY_LIST_PROGRESS,
    }
}

export const addStandardMeasurementsUpperBody = (record) => ({
    type: ADD_STANDARD_MEASUREMENTS_UPPERBODY_PROGRESS,
    payload: record
})

export const editDeleteStandardMeasurementsUpperBody = (record) => ({
    type: EDIT_DELETE_STANDARD_MEASUREMENTS_UPPERBODY_PROGRESS,
    payload: record
})

// ===============Standard Measurements LowerBody==============

export const getStandardMeasurementsLowerBodyList = () => {
    return {
        type: GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_PROGRESS,
    }
}

export const addStandardMeasurementsLowerBody = (record) => ({
    type: ADD_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS,
    payload: record
})

export const editDeleteStandardMeasurementsLowerBody = (record) => ({
    type: EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS,
    payload: record
})





