import { put, takeLatest, all, call } from 'redux-saga/effects';

import axiosClient from '../configs/axios';
import {
    LOGIN_PROGRESS, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_PROGRESS, LOGOUT_SUCCESS, LOGOUT_FAILURE,

    GET_USER_LIST_PROGRESS, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE,
    ADD_USER_PROGRESS, ADD_USER_SUCCESS, ADD_USER_FAILURE,
    EDIT_DELETE_USER_PROGRESS, EDIT_DELETE_USER_SUCCESS, EDIT_DELETE_USER_FAILURE,

    GET_BODY_TYPE_LIST_PROGRESS, GET_BODY_TYPE_LIST_SUCCESS, GET_BODY_TYPE_LIST_FAILURE,
    ADD_BODY_TYPE_PROGRESS, ADD_BODY_TYPE_SUCCESS, ADD_BODY_TYPE_FAILURE,
    EDIT_DELETE_BODY_TYPE_PROGRESS, EDIT_DELETE_BODY_TYPE_SUCCESS, EDIT_DELETE_BODY_TYPE_FAILURE,

    GET_BRAND_LIST_PROGRESS, GET_BRAND_LIST_SUCCESS, GET_BRAND_LIST_FAILURE,
    ADD_BRAND_PROGRESS, ADD_BRAND_SUCCESS, ADD_BRAND_FAILURE,
    EDIT_DELETE_BRAND_PROGRESS, EDIT_DELETE_BRAND_SUCCESS, EDIT_DELETE_BRAND_FAILURE,

    GET_CHARGES_LIST_PROGRESS, GET_CHARGES_LIST_SUCCESS, GET_CHARGES_LIST_FAILURE,
    ADD_CHARGES_PROGRESS, ADD_CHARGES_SUCCESS, ADD_CHARGES_FAILURE,
    EDIT_DELETE_CHARGES_PROGRESS, EDIT_DELETE_CHARGES_SUCCESS, EDIT_DELETE_CHARGES_FAILURE,

    GET_COLOR_LIST_PROGRESS, GET_COLOR_LIST_SUCCESS, GET_COLOR_LIST_FAILURE,
    ADD_COLOR_PROGRESS, ADD_COLOR_SUCCESS, ADD_COLOR_FAILURE,
    EDIT_DELETE_COLOR_PROGRESS, EDIT_DELETE_COLOR_SUCCESS, EDIT_DELETE_COLOR_FAILURE,

    GET_EMPLOYEE_LIST_PROGRESS, GET_EMPLOYEE_LIST_SUCCESS, GET_EMPLOYEE_LIST_FAILURE,
    ADD_EMPLOYEE_PROGRESS, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAILURE,
    EDIT_DELETE_EMPLOYEE_PROGRESS, EDIT_DELETE_EMPLOYEE_SUCCESS, EDIT_DELETE_EMPLOYEE_FAILURE,

    GET_FABRIC_FEEL_LIST_PROGRESS, GET_FABRIC_FEEL_LIST_SUCCESS, GET_FABRIC_FEEL_LIST_FAILURE,
    ADD_FABRIC_FEEL_PROGRESS, ADD_FABRIC_FEEL_SUCCESS, ADD_FABRIC_FEEL_FAILURE,
    EDIT_DELETE_FABRIC_FEEL_PROGRESS, EDIT_DELETE_FABRIC_FEEL_SUCCESS, EDIT_DELETE_FABRIC_FEEL_FAILURE,

    GET_FABRIC_MATERIAL_LIST_PROGRESS, GET_FABRIC_MATERIAL_LIST_SUCCESS, GET_FABRIC_MATERIAL_LIST_FAILURE,
    ADD_FABRIC_MATERIAL_PROGRESS, ADD_FABRIC_MATERIAL_SUCCESS, ADD_FABRIC_MATERIAL_FAILURE,
    EDIT_DELETE_FABRIC_MATERIAL_PROGRESS, EDIT_DELETE_FABRIC_MATERIAL_SUCCESS, EDIT_DELETE_FABRIC_MATERIAL_FAILURE,

    GET_FABRIC_QUALITY_LIST_PROGRESS, GET_FABRIC_QUALITY_LIST_SUCCESS, GET_FABRIC_QUALITY_LIST_FAILURE,
    ADD_FABRIC_QUALITY_PROGRESS, ADD_FABRIC_QUALITY_SUCCESS, ADD_FABRIC_QUALITY_FAILURE,
    EDIT_DELETE_FABRIC_QUALITY_PROGRESS, EDIT_DELETE_FABRIC_QUALITY_SUCCESS, EDIT_DELETE_FABRIC_QUALITY_FAILURE,

    GET_FABRIC_USE_LIST_PROGRESS, GET_FABRIC_USE_LIST_SUCCESS, GET_FABRIC_USE_LIST_FAILURE,
    ADD_FABRIC_USE_PROGRESS, ADD_FABRIC_USE_SUCCESS, ADD_FABRIC_USE_FAILURE,
    EDIT_DELETE_FABRIC_USE_PROGRESS, EDIT_DELETE_FABRIC_USE_SUCCESS, EDIT_DELETE_FABRIC_USE_FAILURE,

    GET_OCCASION_LIST_PROGRESS, GET_OCCASION_LIST_SUCCESS, GET_OCCASION_LIST_FAILURE,
    ADD_OCCASION_PROGRESS, ADD_OCCASION_SUCCESS, ADD_OCCASION_FAILURE,
    EDIT_DELETE_OCCASION_PROGRESS, EDIT_DELETE_OCCASION_SUCCESS, EDIT_DELETE_OCCASION_FAILURE,

    GET_PATTERN_LIST_PROGRESS, GET_PATTERN_LIST_SUCCESS, GET_PATTERN_LIST_FAILURE,
    ADD_PATTERN_PROGRESS, ADD_PATTERN_SUCCESS, ADD_PATTERN_FAILURE,
    EDIT_DELETE_PATTERN_PROGRESS, EDIT_DELETE_PATTERN_SUCCESS, EDIT_DELETE_PATTERN_FAILURE,

    GET_ROLE_LIST_PROGRESS, GET_ROLE_LIST_SUCCESS, GET_ROLE_LIST_FAILURE,
    ADD_ROLE_PROGRESS, ADD_ROLE_SUCCESS, ADD_ROLE_FAILURE,
    EDIT_DELETE_ROLE_PROGRESS, EDIT_DELETE_ROLE_SUCCESS, EDIT_DELETE_ROLE_FAILURE,

    GET_UNIT_LIST_PROGRESS, GET_UNIT_LIST_SUCCESS, GET_UNIT_LIST_FAILURE,
    ADD_UNIT_PROGRESS, ADD_UNIT_SUCCESS, ADD_UNIT_FAILURE,
    EDIT_DELETE_UNIT_PROGRESS, EDIT_DELETE_UNIT_SUCCESS, EDIT_DELETE_UNIT_FAILURE,
     GET_SHIRT_BACKPLEAT_LIST_SUCCESS, GET_SHIRT_BACKPLEAT_LIST_FAILURE, GET_SHIRT_BACKPLEAT_LIST_PROGRESS,
      ADD_SHIRT_BACKPLEAT_SUCCESS, ADD_SHIRT_BACKPLEAT_FAILURE, ADD_SHIRT_BACKPLEAT_PROGRESS, 
      EDIT_DELETE_SHIRT_BACKPLEAT_SUCCESS, EDIT_DELETE_SHIRT_BACKPLEAT_FAILURE,
       EDIT_DELETE_SHIRT_BACKPLEAT_PROGRESS, ADD_SHIRT_BOTTOM_PROGRESS, ADD_SHIRT_BOTTOM_FAILURE, ADD_SHIRT_BOTTOM_SUCCESS, GET_SHIRT_BOTTOM_LIST_PROGRESS, GET_SHIRT_BOTTOM_LIST_FAILURE, GET_SHIRT_BOTTOM_LIST_SUCCESS, EDIT_DELETE_SHIRT_BOTTOM_PROGRESS, EDIT_DELETE_SHIRT_BOTTOM_FAILURE, EDIT_DELETE_SHIRT_BOTTOM_SUCCESS, EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS, EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_FAILURE, EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_SUCCESS, ADD_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS, ADD_SHIRT_COLLAR_CUFF_THICKNESS_FAILURE, ADD_SHIRT_COLLAR_CUFF_THICKNESS_SUCCESS, GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_PROGRESS, GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_FAILURE, GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_SUCCESS, EDIT_DELETE_SHIRT_COLLAR_PROGRESS, EDIT_DELETE_SHIRT_COLLAR_FAILURE, EDIT_DELETE_SHIRT_COLLAR_SUCCESS, ADD_SHIRT_COLLAR_PROGRESS, ADD_SHIRT_COLLAR_FAILURE, ADD_SHIRT_COLLAR_SUCCESS, GET_SHIRT_COLLAR_LIST_PROGRESS, GET_SHIRT_COLLAR_LIST_FAILURE, GET_SHIRT_COLLAR_LIST_SUCCESS, EDIT_DELETE_SHIRT_CUFF_PROGRESS, EDIT_DELETE_SHIRT_CUFF_FAILURE, EDIT_DELETE_SHIRT_CUFF_SUCCESS, ADD_SHIRT_CUFF_FAILURE, ADD_SHIRT_CUFF_SUCCESS, GET_SHIRT_CUFF_LIST_PROGRESS, GET_SHIRT_CUFF_LIST_FAILURE, GET_SHIRT_CUFF_LIST_SUCCESS, ADD_SHIRT_CUFF_PROGRESS, EDIT_DELETE_SHIRT_FITTING_PROGRESS, EDIT_DELETE_SHIRT_FITTING_FAILURE, EDIT_DELETE_SHIRT_FITTING_SUCCESS, ADD_SHIRT_FITTING_PROGRESS, ADD_SHIRT_FITTING_FAILURE, ADD_SHIRT_FITTING_SUCCESS, GET_SHIRT_FITTING_LIST_PROGRESS, GET_SHIRT_FITTING_LIST_FAILURE, GET_SHIRT_FITTING_LIST_SUCCESS, EDIT_DELETE_SHIRT_FRONT_PROGRESS, EDIT_DELETE_SHIRT_FRONT_FAILURE, EDIT_DELETE_SHIRT_FRONT_SUCCESS, ADD_SHIRT_FRONT_PROGRESS, ADD_SHIRT_FRONT_FAILURE, ADD_SHIRT_FRONT_SUCCESS, GET_SHIRT_FRONT_LIST_PROGRESS, GET_SHIRT_FRONT_LIST_FAILURE, GET_SHIRT_FRONT_LIST_SUCCESS, EDIT_DELETE_SHIRT_POCKET_PROGRESS, EDIT_DELETE_SHIRT_POCKET_FAILURE, EDIT_DELETE_SHIRT_POCKET_SUCCESS, ADD_SHIRT_POCKET_PROGRESS, ADD_SHIRT_POCKET_FAILURE, ADD_SHIRT_POCKET_SUCCESS, GET_SHIRT_POCKET_LIST_PROGRESS, GET_SHIRT_POCKET_LIST_FAILURE, GET_SHIRT_POCKET_LIST_SUCCESS, EDIT_DELETE_TROUSER_BOTTOM_PROGRESS, EDIT_DELETE_TROUSER_BOTTOM_FAILURE, EDIT_DELETE_TROUSER_BOTTOM_SUCCESS, ADD_TROUSER_BOTTOM_PROGRESS, ADD_TROUSER_BOTTOM_FAILURE, ADD_TROUSER_BOTTOM_SUCCESS, GET_TROUSER_BOTTOM_LIST_PROGRESS, GET_TROUSER_BOTTOM_LIST_FAILURE, GET_TROUSER_BOTTOM_LIST_SUCCESS, EDIT_DELETE_TROUSER_CROTCH_PROGRESS, EDIT_DELETE_TROUSER_CROTCH_FAILURE, EDIT_DELETE_TROUSER_CROTCH_SUCCESS, ADD_TROUSER_CROTCH_PROGRESS, ADD_TROUSER_CROTCH_FAILURE, ADD_TROUSER_CROTCH_SUCCESS, GET_TROUSER_CROTCH_LIST_PROGRESS, GET_TROUSER_CROTCH_LIST_FAILURE, GET_TROUSER_CROTCH_LIST_SUCCESS, EDIT_DELETE_TROUSER_POCKET_PROGRESS, EDIT_DELETE_TROUSER_POCKET_FAILURE, EDIT_DELETE_TROUSER_POCKET_SUCCESS, ADD_TROUSER_POCKET_PROGRESS, ADD_TROUSER_POCKET_FAILURE, ADD_TROUSER_POCKET_SUCCESS, GET_TROUSER_POCKET_LIST_PROGRESS, GET_TROUSER_POCKET_LIST_FAILURE, GET_TROUSER_POCKET_LIST_SUCCESS, UPLOAD_BODY_TYPE_IMAGE_FAILURE, UPLOAD_BODY_TYPE_IMAGE_SUCCESS, UPLOAD_BODY_TYPE_IMAGE_PROGRESS, EDIT_DELETE_FABRICS_PROGRESS, EDIT_DELETE_FABRICS_FAILURE, EDIT_DELETE_FABRICS_SUCCESS, ADD_FABRICS_PROGRESS, ADD_FABRICS_FAILURE, ADD_FABRICS_SUCCESS, GET_FABRICS_LIST_PROGRESS, GET_FABRICS_LIST_FAILURE, GET_FABRICS_LIST_SUCCESS, EDIT_DELETE_MANUFRACTURERS_PROGRESS, EDIT_DELETE_MANUFRACTURERS_FAILURE, EDIT_DELETE_MANUFRACTURERS_SUCCESS, ADD_MANUFRACTURERS_PROGRESS, ADD_MANUFRACTURERS_FAILURE, ADD_MANUFRACTURERS_SUCCESS, GET_MANUFRACTURERS_LIST_PROGRESS, GET_MANUFRACTURERS_LIST_FAILURE, GET_MANUFRACTURERS_LIST_SUCCESS, EDIT_DELETE_STITCHING_CENTERS_PROGRESS, EDIT_DELETE_STITCHING_CENTERS_FAILURE, EDIT_DELETE_STITCHING_CENTERS_SUCCESS, ADD_STITCHING_CENTERS_PROGRESS, ADD_STITCHING_CENTERS_FAILURE, ADD_STITCHING_CENTERS_SUCCESS, GET_STITCHING_CENTERS_LIST_PROGRESS, GET_STITCHING_CENTERS_LIST_FAILURE, GET_STITCHING_CENTERS_LIST_SUCCESS, EDIT_DELETE_TAILOR_SHOPS_PROGRESS, EDIT_DELETE_TAILOR_SHOPS_FAILURE, EDIT_DELETE_TAILOR_SHOPS_SUCCESS, ADD_TAILOR_SHOPS_PROGRESS, ADD_TAILOR_SHOPS_FAILURE, ADD_TAILOR_SHOPS_SUCCESS, GET_TAILOR_SHOPS_LIST_PROGRESS, GET_TAILOR_SHOPS_LIST_FAILURE, GET_TAILOR_SHOPS_LIST_SUCCESS, UPLOAD_SHIRT_COLLAR_IMAGE_PROGRESS, UPLOAD_SHIRT_COLLAR_IMAGE_FAILURE, UPLOAD_SHIRT_COLLAR_IMAGE_SUCCESS, UPLOAD_SHIRT_BACKPLEAT_IMAGE_PROGRESS, UPLOAD_SHIRT_BACKPLEAT_IMAGE_FAILURE, UPLOAD_SHIRT_BACKPLEAT_IMAGE_SUCCESS, UPLOAD_SHIRT_BOTTOM_IMAGE_PROGRESS, UPLOAD_SHIRT_BOTTOM_IMAGE_FAILURE, UPLOAD_SHIRT_BOTTOM_IMAGE_SUCCESS, UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_PROGRESS, UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_FAILURE, UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_SUCCESS, UPLOAD_SHIRT_FRONT_IMAGE_SUCCESS, UPLOAD_SHIRT_FRONT_IMAGE_FAILURE, UPLOAD_SHIRT_FRONT_IMAGE_PROGRESS, UPLOAD_SHIRT_POCKET_IMAGE_SUCCESS, UPLOAD_SHIRT_POCKET_IMAGE_FAILURE, UPLOAD_SHIRT_POCKET_IMAGE_PROGRESS, UPLOAD_TROUSER_POCKET_IMAGE_PROGRESS, UPLOAD_TROUSER_POCKET_IMAGE_FAILURE, UPLOAD_TROUSER_POCKET_IMAGE_SUCCESS, UPLOAD_TROUSER_BOTTOM_IMAGE_PROGRESS, UPLOAD_TROUSER_BOTTOM_IMAGE_FAILURE, UPLOAD_TROUSER_BOTTOM_IMAGE_SUCCESS, UPLOAD_TROUSER_CROTCH_IMAGE_PROGRESS, UPLOAD_TROUSER_CROTCH_IMAGE_FAILURE, UPLOAD_TROUSER_CROTCH_IMAGE_SUCCESS, GET_WAIST_COAT_BOTTOM_TYPE_LIST_SUCCESS, GET_WAIST_COAT_BOTTOM_TYPE_LIST_FAILURE, GET_WAIST_COAT_BOTTOM_TYPE_LIST_PROGRESS, ADD_WAIST_COAT_BOTTOM_TYPE_SUCCESS, ADD_WAIST_COAT_BOTTOM_TYPE_FAILURE, ADD_WAIST_COAT_BOTTOM_TYPE_PROGRESS, EDIT_DELETE_WAIST_COAT_BOTTOM_TYPE_SUCCESS, EDIT_DELETE_WAIST_COAT_BOTTOM_TYPE_FAILURE, UPLOAD_WAIST_COAT_BOTTOM_TYPE_IMAGE_SUCCESS, UPLOAD_WAIST_COAT_BOTTOM_TYPE_IMAGE_FAILURE, UPLOAD_WAIST_COAT_BOTTOM_TYPE_IMAGE_PROGRESS, EDIT_DELETE_WAIST_COAT_BOTTOM_TYPE_PROGRESS, GET_WAIST_COAT_TYPE_LIST_SUCCESS, GET_WAIST_COAT_TYPE_LIST_FAILURE, GET_WAIST_COAT_TYPE_LIST_PROGRESS, ADD_WAIST_COAT_TYPE_SUCCESS, ADD_WAIST_COAT_TYPE_FAILURE, ADD_WAIST_COAT_TYPE_PROGRESS, EDIT_DELETE_WAIST_COAT_TYPE_SUCCESS, EDIT_DELETE_WAIST_COAT_TYPE_FAILURE, EDIT_DELETE_WAIST_COAT_TYPE_PROGRESS, UPLOAD_WAIST_COAT_TYPE_IMAGE_SUCCESS, UPLOAD_WAIST_COAT_TYPE_IMAGE_FAILURE, UPLOAD_WAIST_COAT_TYPE_IMAGE_PROGRESS, GET_WAIST_COAT_NECK_LIST_SUCCESS, GET_WAIST_COAT_NECK_LIST_FAILURE, GET_WAIST_COAT_NECK_LIST_PROGRESS, ADD_WAIST_COAT_NECK_SUCCESS, ADD_WAIST_COAT_NECK_FAILURE, ADD_WAIST_COAT_NECK_PROGRESS, EDIT_DELETE_WAIST_COAT_NECK_SUCCESS, EDIT_DELETE_WAIST_COAT_NECK_FAILURE, EDIT_DELETE_WAIST_COAT_NECK_PROGRESS, UPLOAD_WAIST_COAT_NECK_IMAGE_PROGRESS, UPLOAD_WAIST_COAT_NECK_IMAGE_SUCCESS, UPLOAD_WAIST_COAT_NECK_IMAGE_FAILURE, GET_WAIST_COAT_POCKET_LIST_SUCCESS, GET_WAIST_COAT_POCKET_LIST_FAILURE, GET_WAIST_COAT_POCKET_LIST_PROGRESS, ADD_WAIST_COAT_POCKET_SUCCESS, ADD_WAIST_COAT_POCKET_PROGRESS, EDIT_DELETE_WAIST_COAT_POCKET_PROGRESS, UPLOAD_WAIST_COAT_POCKET_IMAGE_SUCCESS, UPLOAD_WAIST_COAT_POCKET_IMAGE_FAILURE, UPLOAD_WAIST_COAT_POCKET_IMAGE_PROGRESS, EDIT_DELETE_WAIST_COAT_POCKET_SUCCESS, EDIT_DELETE_WAIST_COAT_POCKET_FAILURE, ADD_WAIST_COAT_POCKET_FAILURE, GET_SHERWANI_COLLAR_DESIGN_LIST_SUCCESS, GET_SHERWANI_COLLAR_DESIGN_LIST_FAILURE, GET_SHERWANI_COLLAR_DESIGN_LIST_PROGRESS, ADD_SHERWANI_COLLAR_DESIGN_SUCCESS, ADD_SHERWANI_COLLAR_DESIGN_FAILURE, EDIT_DELETE_SHERWANI_COLLAR_DESIGN_FAILURE, EDIT_DELETE_SHERWANI_COLLAR_DESIGN_SUCCESS, EDIT_DELETE_SHERWANI_COLLAR_DESIGN_PROGRESS, UPLOAD_SHERWANI_COLLAR_DESIGN_IMAGE_SUCCESS, UPLOAD_SHERWANI_COLLAR_DESIGN_IMAGE_FAILURE, ADD_SHERWANI_COLLAR_DESIGN_PROGRESS, UPLOAD_SHERWANI_COLLAR_DESIGN_IMAGE_PROGRESS, GET_SHERWANI_COLLAR_LIST_SUCCESS, GET_SHERWANI_COLLAR_LIST_FAILURE, GET_SHERWANI_COLLAR_LIST_PROGRESS, ADD_SHERWANI_COLLAR_SUCCESS, ADD_SHERWANI_COLLAR_FAILURE, ADD_SHERWANI_COLLAR_PROGRESS, EDIT_DELETE_SHERWANI_COLLAR_SUCCESS, EDIT_DELETE_SHERWANI_COLLAR_FAILURE, EDIT_DELETE_SHERWANI_COLLAR_PROGRESS, UPLOAD_SHERWANI_COLLAR_IMAGE_PROGRESS, UPLOAD_SHERWANI_COLLAR_IMAGE_SUCCESS, UPLOAD_SHERWANI_COLLAR_IMAGE_FAILURE, GET_SHERWANI_CUFF_DESIGN_LIST_SUCCESS, GET_SHERWANI_CUFF_DESIGN_LIST_FAILURE, GET_SHERWANI_CUFF_DESIGN_LIST_PROGRESS, ADD_SHERWANI_CUFF_DESIGN_SUCCESS, ADD_SHERWANI_CUFF_DESIGN_FAILURE, ADD_SHERWANI_CUFF_DESIGN_PROGRESS, EDIT_DELETE_SHERWANI_CUFF_DESIGN_SUCCESS, EDIT_DELETE_SHERWANI_CUFF_DESIGN_PROGRESS, UPLOAD_SHERWANI_CUFF_DESIGN_IMAGE_SUCCESS, UPLOAD_SHERWANI_CUFF_DESIGN_IMAGE_FAILURE, UPLOAD_SHERWANI_CUFF_DESIGN_IMAGE_PROGRESS, EDIT_DELETE_SHERWANI_CUFF_DESIGN_FAILURE, GET_SHERWANI_CUFF_LIST_SUCCESS, GET_SHERWANI_CUFF_LIST_FAILURE, GET_SHERWANI_CUFF_LIST_PROGRESS, ADD_SHERWANI_CUFF_PROGRESS, EDIT_DELETE_SHERWANI_CUFF_SUCCESS, EDIT_DELETE_SHERWANI_CUFF_FAILURE, EDIT_DELETE_SHERWANI_CUFF_PROGRESS, UPLOAD_SHERWANI_CUFF_IMAGE_SUCCESS, UPLOAD_SHERWANI_CUFF_IMAGE_FAILURE, UPLOAD_SHERWANI_CUFF_IMAGE_PROGRESS, GET_SHERWANI_FRONT_LIST_SUCCESS, GET_SHERWANI_FRONT_LIST_FAILURE, GET_SHERWANI_FRONT_LIST_PROGRESS, ADD_SHERWANI_FRONT_SUCCESS, ADD_SHERWANI_FRONT_FAILURE, ADD_SHERWANI_FRONT_PROGRESS, EDIT_DELETE_SHERWANI_FRONT_SUCCESS, EDIT_DELETE_SHERWANI_FRONT_FAILURE, EDIT_DELETE_SHERWANI_FRONT_PROGRESS, UPLOAD_SHERWANI_FRONT_IMAGE_SUCCESS, UPLOAD_SHERWANI_FRONT_IMAGE_FAILURE, UPLOAD_SHERWANI_FRONT_IMAGE_PROGRESS, GET_SHERWANI_JARI_DESIGN_LIST_SUCCESS, GET_SHERWANI_JARI_DESIGN_LIST_FAILURE, ADD_SHERWANI_JARI_DESIGN_SUCCESS, ADD_SHERWANI_JARI_DESIGN_FAILURE, ADD_SHERWANI_JARI_DESIGN_PROGRESS, EDIT_DELETE_SHERWANI_JARI_DESIGN_SUCCESS, EDIT_DELETE_SHERWANI_JARI_DESIGN_FAILURE, EDIT_DELETE_SHERWANI_JARI_DESIGN_PROGRESS, UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_SUCCESS, UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_FAILURE, UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_PROGRESS, GET_SHERWANI_JARI_DESIGN_LIST_PROGRESS, GET_SHERWANI_POCKET_LIST_SUCCESS, GET_SHERWANI_POCKET_LIST_FAILURE, GET_SHERWANI_POCKET_LIST_PROGRESS, ADD_SHERWANI_POCKET_SUCCESS, ADD_SHERWANI_POCKET_FAILURE, ADD_SHERWANI_POCKET_PROGRESS, EDIT_DELETE_SHERWANI_POCKET_SUCCESS, EDIT_DELETE_SHERWANI_POCKET_FAILURE, EDIT_DELETE_SHERWANI_POCKET_PROGRESS, UPLOAD_SHERWANI_POCKET_IMAGE_PROGRESS, UPLOAD_SHERWANI_POCKET_IMAGE_FAILURE, GET_SHERWANI_SIDE_CUT_LIST_SUCCESS, GET_SHERWANI_SIDE_CUT_LIST_FAILURE, GET_SHERWANI_SIDE_CUT_LIST_PROGRESS, ADD_SHERWANI_SIDE_CUT_SUCCESS, ADD_SHERWANI_SIDE_CUT_FAILURE, EDIT_DELETE_SHERWANI_SIDE_CUT_SUCCESS, EDIT_DELETE_SHERWANI_SIDE_CUT_FAILURE, EDIT_DELETE_SHERWANI_SIDE_CUT_PROGRESS, UPLOAD_SHERWANI_SIDE_CUT_IMAGE_PROGRESS, UPLOAD_SHERWANI_SIDE_CUT_IMAGE_FAILURE, ADD_SHERWANI_SIDE_CUT_PROGRESS, UPLOAD_SHERWANI_SIDE_CUT_IMAGE_SUCCESS, UPLOAD_SHERWANI_POCKET_IMAGE_SUCCESS, GET_KURTA_COLLAR_LIST_SUCCESS, GET_KURTA_COLLAR_LIST_FAILURE, GET_KURTA_COLLAR_LIST_PROGRESS, ADD_KURTA_COLLAR_SUCCESS, ADD_KURTA_COLLAR_FAILURE, ADD_KURTA_COLLAR_PROGRESS, EDIT_DELETE_KURTA_COLLAR_SUCCESS, EDIT_DELETE_KURTA_COLLAR_FAILURE, EDIT_DELETE_KURTA_COLLAR_PROGRESS, UPLOAD_KURTA_COLLAR_IMAGE_SUCCESS, UPLOAD_KURTA_COLLAR_IMAGE_FAILURE, UPLOAD_KURTA_COLLAR_IMAGE_PROGRESS, GET_KURTA_FRONT_LIST_SUCCESS, GET_KURTA_FRONT_LIST_FAILURE, GET_KURTA_FRONT_LIST_PROGRESS, ADD_KURTA_FRONT_PROGRESS, EDIT_DELETE_KURTA_FRONT_SUCCESS, EDIT_DELETE_KURTA_FRONT_FAILURE, EDIT_DELETE_KURTA_FRONT_PROGRESS, UPLOAD_KURTA_FRONT_IMAGE_SUCCESS, UPLOAD_KURTA_FRONT_IMAGE_FAILURE, UPLOAD_KURTA_FRONT_IMAGE_PROGRESS, ADD_KURTA_FRONT_FAILURE, ADD_KURTA_FRONT_SUCCESS, GET_KURTA_POCKET_LIST_SUCCESS, GET_KURTA_POCKET_LIST_FAILURE, GET_KURTA_POCKET_LIST_PROGRESS, ADD_KURTA_POCKET_SUCCESS, ADD_KURTA_POCKET_FAILURE, ADD_KURTA_POCKET_PROGRESS, EDIT_DELETE_KURTA_POCKET_SUCCESS, EDIT_DELETE_KURTA_POCKET_FAILURE, EDIT_DELETE_KURTA_POCKET_PROGRESS, UPLOAD_KURTA_POCKET_IMAGE_SUCCESS, UPLOAD_KURTA_POCKET_IMAGE_FAILURE, UPLOAD_KURTA_POCKET_IMAGE_PROGRESS, GET_KURTA_SLEEVE_LIST_SUCCESS, GET_KURTA_SLEEVE_LIST_FAILURE, GET_KURTA_SLEEVE_LIST_PROGRESS, EDIT_DELETE_KURTA_SLEEVE_SUCCESS, EDIT_DELETE_KURTA_SLEEVE_FAILURE, EDIT_DELETE_KURTA_SLEEVE_PROGRESS, UPLOAD_KURTA_SLEEVE_IMAGE_SUCCESS, UPLOAD_KURTA_SLEEVE_IMAGE_FAILURE, UPLOAD_KURTA_SLEEVE_IMAGE_PROGRESS, ADD_KURTA_SLEEVE_PROGRESS, ADD_KURTA_SLEEVE_SUCCESS, ADD_KURTA_SLEEVE_FAILURE, ADD_KURTA_STYLE_SUCCESS, ADD_KURTA_STYLE_FAILURE, ADD_KURTA_STYLE_PROGRESS, EDIT_DELETE_KURTA_STYLE_SUCCESS, EDIT_DELETE_KURTA_STYLE_FAILURE, EDIT_DELETE_KURTA_STYLE_PROGRESS, GET_KURTA_STYLE_LIST_SUCCESS, GET_KURTA_STYLE_LIST_FAILURE, GET_KURTA_STYLE_LIST_PROGRESS, UPLOAD_KURTA_STYLE_IMAGE_SUCCESS, UPLOAD_KURTA_STYLE_IMAGE_FAILURE, UPLOAD_KURTA_STYLE_IMAGE_PROGRESS, GET_GRN_LIST_PROGRESS, GET_GRN_LIST_FAILURE, GET_GRN_LIST_SUCCESS, ADD_GRN_SUCCESS, ADD_GRN_FAILURE, ADD_GRN_PROGRESS, EDIT_DELETE_GRN_SUCCESS, EDIT_DELETE_GRN_FAILURE, EDIT_DELETE_GRN_PROGRESS, GET_ORDER_ISSUE_LIST_SUCCESS, GET_ORDER_ISSUE_LIST_FAILURE, GET_ORDER_ISSUE_LIST_PROGRESS, EDIT_DELETE_ORDER_ISSUE_SUCCESS, EDIT_DELETE_ORDER_ISSUE_FAILURE, EDIT_DELETE_ORDER_ISSUE_PROGRESS, ADD_ORDER_ISSUE_SUCCESS, ADD_ORDER_ISSUE_FAILURE, ADD_ORDER_ISSUE_PROGRESS, GET_ORDERS_LIST_SUCCESS, GET_ORDERS_LIST_FAILURE, GET_ORDERS_LIST_PROGRESS, GET_ITEM_LIST_SUCCESS, GET_ITEM_LIST_FAILURE, GET_ITEM_LIST_PROGRESS, GET_ITEM_GRADE_LIST_SUCCESS, GET_ITEM_GRADE_LIST_FAILURE, GET_ITEM_GRADE_LIST_PROGRESS, ADD_ITEM_GRADE_PROGRESS, ADD_ITEM_GRADE_SUCCESS, ADD_ITEM_GRADE_FAILURE, EDIT_DELETE_ITEM_GRADE_SUCCESS, EDIT_DELETE_ITEM_GRADE_FAILURE, EDIT_DELETE_ITEM_GRADE_PROGRESS, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, ADD_ITEM_PROGRESS, EDIT_DELETE_ITEM_SUCCESS, EDIT_DELETE_ITEM_FAILURE, EDIT_DELETE_ITEM_PROGRESS, GET_ITEM_CATEGORY_LIST_SUCCESS, GET_ITEM_CATEGORY_LIST_FAILURE, GET_ITEM_CATEGORY_LIST_PROGRESS, GET_USER_ADDRESSES_LIST_SUCCESS, GET_USER_ADDRESSES_LIST_FAILURE, GET_USER_ADDRESSES_LIST_PROGRESS, EDIT_DELETE_USER_ADDRESSES_SUCCESS, EDIT_DELETE_USER_ADDRESSES_FAILURE, EDIT_DELETE_USER_ADDRESSES_PROGRESS, ADD_USER_ADDRESSES_SUCCESS, ADD_USER_ADDRESSES_FAILURE, ADD_USER_ADDRESSES_PROGRESS, GET_USER_MEASUREMENTS_LIST_SUCCESS, GET_USER_MEASUREMENTS_LIST_FAILURE, GET_USER_MEASUREMENTS_LIST_PROGRESS, ADD_USER_MEASUREMENTS_SUCCESS, ADD_USER_MEASUREMENTS_FAILURE, ADD_USER_MEASUREMENTS_PROGRESS, EDIT_DELETE_USER_MEASUREMENTS_SUCCESS, EDIT_DELETE_USER_MEASUREMENTS_FAILURE, EDIT_DELETE_USER_MEASUREMENTS_PROGRESS, GET_USER_MEASUREMENTS_UPPERBODY_LIST_PROGRESS, GET_USER_MEASUREMENTS_UPPERBODY_LIST_FAILURE, ADD_USER_MEASUREMENTS_UPPERBODY_SUCCESS, ADD_USER_MEASUREMENTS_UPPERBODY_FAILURE, ADD_USER_MEASUREMENTS_UPPERBODY_PROGRESS, EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_SUCCESS, EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_FAILURE, EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_PROGRESS, GET_USER_MEASUREMENTS_LOWERBODY_LIST_SUCCESS, GET_USER_MEASUREMENTS_LOWERBODY_LIST_FAILURE, GET_USER_MEASUREMENTS_LOWERBODY_LIST_PROGRESS, ADD_USER_MEASUREMENTS_LOWERBODY_SUCCESS, ADD_USER_MEASUREMENTS_LOWERBODY_FAILURE, ADD_USER_MEASUREMENTS_LOWERBODY_PROGRESS, EDIT_DELETE_USER_MEASUREMENTS_LOWERBODY_SUCCESS, EDIT_DELETE_USER_MEASUREMENTS_LOWERBODY_FAILURE, EDIT_DELETE_USER_MEASUREMENTS_LOWERBODY_PROGRESS, GET_USER_MEASUREMENTS_UPPERBODY_LIST_SUCCESS, ADD_STANDARD_MEASUREMENTS_UPPERBODY_SUCCESS, ADD_STANDARD_MEASUREMENTS_UPPERBODY_FAILURE, ADD_STANDARD_MEASUREMENTS_UPPERBODY_PROGRESS, EDIT_DELETE_STANDARD_MEASUREMENTS_UPPERBODY_SUCCESS, EDIT_DELETE_STANDARD_MEASUREMENTS_UPPERBODY_FAILURE, EDIT_DELETE_STANDARD_MEASUREMENTS_UPPERBODY_PROGRESS, GET_STANDARD_MEASUREMENTS_UPPERBODY_LIST_SUCCESS, GET_STANDARD_MEASUREMENTS_UPPERBODY_LIST_FAILURE, GET_STANDARD_MEASUREMENTS_UPPERBODY_LIST_PROGRESS, GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_SUCCESS, GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_FAILURE, GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_PROGRESS, ADD_STANDARD_MEASUREMENTS_LOWERBODY_SUCCESS, ADD_STANDARD_MEASUREMENTS_LOWERBODY_FAILURE, ADD_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS, EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_SUCCESS, EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_FAILURE, EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS,


} from '../types/actionTypes';


function* loginSaga(action) {
    try {
        const response = yield axiosClient.post('/login', action.payload);
        sessionStorage.setItem('loginUser', JSON.stringify(response.data));
        yield put({ type: LOGIN_SUCCESS, loginUser: response.data });
    } catch (error) {
        yield put({ type: LOGIN_FAILURE, payload: error.message });
    }
}

function* watchLogin() {
    yield takeLatest(LOGIN_PROGRESS, loginSaga);
}

function* logoutSaga(action) {
    try {
        const logoutSession = sessionStorage.removeItem('loginUser');
        yield put({ type: LOGOUT_SUCCESS, loginUser: logoutSession });
    } catch (error) {
        yield put({ type: LOGOUT_FAILURE, payload: error.message });
    }
}

function* watchLogout() {
    yield takeLatest(LOGOUT_PROGRESS, logoutSaga);
}


// ============================= Admin User Master ==============================

function* getUserListSaga(action) {
    try {
        const response = yield axiosClient.get(`/user_list?page=${0}?&size=${20}&searchKey=""`,);
        yield put({ type: GET_USER_LIST_SUCCESS, user: response.data });
    } catch (error) {
        yield put({ type: GET_USER_LIST_FAILURE });
    }
}

function* watchGetUserList() {
    yield takeLatest(GET_USER_LIST_PROGRESS, getUserListSaga);
}

function* addUserSaga(action) {
    try {
        const response = yield axiosClient.post('/save_user', action.payload);
        yield put({ type: ADD_USER_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_USER_FAILURE, payload: error.message });
    }
}

function* watchAddUser() {
    yield takeLatest(ADD_USER_PROGRESS, addUserSaga);
}

function* editDeleteUser(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_user`, action.payload);
        yield put({ type: EDIT_DELETE_USER_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_USER_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteUser() {
    yield takeLatest(EDIT_DELETE_USER_PROGRESS, editDeleteUser);
}

// ============================= Body type Master ==============================

function* getBodyTypeListSaga(action) {
    try {
        const response = yield axiosClient.get(`/body_type_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_BODY_TYPE_LIST_SUCCESS, body_type: response.data });
    } catch (error) {
        yield put({ type: GET_BODY_TYPE_LIST_FAILURE });
    }
}

function* watchGetBodyTypeList() {
    yield takeLatest(GET_BODY_TYPE_LIST_PROGRESS, getBodyTypeListSaga);
}

function* addBodyTypeSaga(action) {
    try {
        const response = yield axiosClient.post('/save_body_type', action.payload);
        yield put({ type: ADD_BODY_TYPE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_BODY_TYPE_FAILURE, payload: error.message });
    }
}

function* watchAddBodyType() {
    yield takeLatest(ADD_BODY_TYPE_PROGRESS, addBodyTypeSaga);
}

function* editDeleteBodyType(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_body_type`, action.payload);
        yield put({ type: EDIT_DELETE_BODY_TYPE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_BODY_TYPE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteBodyType() {
    yield takeLatest(EDIT_DELETE_BODY_TYPE_PROGRESS, editDeleteBodyType);
}

function* uploadBodyTypeImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_body_type_image', action.payload);
        yield put({ type: UPLOAD_BODY_TYPE_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_BODY_TYPE_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadBodyTypeImage() {
    yield takeLatest(UPLOAD_BODY_TYPE_IMAGE_PROGRESS, uploadBodyTypeImageSaga);
}
// ============================= Brand Master ==============================

function* getBrandListSaga(action) {
    try {
        const response = yield axiosClient.get(`/brand_list?page=${0}&size=${20}&searchKey=""`);
        yield put({ type: GET_BRAND_LIST_SUCCESS, brand: response.data });
    } catch (error) {
        yield put({ type: GET_BRAND_LIST_FAILURE });
    }
}

function* watchGetBrandList() {
    yield takeLatest(GET_BRAND_LIST_PROGRESS, getBrandListSaga);
}

function* addBrandSaga(action) {
    try {
        const response = yield axiosClient.post('/save_brand', action.payload);
        yield put({ type: ADD_BRAND_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_BRAND_FAILURE, payload: error.message });
    }
}

function* watchAddBrand() {
    yield takeLatest(ADD_BRAND_PROGRESS, addBrandSaga);
}

function* editDeleteBrand(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_brand`, action.payload);
        yield put({ type: EDIT_DELETE_BRAND_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_BRAND_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteBrand() {
    yield takeLatest(EDIT_DELETE_BRAND_PROGRESS, editDeleteBrand);
}
// ============================= Charges Master ==============================

function* getChargesListSaga(action) {
    try {
        const response = yield axiosClient.get(`/charges_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_CHARGES_LIST_SUCCESS, charges: response.data });
    } catch (error) {
        yield put({ type: GET_CHARGES_LIST_FAILURE });
    }
}

function* watchGetChargesList() {
    yield takeLatest(GET_CHARGES_LIST_PROGRESS, getChargesListSaga);
}

function* addChargesSaga(action) {
    try {
        const response = yield axiosClient.post('/save_charges', action.payload);
        yield put({ type: ADD_CHARGES_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_CHARGES_FAILURE, payload: error.message });
    }
}

function* watchAddCharges() {
    yield takeLatest(ADD_CHARGES_PROGRESS, addChargesSaga);
}

function* editDeleteCharges(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_charges`, action.payload);
        yield put({ type: EDIT_DELETE_CHARGES_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_CHARGES_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteCharges() {
    yield takeLatest(EDIT_DELETE_CHARGES_PROGRESS, editDeleteCharges);
}

// ============================= color Master ==============================

function* getColorListSaga(action) {
    try {
        // const response = yield axiosClient.get(`/color_list?page=${0}&size=${20}&searchKey=""`);
        const response = yield axiosClient.get(`/color_list`);
        yield put({ type: GET_COLOR_LIST_SUCCESS, color: response.data });
    } catch (error) {
        yield put({ type: GET_COLOR_LIST_FAILURE });
    }
}

function* watchGetColorList() {
    yield takeLatest(GET_COLOR_LIST_PROGRESS, getColorListSaga);
}

function* addColorSaga(action) {
    try {
        const response = yield axiosClient.post('/save_color', action.payload);
        yield put({ type: ADD_COLOR_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_COLOR_FAILURE, payload: error.message });
    }
}

function* watchAddColor() {
    yield takeLatest(ADD_COLOR_PROGRESS, addColorSaga);
}

function* editDeleteColor(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_color`, action.payload);
        yield put({ type: EDIT_DELETE_COLOR_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_COLOR_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteColor() {
    yield takeLatest(EDIT_DELETE_COLOR_PROGRESS, editDeleteColor);
}

// ============================= Employee Master ==============================

function* getEmployeeListSaga(action) {
    try {
        const response = yield axiosClient.get(`/employee_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_EMPLOYEE_LIST_SUCCESS, employee: response.data });
    } catch (error) {
        yield put({ type: GET_EMPLOYEE_LIST_FAILURE });
    }
}

function* watchGetEmployeeList() {
    yield takeLatest(GET_EMPLOYEE_LIST_PROGRESS, getEmployeeListSaga);
}

function* addEmployeeSaga(action) {
    try {
        const response = yield axiosClient.post('/save_employee', action.payload);
        yield put({ type: ADD_EMPLOYEE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_EMPLOYEE_FAILURE, payload: error.message });
    }
}

function* watchAddEmployee() {
    yield takeLatest(ADD_EMPLOYEE_PROGRESS, addEmployeeSaga);
}

function* editDeleteEmployee(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_employee`, action.payload);
        yield put({ type: EDIT_DELETE_EMPLOYEE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_EMPLOYEE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteEmployee() {
    yield takeLatest(EDIT_DELETE_EMPLOYEE_PROGRESS, editDeleteEmployee);
}

// ============================= Fabric Feel Master ==============================

function* getFabricFeelListSaga(action) {
    try {
        const response = yield axiosClient.get(`/fabric_feel_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_FABRIC_FEEL_LIST_SUCCESS, fabric_feel: response.data });
    } catch (error) {
        yield put({ type: GET_FABRIC_FEEL_LIST_FAILURE });
    }
}

function* watchGetFabricFeelList() {
    yield takeLatest(GET_FABRIC_FEEL_LIST_PROGRESS, getFabricFeelListSaga);
}

function* addFabricFeelSaga(action) {
    try {
        const response = yield axiosClient.post('/save_fabric_feel', action.payload);
        yield put({ type: ADD_FABRIC_FEEL_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_FABRIC_FEEL_FAILURE, payload: error.message });
    }
}

function* watchAddFabricFeel() {
    yield takeLatest(ADD_FABRIC_FEEL_PROGRESS, addFabricFeelSaga);
}

function* editDeleteFabricFeel(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_fabric_feel`, action.payload);
        yield put({ type: EDIT_DELETE_FABRIC_FEEL_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_FABRIC_FEEL_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteFabricFeel() {
    yield takeLatest(EDIT_DELETE_FABRIC_FEEL_PROGRESS, editDeleteFabricFeel);
}

// ============================= Fabric Material Master ==============================

function* getFabricMaterialListSaga(action) {
    try {
        const response = yield axiosClient.get(`/fabric_material_list?page=${0}&size=${20}&searchKey=""`);
        yield put({ type: GET_FABRIC_MATERIAL_LIST_SUCCESS, fabric_material: response.data });
    } catch (error) {
        yield put({ type: GET_FABRIC_MATERIAL_LIST_FAILURE });
    }
}

function* watchGetFabricMaterialList() {
    yield takeLatest(GET_FABRIC_MATERIAL_LIST_PROGRESS, getFabricMaterialListSaga);
}

function* addFabricMaterialSaga(action) {
    try {
        const response = yield axiosClient.post('/save_fabric_material', action.payload);
        yield put({ type: ADD_FABRIC_MATERIAL_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_FABRIC_MATERIAL_FAILURE, payload: error.message });
    }
}

function* watchAddFabricMaterial() {
    yield takeLatest(ADD_FABRIC_MATERIAL_PROGRESS, addFabricMaterialSaga);
}

function* editDeleteFabricMaterial(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_fabric_material`, action.payload);
        yield put({ type: EDIT_DELETE_FABRIC_MATERIAL_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_FABRIC_MATERIAL_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteFabricMaterial() {
    yield takeLatest(EDIT_DELETE_FABRIC_MATERIAL_PROGRESS, editDeleteFabricMaterial);
}

// ============================= Fabric quality Master ==============================

function* getFabricQualityListSaga(action) {
    try {
        const response = yield axiosClient.get(`/fabric_quality_list?page=${0}&size=${20}&searchKey=" "`,);
        yield put({ type: GET_FABRIC_QUALITY_LIST_SUCCESS, fabric_quality: response.data });
    } catch (error) {
        yield put({ type: GET_FABRIC_QUALITY_LIST_FAILURE });
    }
}

function* watchGetFabricQualityList() {
    yield takeLatest(GET_FABRIC_QUALITY_LIST_PROGRESS, getFabricQualityListSaga);
}

function* addFabricQualitySaga(action) {
    try {
        const response = yield axiosClient.post('/save_fabric_quality', action.payload);
        yield put({ type: ADD_FABRIC_QUALITY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_FABRIC_QUALITY_FAILURE, payload: error.message });
    }
}

function* watchAddFabricQuality() {
    yield takeLatest(ADD_FABRIC_QUALITY_PROGRESS, addFabricQualitySaga);
}

function* editDeleteFabricQuality(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_fabric_quality`, action.payload);
        yield put({ type: EDIT_DELETE_FABRIC_QUALITY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_FABRIC_QUALITY_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteFabricQuality() {
    yield takeLatest(EDIT_DELETE_FABRIC_QUALITY_PROGRESS, editDeleteFabricQuality);
}

// ============================= Fabric Use Master ==============================

function* getFabricUseListSaga(action) {
    try {
        // const response = yield axiosClient.get(`/fabric_use_list?page=${0}&size=${20}&searchKey=""`);
        const response = yield axiosClient.get(`/fabric_use_list`);
        yield put({ type: GET_FABRIC_USE_LIST_SUCCESS, fabric_use: response.data });
    } catch (error) {
        yield put({ type: GET_FABRIC_USE_LIST_FAILURE });
    }
}

function* watchGetFabricUseList() {
    yield takeLatest(GET_FABRIC_USE_LIST_PROGRESS, getFabricUseListSaga);
}

function* addFabricUseSaga(action) {
    try {
        const response = yield axiosClient.post('/save_fabric_use', action.payload);
        yield put({ type: ADD_FABRIC_USE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_FABRIC_USE_FAILURE, payload: error.message });
    }
}

function* watchAddFabricUse() {
    yield takeLatest(ADD_FABRIC_USE_PROGRESS, addFabricUseSaga);
}

function* editDeleteFabricUse(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_fabric_use`, action.payload);
        yield put({ type: EDIT_DELETE_FABRIC_USE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_FABRIC_USE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteFabricUse() {
    yield takeLatest(EDIT_DELETE_FABRIC_USE_PROGRESS, editDeleteFabricUse);
}

// ============================= Occasion Master ==============================

function* getOccasionListSaga(action) {
    try {
        const response = yield axiosClient.get(`/occasion_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_OCCASION_LIST_SUCCESS, occasion: response.data });
    } catch (error) {
        yield put({ type: GET_OCCASION_LIST_FAILURE });
    }
}

function* watchGetOccasionList() {
    yield takeLatest(GET_OCCASION_LIST_PROGRESS, getOccasionListSaga);
}

function* addOccasionSaga(action) {
    try {
        const response = yield axiosClient.post('/save_occasion', action.payload);
        yield put({ type: ADD_OCCASION_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_OCCASION_FAILURE, payload: error.message });
    }
}

function* watchAddOccasion() {
    yield takeLatest(ADD_OCCASION_PROGRESS, addOccasionSaga);
}

function* editDeleteOccasion(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_occasion`, action.payload);
        yield put({ type: EDIT_DELETE_OCCASION_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_OCCASION_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteOccasion() {
    yield takeLatest(EDIT_DELETE_OCCASION_PROGRESS, editDeleteOccasion);
}

// ============================= Pattern Master ==============================

function* getPatternListSaga(action) {
    try {
        const response = yield axiosClient.get(`/pattern_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_PATTERN_LIST_SUCCESS, pattern: response.data });
    } catch (error) {
        yield put({ type: GET_PATTERN_LIST_FAILURE });
    }
}

function* watchGetPatternList() {
    yield takeLatest(GET_PATTERN_LIST_PROGRESS, getPatternListSaga);
}

function* addPatternSaga(action) {
    try {
        const response = yield axiosClient.post('/save_pattern', action.payload);
        yield put({ type: ADD_PATTERN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_PATTERN_FAILURE, payload: error.message });
    }
}

function* watchAddPattern() {
    yield takeLatest(ADD_PATTERN_PROGRESS, addPatternSaga);
}

function* editDeletePattern(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_pattern`, action.payload);
        yield put({ type: EDIT_DELETE_PATTERN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_PATTERN_FAILURE, payload: error.message });
    }
}

function* watchEditDeletePattern() {
    yield takeLatest(EDIT_DELETE_PATTERN_PROGRESS, editDeletePattern);
}

// ============================= Role Master ==============================

function* getRoleListSaga(action) {
    try {
        const response = yield axiosClient.get(`/role_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_ROLE_LIST_SUCCESS, role: response.data });
    } catch (error) {
        yield put({ type: GET_ROLE_LIST_FAILURE });
    }
}

function* watchGetRoleList() {
    yield takeLatest(GET_ROLE_LIST_PROGRESS, getRoleListSaga);
}

function* addRoleSaga(action) {
    try {
        const response = yield axiosClient.post('/save_role', action.payload);
        yield put({ type: ADD_ROLE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_ROLE_FAILURE, payload: error.message });
    }
}

function* watchAddRole() {
    yield takeLatest(ADD_ROLE_PROGRESS, addRoleSaga);
}

function* editDeleteRole(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_role`, action.payload);
        yield put({ type: EDIT_DELETE_ROLE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_ROLE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteRole() {
    yield takeLatest(EDIT_DELETE_ROLE_PROGRESS, editDeleteRole);
}

// ============================= Unit Master ==============================

function* getUnitListSaga(action) {
    try {
        const response = yield axiosClient.get(`/unit_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_UNIT_LIST_SUCCESS, unit: response.data });
    } catch (error) {
        yield put({ type: GET_UNIT_LIST_FAILURE });
    }
}

function* watchGetUnitList() {
    yield takeLatest(GET_UNIT_LIST_PROGRESS, getUnitListSaga);
}

function* addUnitSaga(action) {
    try {
        const response = yield axiosClient.post('/save_unit', action.payload);
        yield put({ type: ADD_UNIT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_UNIT_FAILURE, payload: error.message });
    }
}

function* watchAddUnit() {
    yield takeLatest(ADD_UNIT_PROGRESS, addUnitSaga);
}

function* editDeleteUnit(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_unit`, action.payload);
        yield put({ type: EDIT_DELETE_UNIT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_UNIT_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteUnit() {
    yield takeLatest(EDIT_DELETE_UNIT_PROGRESS, editDeleteUnit);
}

// ============================= shirt BackPleat Master ==============================

function* getShirtBackPleatListSaga(action) {
    try {
        const response = yield axiosClient.get(`/shirt_back_pleat_list?page=${0}&size=${20}&searchKey=" "`,);
        yield put({ type: GET_SHIRT_BACKPLEAT_LIST_SUCCESS, shirt_backpleat: response.data });
    } catch (error) {
        yield put({ type: GET_SHIRT_BACKPLEAT_LIST_FAILURE });
    }
}

function* watchGetShirtBackPleatList() {
    yield takeLatest(GET_SHIRT_BACKPLEAT_LIST_PROGRESS, getShirtBackPleatListSaga);
}

function* addShirtBackPleatSaga(action) {
    try {
        const response = yield axiosClient.post('/save_shirt_back_pleat', action.payload);
        yield put({ type: ADD_SHIRT_BACKPLEAT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHIRT_BACKPLEAT_FAILURE, payload: error.message });
    }
}

function* watchAddShirtBackPleat() {
    yield takeLatest(ADD_SHIRT_BACKPLEAT_PROGRESS, addShirtBackPleatSaga);
}

function* editDeleteShirtBackPleat(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_shirt_back_pleat`, action.payload);
        yield put({ type: EDIT_DELETE_SHIRT_BACKPLEAT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHIRT_BACKPLEAT_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteShirtBackPleat() {
    yield takeLatest(EDIT_DELETE_SHIRT_BACKPLEAT_PROGRESS, editDeleteShirtBackPleat);
}

function* uploadShirtBackPleatImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_shirt_back_pleat_image', action.payload);
        yield put({ type: UPLOAD_SHIRT_BACKPLEAT_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHIRT_BACKPLEAT_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadShirtBackPleatImage() {
    yield takeLatest(UPLOAD_SHIRT_BACKPLEAT_IMAGE_PROGRESS, uploadShirtBackPleatImageSaga);
}
// ============================= Shirt Bottom Master ==============================

function* getShirtBottomListSaga(action) {
    try {
        const response = yield axiosClient.get(`/shirt_bottom_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHIRT_BOTTOM_LIST_SUCCESS, shirt_bottom: response.data });
    } catch (error) {
        yield put({ type: GET_SHIRT_BOTTOM_LIST_FAILURE });
    }
}

function* watchGetShirtBottomList() {
    yield takeLatest(GET_SHIRT_BOTTOM_LIST_PROGRESS, getShirtBottomListSaga);
}

function* addShirtBottomSaga(action) {
    try {
        const response = yield axiosClient.post('/save_shirt_bottom', action.payload);
        yield put({ type: ADD_SHIRT_BOTTOM_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHIRT_BOTTOM_FAILURE, payload: error.message });
    }
}

function* watchAddShirtBottom() {
    yield takeLatest(ADD_SHIRT_BOTTOM_PROGRESS, addShirtBottomSaga);
}

function* editDeleteShirtBottom(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_shirt_bottom`, action.payload);
        yield put({ type: EDIT_DELETE_SHIRT_BOTTOM_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHIRT_BOTTOM_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteShirtBottom() {
    yield takeLatest(EDIT_DELETE_SHIRT_BOTTOM_PROGRESS, editDeleteShirtBottom);
}

function* uploadShirtBottomImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_shirt_bottom_image	', action.payload);
        yield put({ type: UPLOAD_SHIRT_BOTTOM_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHIRT_BOTTOM_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadShirtBottomImage() {
    yield takeLatest(UPLOAD_SHIRT_BOTTOM_IMAGE_PROGRESS, uploadShirtBottomImageSaga);
}

// ============================= Shirt collar cuff thickness Master ==============================

function* getShirtCollarCuffThicknessListSaga(action) {
    try {
        const response = yield axiosClient.get(`/shirt_collar_cuff_thickness_list?page=${0}&size=${20}&searchKey=" "`,);
        yield put({ type: GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_SUCCESS, shirt_collar_cuff_thickness: response.data });
    } catch (error) {
        yield put({ type: GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_FAILURE });
    }
}

function* watchGetShirtCollarCuffThicknessList() {
    yield takeLatest(GET_SHIRT_COLLAR_CUFF_THICKNESS_LIST_PROGRESS, getShirtCollarCuffThicknessListSaga);
}

function* addShirtCollarCuffThicknessSaga(action) {
    try {
        const response = yield axiosClient.post('/save_shirt_collar_cuff_thickness', action.payload);
        yield put({ type: ADD_SHIRT_COLLAR_CUFF_THICKNESS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHIRT_COLLAR_CUFF_THICKNESS_FAILURE, payload: error.message });
    }
}

function* watchAddShirtCollarCuffThickness() {
    yield takeLatest(ADD_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS, addShirtCollarCuffThicknessSaga);
}

function* editDeleteShirtCollarCuffThickness(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_shirt_collar_cuff_thickness`, action.payload);
        yield put({ type: EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteShirtCollarCuffThickness() {
    yield takeLatest(EDIT_DELETE_SHIRT_COLLAR_CUFF_THICKNESS_PROGRESS, editDeleteShirtCollarCuffThickness);
}

function* uploadShirtCollarCuffThicknessImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_shirt_collar_cuff_thickness_image', action.payload);
        yield put({ type: UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadShirtCollarCuffThicknessImage() {
    yield takeLatest(UPLOAD_SHIRT_COLLAR_CUFF_THICKNESS_IMAGE_PROGRESS, uploadShirtCollarCuffThicknessImageSaga);
}
// ============================= shirt collar Master ==============================

function* getShirtCollarListSaga(action) {
    try {
        const response = yield axiosClient.get(`/shirt_collar_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHIRT_COLLAR_LIST_SUCCESS, shirt_collar: response.data });
    } catch (error) {
        yield put({ type: GET_SHIRT_COLLAR_LIST_FAILURE });
    }
}

function* watchGetShirtCollarList() {
    yield takeLatest(GET_SHIRT_COLLAR_LIST_PROGRESS, getShirtCollarListSaga);
}

function* addShirtCollarSaga(action) {
    try {
        const response = yield axiosClient.post('/save_shirt_collar', action.payload);
        yield put({ type: ADD_SHIRT_COLLAR_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHIRT_COLLAR_FAILURE, payload: error.message });
    }
}

function* watchAddShirtCollar() {
    yield takeLatest(ADD_SHIRT_COLLAR_PROGRESS, addShirtCollarSaga);
}

function* editDeleteShirtCollar(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_shirt_collar`, action.payload);
        yield put({ type: EDIT_DELETE_SHIRT_COLLAR_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHIRT_COLLAR_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteShirtCollar() {
    yield takeLatest(EDIT_DELETE_SHIRT_COLLAR_PROGRESS, editDeleteShirtCollar);
}


function* uploadShirtCollarImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_shirt_collar_image', action.payload);
        yield put({ type: UPLOAD_SHIRT_COLLAR_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHIRT_COLLAR_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadShirtCollarImage() {
    yield takeLatest(UPLOAD_SHIRT_COLLAR_IMAGE_PROGRESS, uploadShirtCollarImageSaga);
}

// ============================= shirt cuff Master ==============================

function* getShirtCuffListSaga(action) {
    try {
        const response = yield axiosClient.get(`/shirt_cuff_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHIRT_CUFF_LIST_SUCCESS, shirt_cuff: response.data });
    } catch (error) {
        yield put({ type: GET_SHIRT_CUFF_LIST_FAILURE });
    }
}

function* watchGetShirtCuffList() {
    yield takeLatest(GET_SHIRT_CUFF_LIST_PROGRESS, getShirtCuffListSaga);
}

function* addShirtCuffSaga(action) {
    try {
        const response = yield axiosClient.post('/save_shirt_cuff', action.payload);
        yield put({ type: ADD_SHIRT_CUFF_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHIRT_CUFF_FAILURE, payload: error.message });
    }
}

function* watchAddShirtCuff() {
    yield takeLatest(ADD_SHIRT_CUFF_PROGRESS, addShirtCuffSaga);
}

function* editDeleteShirtCuff(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_shirt_cuff`, action.payload);
        yield put({ type: EDIT_DELETE_SHIRT_CUFF_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHIRT_CUFF_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteShirtCuff() {
    yield takeLatest(EDIT_DELETE_SHIRT_CUFF_PROGRESS, editDeleteShirtCuff);
}

// ============================= Shirt Fitting Master ==============================

function* getShirtFittingListSaga(action) {
    try {
        const response = yield axiosClient.get(`/shirt_fitting_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHIRT_FITTING_LIST_SUCCESS, shirt_fitting: response.data });
    } catch (error) {
        yield put({ type: GET_SHIRT_FITTING_LIST_FAILURE });
    }
}

function* watchGetShirtFittingList() {
    yield takeLatest(GET_SHIRT_FITTING_LIST_PROGRESS, getShirtFittingListSaga);
}

function* addShirtFittingSaga(action) {
    try {
        const response = yield axiosClient.post('/save_shirt_fitting', action.payload);
        yield put({ type: ADD_SHIRT_FITTING_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHIRT_FITTING_FAILURE, payload: error.message });
    }
}

function* watchAddShirtFitting() {
    yield takeLatest(ADD_SHIRT_FITTING_PROGRESS, addShirtFittingSaga);
}

function* editDeleteShirtFitting(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_shirt_fitting`, action.payload);
        yield put({ type: EDIT_DELETE_SHIRT_FITTING_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHIRT_FITTING_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteShirtFitting() {
    yield takeLatest(EDIT_DELETE_SHIRT_FITTING_PROGRESS, editDeleteShirtFitting);
}

// ============================= shirt front Master ==============================

function* getShirtFrontListSaga(action) {
    try {
        const response = yield axiosClient.get(`/shirt_front_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHIRT_FRONT_LIST_SUCCESS, shirt_front: response.data });
    } catch (error) {
        yield put({ type: GET_SHIRT_FRONT_LIST_FAILURE });
    }
}

function* watchGetShirtFrontList() {
    yield takeLatest(GET_SHIRT_FRONT_LIST_PROGRESS, getShirtFrontListSaga);
}

function* addShirtFrontSaga(action) {
    try {
        const response = yield axiosClient.post('/save_shirt_front', action.payload);
        yield put({ type: ADD_SHIRT_FRONT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHIRT_FRONT_FAILURE, payload: error.message });
    }
}

function* watchAddShirtFront() {
    yield takeLatest(ADD_SHIRT_FRONT_PROGRESS, addShirtFrontSaga);
}

function* editDeleteShirtFront(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_shirt_front`, action.payload);
        yield put({ type: EDIT_DELETE_SHIRT_FRONT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHIRT_FRONT_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteShirtFront() {
    yield takeLatest(EDIT_DELETE_SHIRT_FRONT_PROGRESS, editDeleteShirtFront);
}

function* uploadShirtFrontImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_shirt_front_image', action.payload);
        yield put({ type: UPLOAD_SHIRT_FRONT_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHIRT_FRONT_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadShirtFrontImage() {
    yield takeLatest(UPLOAD_SHIRT_FRONT_IMAGE_PROGRESS, uploadShirtFrontImageSaga);
}
// ============================= Shirt Pocket Master ==============================

function* getShirtPocketListSaga(action) {
    try {
        const response = yield axiosClient.get(`/shirt_pocket_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHIRT_POCKET_LIST_SUCCESS, shirt_pocket: response.data });
    } catch (error) {
        yield put({ type: GET_SHIRT_POCKET_LIST_FAILURE });
    }
}

function* watchGetShirtPocketList() {
    yield takeLatest(GET_SHIRT_POCKET_LIST_PROGRESS, getShirtPocketListSaga);
}

function* addShirtPocketSaga(action) {
    try {
        const response = yield axiosClient.post('/save_shirt_pocket', action.payload);
        yield put({ type: ADD_SHIRT_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHIRT_POCKET_FAILURE, payload: error.message });
    }
}

function* watchAddShirtPocket() {
    yield takeLatest(ADD_SHIRT_POCKET_PROGRESS, addShirtPocketSaga);
}

function* editDeleteShirtPocket(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_shirt_pocket`, action.payload);
        yield put({ type: EDIT_DELETE_SHIRT_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHIRT_POCKET_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteShirtPocket() {
    yield takeLatest(EDIT_DELETE_SHIRT_POCKET_PROGRESS, editDeleteShirtPocket);
}

function* uploadShirtPocketImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_shirt_pocket_image', action.payload);
        yield put({ type: UPLOAD_SHIRT_POCKET_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHIRT_POCKET_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadShirtPocketImage() {
    yield takeLatest(UPLOAD_SHIRT_POCKET_IMAGE_PROGRESS, uploadShirtPocketImageSaga);
}

// ============================= Trouser Bottom Master ==============================

function* getTrouserBottomListSaga(action) {
    try {
        const response = yield axiosClient.get(`/trouser_bottom_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_TROUSER_BOTTOM_LIST_SUCCESS, trouser_bottom: response.data });
    } catch (error) {
        yield put({ type: GET_TROUSER_BOTTOM_LIST_FAILURE });
    }
}

function* watchGetTrouserBottomList() {
    yield takeLatest(GET_TROUSER_BOTTOM_LIST_PROGRESS, getTrouserBottomListSaga);
}

function* addTrouserBottomSaga(action) {
    try {
        const response = yield axiosClient.post('/save_trouser_bottom', action.payload);
        yield put({ type: ADD_TROUSER_BOTTOM_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_TROUSER_BOTTOM_FAILURE, payload: error.message });
    }
}

function* watchAddTrouserBottom() {
    yield takeLatest(ADD_TROUSER_BOTTOM_PROGRESS, addTrouserBottomSaga);
}

function* editDeleteTrouserBottom(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_trouser_bottom`, action.payload);
        yield put({ type: EDIT_DELETE_TROUSER_BOTTOM_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_TROUSER_BOTTOM_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteTrouserBottom() {
    yield takeLatest(EDIT_DELETE_TROUSER_BOTTOM_PROGRESS, editDeleteTrouserBottom);
}

function* uploadTrouserBottomImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_trouser_bottom_image', action.payload);
        yield put({ type: UPLOAD_TROUSER_BOTTOM_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_TROUSER_BOTTOM_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadTrouserBottomImage() {
    yield takeLatest(UPLOAD_TROUSER_BOTTOM_IMAGE_PROGRESS, uploadTrouserBottomImageSaga);
}
// ============================= trouser crotch Master ==============================

function* getTrouserCrotchListSaga(action) {
    try {
        const response = yield axiosClient.get(`/trouser_crotch_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_TROUSER_CROTCH_LIST_SUCCESS, trouser_crotch: response.data });
    } catch (error) {
        yield put({ type: GET_TROUSER_CROTCH_LIST_FAILURE });
    }
}

function* watchGetTrouserCrotchList() {
    yield takeLatest(GET_TROUSER_CROTCH_LIST_PROGRESS, getTrouserCrotchListSaga);
}

function* addTrouserCrotchSaga(action) {
    try {
        const response = yield axiosClient.post('/save_trouser_crotch', action.payload);
        yield put({ type: ADD_TROUSER_CROTCH_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_TROUSER_CROTCH_FAILURE, payload: error.message });
    }
}

function* watchAddTrouserCrotch() {
    yield takeLatest(ADD_TROUSER_CROTCH_PROGRESS, addTrouserCrotchSaga);
}

function* editDeleteTrouserCrotch(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_trouser_crotch`, action.payload);
        yield put({ type: EDIT_DELETE_TROUSER_CROTCH_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_TROUSER_CROTCH_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteTrouserCrotch() {
    yield takeLatest(EDIT_DELETE_TROUSER_CROTCH_PROGRESS, editDeleteTrouserCrotch);
}

function* uploadTrouserCrotchImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_trouser_crotch_image', action.payload);
        yield put({ type: UPLOAD_TROUSER_CROTCH_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_TROUSER_CROTCH_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadTrouserCrotchImage() {
    yield takeLatest(UPLOAD_TROUSER_CROTCH_IMAGE_PROGRESS, uploadTrouserCrotchImageSaga);
}
// ============================= Trouser Pocket Master ==============================

function* getTrouserPocketListSaga(action) {
    try {
        const response = yield axiosClient.get(`/trouser_back_pocket_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_TROUSER_POCKET_LIST_SUCCESS, trouser_pocket: response.data });
    } catch (error) {
        yield put({ type: GET_TROUSER_POCKET_LIST_FAILURE });
    }
}

function* watchGetTrouserPocketList() {
    yield takeLatest(GET_TROUSER_POCKET_LIST_PROGRESS, getTrouserPocketListSaga);
}

function* addTrouserPocketSaga(action) {
    try {
        const response = yield axiosClient.post('/save_trouser_back_pocket', action.payload);
        yield put({ type: ADD_TROUSER_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_TROUSER_POCKET_FAILURE, payload: error.message });
    }
}

function* watchAddTrouserPocket() {
    yield takeLatest(ADD_TROUSER_POCKET_PROGRESS, addTrouserPocketSaga);
}

function* editDeleteTrouserPocket(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_trouser_back_pocket`, action.payload);
        yield put({ type: EDIT_DELETE_TROUSER_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_TROUSER_POCKET_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteTrouserPocket() {
    yield takeLatest(EDIT_DELETE_TROUSER_POCKET_PROGRESS, editDeleteTrouserPocket);
}

function* uploadTrouserPocketImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_trouser_back_pocket_image', action.payload);
        yield put({ type: UPLOAD_TROUSER_POCKET_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_TROUSER_POCKET_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadTrouserPocketImage() {
    yield takeLatest(UPLOAD_TROUSER_POCKET_IMAGE_PROGRESS, uploadTrouserPocketImageSaga);
}

// ============================= Fabrics Master ==============================

function* getFabricsListSaga(action) {
    try {
        // const response = yield axiosClient.get(`/fabric_list?page=${0}&size=${20}&searchKey=""`,);
        const response = yield axiosClient.get(`/fabric_list`,);
        yield put({ type: GET_FABRICS_LIST_SUCCESS, fabrics: response.data });
    } catch (error) {
        yield put({ type: GET_FABRICS_LIST_FAILURE });
    }
}

function* watchGetFabricsList() {
    yield takeLatest(GET_FABRICS_LIST_PROGRESS, getFabricsListSaga);
}

function* addFabricsSaga(action) {
    try {
        const response = yield axiosClient.post('/save_fabric', action.payload);
        yield put({ type: ADD_FABRICS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_FABRICS_FAILURE, payload: error.message });
    }
}

function* watchAddFabrics() {
    yield takeLatest(ADD_FABRICS_PROGRESS, addFabricsSaga);
}

function* editDeleteFabrics(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_fabric`, action.payload);
        yield put({ type: EDIT_DELETE_FABRICS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_FABRICS_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteFabrics() {
    yield takeLatest(EDIT_DELETE_FABRICS_PROGRESS, editDeleteFabrics);
}

// ============================= manufracturers Master ==============================

function* getManufracturersListSaga(action) {
    try {
        const response = yield axiosClient.get(`/manufacturer_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_MANUFRACTURERS_LIST_SUCCESS, manufracturers: response.data });
    } catch (error) {
        yield put({ type: GET_MANUFRACTURERS_LIST_FAILURE });
    }
}

function* watchGetManufracturersList() {
    yield takeLatest(GET_MANUFRACTURERS_LIST_PROGRESS, getManufracturersListSaga);
}

function* addManufracturersSaga(action) {
    try {
        const response = yield axiosClient.post('/save_manufacturer', action.payload);
        yield put({ type: ADD_MANUFRACTURERS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_MANUFRACTURERS_FAILURE, payload: error.message });
    }
}

function* watchAddManufracturers() {
    yield takeLatest(ADD_MANUFRACTURERS_PROGRESS, addManufracturersSaga);
}

function* editDeleteManufracturers(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_manufacturer`, action.payload);
        yield put({ type: EDIT_DELETE_MANUFRACTURERS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_MANUFRACTURERS_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteManufracturers() {
    yield takeLatest(EDIT_DELETE_MANUFRACTURERS_PROGRESS, editDeleteManufracturers);
}

// ============================= Sititching Centers Master ==============================

function* getStitchingCentersListSaga(action) {
    try {
        const response = yield axiosClient.get(`/stitching_center_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_STITCHING_CENTERS_LIST_SUCCESS, stitching_centers: response.data });
    } catch (error) {
        yield put({ type: GET_STITCHING_CENTERS_LIST_FAILURE });
    }
}

function* watchGetStitchingCentersList() {
    yield takeLatest(GET_STITCHING_CENTERS_LIST_PROGRESS, getStitchingCentersListSaga);
}

function* addStitchingCentersSaga(action) {
    try {
        const response = yield axiosClient.post('/save_stitching_center', action.payload);
        yield put({ type: ADD_STITCHING_CENTERS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_STITCHING_CENTERS_FAILURE, payload: error.message });
    }
}

function* watchAddStitchingCenters() {
    yield takeLatest(ADD_STITCHING_CENTERS_PROGRESS, addStitchingCentersSaga);
}

function* editDeleteStitchingCenters(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_stitching_center`, action.payload);
        yield put({ type: EDIT_DELETE_STITCHING_CENTERS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_STITCHING_CENTERS_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteStitchingCenters() {
    yield takeLatest(EDIT_DELETE_STITCHING_CENTERS_PROGRESS, editDeleteStitchingCenters);
}

// ============================= Tailor Shops Master ==============================

function* getTailorShopsListSaga(action) {
    try {
        const response = yield axiosClient.get(`/tailor_shop_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_TAILOR_SHOPS_LIST_SUCCESS, tailor_shops: response.data });
    } catch (error) {
        yield put({ type: GET_TAILOR_SHOPS_LIST_FAILURE });
    }
}

function* watchGetTailorShopsList() {
    yield takeLatest(GET_TAILOR_SHOPS_LIST_PROGRESS, getTailorShopsListSaga);
}

function* addTailorShopsSaga(action) {
    try {
        const response = yield axiosClient.post('/save_tailor_shop', action.payload);
        yield put({ type: ADD_TAILOR_SHOPS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_TAILOR_SHOPS_FAILURE, payload: error.message });
    }
}

function* watchAddTailorShops() {
    yield takeLatest(ADD_TAILOR_SHOPS_PROGRESS, addTailorShopsSaga);
}

function* editDeleteTailorShops(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_tailor_shop`, action.payload);
        yield put({ type: EDIT_DELETE_TAILOR_SHOPS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_TAILOR_SHOPS_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteTailorShops() {
    yield takeLatest(EDIT_DELETE_TAILOR_SHOPS_PROGRESS, editDeleteTailorShops);
}


// ===================================FEB==================================================

// =============================Waist Coat Bottom Type master =========================

function* getWaistCoatBottomTypeListSaga(action) {
    try {
        const response = yield axiosClient.get(`/waist_coat_bottom_type_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_WAIST_COAT_BOTTOM_TYPE_LIST_SUCCESS, waist_coat_bottom_type: response.data });
    } catch (error) {
        yield put({ type: GET_WAIST_COAT_BOTTOM_TYPE_LIST_FAILURE});
    }
}

function* watchWaistCoatBottomTypeList() {
    yield takeLatest(GET_WAIST_COAT_BOTTOM_TYPE_LIST_PROGRESS, getWaistCoatBottomTypeListSaga);
}

function* addWaistCoatBottomTypeSaga(action) {
    try {
        const response = yield axiosClient.post('/save_waist_coat_bottom_type', action.payload);
        yield put({ type: ADD_WAIST_COAT_BOTTOM_TYPE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_WAIST_COAT_BOTTOM_TYPE_FAILURE, payload: error.message });
    }
}

function* watchAddWaistCoatBottomType() {
    yield takeLatest(ADD_WAIST_COAT_BOTTOM_TYPE_PROGRESS, addWaistCoatBottomTypeSaga);
}

function* editDeleteWaistCoatBottomType(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_waist_coat_bottom_type`, action.payload);
        yield put({ type: EDIT_DELETE_WAIST_COAT_BOTTOM_TYPE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_WAIST_COAT_BOTTOM_TYPE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteWaistCoatBottomType() {
    yield takeLatest(EDIT_DELETE_WAIST_COAT_BOTTOM_TYPE_PROGRESS, editDeleteWaistCoatBottomType);
}

function* uploadWaistCoatBottomTypeImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_waist_coat_bottom_type_image', action.payload);
        yield put({ type: UPLOAD_WAIST_COAT_BOTTOM_TYPE_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_WAIST_COAT_BOTTOM_TYPE_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadWaistCoatBottomTypeImage() {
    yield takeLatest(UPLOAD_WAIST_COAT_BOTTOM_TYPE_IMAGE_PROGRESS, uploadWaistCoatBottomTypeImageSaga);
}

// ====================Waist Coat Type master ======================

function* getWaistCoatTypeListSaga(action) {
    try {
        const response = yield axiosClient.get(`/waist_coat_type_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_WAIST_COAT_TYPE_LIST_SUCCESS, waist_coat_type: response.data });
    } catch (error) {
        yield put({ type: GET_WAIST_COAT_TYPE_LIST_FAILURE});
    }
}

function* watchWaistCoatTypeList() {
    yield takeLatest(GET_WAIST_COAT_TYPE_LIST_PROGRESS, getWaistCoatTypeListSaga);
}

function* addWaistCoatTypeSaga(action) {
    try {
        const response = yield axiosClient.post('/save_waist_coat_type', action.payload);
        yield put({ type: ADD_WAIST_COAT_TYPE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_WAIST_COAT_TYPE_FAILURE, payload: error.message });
    }
}

function* watchAddWaistCoatType() {
    yield takeLatest(ADD_WAIST_COAT_TYPE_PROGRESS, addWaistCoatTypeSaga);
}

function* editDeleteWaistCoatType(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_waist_coat_type`, action.payload);
        yield put({ type: EDIT_DELETE_WAIST_COAT_TYPE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_WAIST_COAT_TYPE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteWaistCoatType() {
    yield takeLatest(EDIT_DELETE_WAIST_COAT_TYPE_PROGRESS, editDeleteWaistCoatType);
}

function* uploadWaistCoatTypeImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_waist_coat_type_image', action.payload);
        yield put({ type: UPLOAD_WAIST_COAT_TYPE_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_WAIST_COAT_TYPE_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadWaistCoatTypeImage() {
    yield takeLatest(UPLOAD_WAIST_COAT_TYPE_IMAGE_PROGRESS, uploadWaistCoatTypeImageSaga);
}

// =============================Waist Coat Neck master =========================

function* getWaistCoatNeckListSaga(action) {
    try {
        const response = yield axiosClient.get(`/waist_coat_neck_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_WAIST_COAT_NECK_LIST_SUCCESS, waist_coat_neck: response.data });
    } catch (error) {
        yield put({ type: GET_WAIST_COAT_NECK_LIST_FAILURE});
    }
}

function* watchWaistCoatNeckList() {
    yield takeLatest(GET_WAIST_COAT_NECK_LIST_PROGRESS, getWaistCoatNeckListSaga);
}

function* addWaistCoatNeckSaga(action) {
    try {
        const response = yield axiosClient.post('/save_waist_coat_neck', action.payload);
        yield put({ type: ADD_WAIST_COAT_NECK_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_WAIST_COAT_NECK_FAILURE, payload: error.message });
    }
}

function* watchAddWaistCoatNeck() {
    yield takeLatest(ADD_WAIST_COAT_NECK_PROGRESS, addWaistCoatNeckSaga);
}

function* editDeleteWaistCoatNeck(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_waist_coat_neck`, action.payload);
        yield put({ type: EDIT_DELETE_WAIST_COAT_NECK_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_WAIST_COAT_NECK_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteWaistCoatNeck() {
    yield takeLatest(EDIT_DELETE_WAIST_COAT_NECK_PROGRESS, editDeleteWaistCoatNeck);
}

function* uploadWaistCoatNeckImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_waist_coat_neck_image', action.payload);
        yield put({ type: UPLOAD_WAIST_COAT_NECK_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_WAIST_COAT_NECK_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadWaistCoatNeckImage() {
    yield takeLatest(UPLOAD_WAIST_COAT_NECK_IMAGE_PROGRESS, uploadWaistCoatNeckImageSaga);
}

// =============================Waist Coat Pocket master =========================
function* getWaistCoatPocketListSaga(action) {
    try {
        const response = yield axiosClient.get(`/waist_pocket_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_WAIST_COAT_POCKET_LIST_SUCCESS, waist_coat_pocket: response.data });
    } catch (error) {
        yield put({ type: GET_WAIST_COAT_POCKET_LIST_FAILURE});
    }
}

function* watchWaistCoatPocketList() {
    yield takeLatest(GET_WAIST_COAT_POCKET_LIST_PROGRESS, getWaistCoatPocketListSaga);
}

function* addWaistCoatPocketSaga(action) {
    try {
        const response = yield axiosClient.post('/save_waist_pocket', action.payload);
        yield put({ type: ADD_WAIST_COAT_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_WAIST_COAT_POCKET_FAILURE, payload: error.message });
    }
}

function* watchAddWaistCoatPocket() {
    yield takeLatest(ADD_WAIST_COAT_POCKET_PROGRESS, addWaistCoatPocketSaga);
}

function* editDeleteWaistCoatPocket(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_waist_pocket`, action.payload);
        yield put({ type: EDIT_DELETE_WAIST_COAT_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_WAIST_COAT_POCKET_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteWaistCoatPocket() {
    yield takeLatest(EDIT_DELETE_WAIST_COAT_POCKET_PROGRESS, editDeleteWaistCoatPocket);
}

function* uploadWaistCoatPocketImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_waist_pocket_image', action.payload);
        yield put({ type: UPLOAD_WAIST_COAT_POCKET_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_WAIST_COAT_POCKET_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadWaistCoatPocketImage() {
    yield takeLatest(UPLOAD_WAIST_COAT_POCKET_IMAGE_PROGRESS, uploadWaistCoatPocketImageSaga);
}

// =============================Sherwani Collar Design master =========================

function* getSherwaniCollarDesignListSaga(action) {
    try {
        const response = yield axiosClient.get(`/sherwani_collar_design_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHERWANI_COLLAR_DESIGN_LIST_SUCCESS, sherwani_collar_design: response.data });
    } catch (error) {
        yield put({ type: GET_SHERWANI_COLLAR_DESIGN_LIST_FAILURE});
    }
}

function* watchSherwaniCollarDesignList() {
    yield takeLatest(GET_SHERWANI_COLLAR_DESIGN_LIST_PROGRESS, getSherwaniCollarDesignListSaga);
}

function* addSherwaniCollarDesignSaga(action) {
    try {
        const response = yield axiosClient.post('/save_sherwani_collar_design', action.payload);
        yield put({ type: ADD_SHERWANI_COLLAR_DESIGN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHERWANI_COLLAR_DESIGN_FAILURE, payload: error.message });
    }
}

function* watchAddSherwaniCollarDesign() {
    yield takeLatest(ADD_SHERWANI_COLLAR_DESIGN_PROGRESS, addSherwaniCollarDesignSaga);
}

function* editDeleteSherwaniCollarDesign(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_sherwani_collar_design`, action.payload);
        yield put({ type: EDIT_DELETE_SHERWANI_COLLAR_DESIGN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHERWANI_COLLAR_DESIGN_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteSherwaniCollarDesign() {
    yield takeLatest(EDIT_DELETE_SHERWANI_COLLAR_DESIGN_PROGRESS, editDeleteSherwaniCollarDesign);
}

function* uploadSherwaniCollarDesignImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_sherwani_collar_design_image', action.payload);
        yield put({ type: UPLOAD_SHERWANI_COLLAR_DESIGN_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHERWANI_COLLAR_DESIGN_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadSherwaniCollarDesignImage() {
    yield takeLatest(UPLOAD_SHERWANI_COLLAR_DESIGN_IMAGE_PROGRESS, uploadSherwaniCollarDesignImageSaga);
}

// =============================Sherwani Collar master =========================

function* getSherwaniCollarListSaga(action) {
    try {
        const response = yield axiosClient.get(`/sherwani_collar_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHERWANI_COLLAR_LIST_SUCCESS, sherwani_collar: response.data });
    } catch (error) {
        yield put({ type: GET_SHERWANI_COLLAR_LIST_FAILURE});
    }
}

function* watchSherwaniCollarList() {
    yield takeLatest(GET_SHERWANI_COLLAR_LIST_PROGRESS, getSherwaniCollarListSaga);
}

function* addSherwaniCollarSaga(action) {
    try {
        const response = yield axiosClient.post('/save_sherwani_collar', action.payload);
        yield put({ type: ADD_SHERWANI_COLLAR_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHERWANI_COLLAR_FAILURE, payload: error.message });
    }
}

function* watchAddSherwaniCollar() {
    yield takeLatest(ADD_SHERWANI_COLLAR_PROGRESS, addSherwaniCollarSaga);
}

function* editDeleteSherwaniCollar(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_sherwani_collar`, action.payload);
        yield put({ type: EDIT_DELETE_SHERWANI_COLLAR_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHERWANI_COLLAR_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteSherwaniCollar() {
    yield takeLatest(EDIT_DELETE_SHERWANI_COLLAR_PROGRESS, editDeleteSherwaniCollar);
}

function* uploadSherwaniCollarImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_sherwani_collar_image', action.payload);
        yield put({ type: UPLOAD_SHERWANI_COLLAR_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHERWANI_COLLAR_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadSherwaniCollarImage() {
    yield takeLatest(UPLOAD_SHERWANI_COLLAR_IMAGE_PROGRESS, uploadSherwaniCollarImageSaga);
}

// =============================Sherwani Cuff Design master =========================

function* getSherwaniCuffDesignListSaga(action) {
    try {
        const response = yield axiosClient.get(`/sherwani_cuff_design_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHERWANI_CUFF_DESIGN_LIST_SUCCESS, sherwani_cuff_design: response.data });
    } catch (error) {
        yield put({ type: GET_SHERWANI_CUFF_DESIGN_LIST_FAILURE});
    }
}

function* watchSherwaniCuffDesignList() {
    yield takeLatest(GET_SHERWANI_CUFF_DESIGN_LIST_PROGRESS, getSherwaniCuffDesignListSaga);
}

function* addSherwaniCuffDesignSaga(action) {
    try {
        const response = yield axiosClient.post('/save_sherwani_cuff_design', action.payload);
        yield put({ type: ADD_SHERWANI_CUFF_DESIGN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHERWANI_CUFF_DESIGN_FAILURE, payload: error.message });
    }
}

function* watchAddSherwaniCuffDesign() {
    yield takeLatest(ADD_SHERWANI_CUFF_DESIGN_PROGRESS, addSherwaniCuffDesignSaga);
}

function* editDeleteSherwaniCuffDesign(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_sherwani_cuff_design`, action.payload);
        yield put({ type: EDIT_DELETE_SHERWANI_CUFF_DESIGN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHERWANI_CUFF_DESIGN_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteSherwaniCuffDesign() {
    yield takeLatest(EDIT_DELETE_SHERWANI_CUFF_DESIGN_PROGRESS, editDeleteSherwaniCuffDesign);
}

function* uploadSherwaniCuffDesignImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_sherwani_cuff_design_image', action.payload);
        yield put({ type: UPLOAD_SHERWANI_CUFF_DESIGN_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHERWANI_CUFF_DESIGN_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadSherwanCuffDesignImage() {
    yield takeLatest(UPLOAD_SHERWANI_CUFF_DESIGN_IMAGE_PROGRESS, uploadSherwaniCuffDesignImageSaga);
}

// =============================Sherwani Cuff Master =========================

function* getSherwaniCuffListSaga(action) {
    try {
        const response = yield axiosClient.get(`/sherwani_cuff_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHERWANI_CUFF_LIST_SUCCESS, sherwani_cuff: response.data });
    } catch (error) {
        yield put({ type: GET_SHERWANI_CUFF_LIST_FAILURE});
    }
}

function* watchSherwaniCuffList() {
    yield takeLatest(GET_SHERWANI_CUFF_LIST_PROGRESS, getSherwaniCuffListSaga);
}

function* addSherwaniCuffSaga(action) {
    try {
        const response = yield axiosClient.post('/save_sherwani_cuff', action.payload);
        yield put({ type: ADD_SHERWANI_CUFF_DESIGN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHERWANI_CUFF_DESIGN_FAILURE, payload: error.message });
    }
}

function* watchAddSherwaniCuff() {
    yield takeLatest(ADD_SHERWANI_CUFF_PROGRESS, addSherwaniCuffSaga);
}

function* editDeleteSherwaniCuff(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_sherwani_cuff`, action.payload);
        yield put({ type: EDIT_DELETE_SHERWANI_CUFF_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHERWANI_CUFF_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteSherwaniCuff() {
    yield takeLatest(EDIT_DELETE_SHERWANI_CUFF_PROGRESS, editDeleteSherwaniCuff);
}

function* uploadSherwaniCuffImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_sherwani_cuff_image', action.payload);
        yield put({ type: UPLOAD_SHERWANI_CUFF_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHERWANI_CUFF_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadSherwaniCuffImage() {
    yield takeLatest(UPLOAD_SHERWANI_CUFF_IMAGE_PROGRESS, uploadSherwaniCuffImageSaga);
}

// =============================Sherwani Front Master =========================

function* getSherwaniFrontListSaga(action) {
    try {
        const response = yield axiosClient.get(`/sherwani_front_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHERWANI_FRONT_LIST_SUCCESS, sherwani_front: response.data });
    } catch (error) {
        yield put({ type: GET_SHERWANI_FRONT_LIST_FAILURE});
    }
}

function* watchSherwaniFrontList() {
    yield takeLatest(GET_SHERWANI_FRONT_LIST_PROGRESS, getSherwaniFrontListSaga);
}

function* addSherwaniFrontSaga(action) {
    try {
        const response = yield axiosClient.post('/save_sherwani_front', action.payload);
        yield put({ type: ADD_SHERWANI_FRONT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHERWANI_FRONT_FAILURE, payload: error.message });
    }
}

function* watchAddSherwaniFront() {
    yield takeLatest(ADD_SHERWANI_FRONT_PROGRESS, addSherwaniFrontSaga);
}

function* editDeleteSherwaniFront(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_sherwani_front`, action.payload);
        yield put({ type: EDIT_DELETE_SHERWANI_FRONT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHERWANI_FRONT_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteSherwaniFront() {
    yield takeLatest(EDIT_DELETE_SHERWANI_FRONT_PROGRESS, editDeleteSherwaniFront);
}

function* uploadSherwaniFrontImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_sherwani_front_image', action.payload);
        yield put({ type: UPLOAD_SHERWANI_FRONT_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHERWANI_FRONT_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadSherwanFrontImage() {
    yield takeLatest(UPLOAD_SHERWANI_FRONT_IMAGE_PROGRESS, uploadSherwaniFrontImageSaga);
}

// =============================Sherwani Jari Design Master =========================

function* getSherwaniJariDesignListSaga(action) {
    try {
        const response = yield axiosClient.get(`/sherwani_jari_design_list`,);
        yield put({ type: GET_SHERWANI_JARI_DESIGN_LIST_SUCCESS, sherwani_jari_design: response.data });
    } catch (error) {
        yield put({ type: GET_SHERWANI_JARI_DESIGN_LIST_FAILURE});
    }
}

function* watchSherwaniJariDesignList() {
    yield takeLatest(GET_SHERWANI_JARI_DESIGN_LIST_PROGRESS, getSherwaniJariDesignListSaga);
}

function* addSherwaniJariDesignSaga(action) {
    try {
        const response = yield axiosClient.post('/save_sherwani_jari_design', action.payload);
        yield put({ type: ADD_SHERWANI_JARI_DESIGN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHERWANI_JARI_DESIGN_FAILURE, payload: error.message });
    }
}

function* watchAddSherwaniJariDesign() {
    yield takeLatest(ADD_SHERWANI_JARI_DESIGN_PROGRESS, addSherwaniJariDesignSaga);
}

function* editDeleteSherwaniJariDesign(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_sherwani_jari_design`, action.payload);
        yield put({ type: EDIT_DELETE_SHERWANI_JARI_DESIGN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHERWANI_JARI_DESIGN_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteSherwaniJariDesign() {
    yield takeLatest(EDIT_DELETE_SHERWANI_JARI_DESIGN_PROGRESS, editDeleteSherwaniJariDesign);
}

function* uploadSherwaniJariDesignImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_sherwani_jari_design_image', action.payload);
        yield put({ type: UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadSherwanJariDesignImage() {
    yield takeLatest(UPLOAD_SHERWANI_JARI_DESIGN_IMAGE_PROGRESS, uploadSherwaniJariDesignImageSaga);
}

// =============================Sherwani Pocket Master =========================

function* getSherwaniPocketListSaga(action) {
    try {
        const response = yield axiosClient.get(`/sherwani_pocket_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHERWANI_POCKET_LIST_SUCCESS, sherwani_pocket: response.data });
    } catch (error) {
        yield put({ type: GET_SHERWANI_POCKET_LIST_FAILURE});
    }
}

function* watchSherwaniPocketList() {
    yield takeLatest(GET_SHERWANI_POCKET_LIST_PROGRESS, getSherwaniPocketListSaga);
}

function* addSherwaniPocketSaga(action) {
    try {
        const response = yield axiosClient.post('/save_sherwani_pocket', action.payload);
        yield put({ type: ADD_SHERWANI_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHERWANI_POCKET_FAILURE, payload: error.message });
    }
}

function* watchAddSherwaniPocket() {
    yield takeLatest(ADD_SHERWANI_POCKET_PROGRESS, addSherwaniPocketSaga);
}

function* editDeleteSherwaniPocket(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_sherwani_pocket`, action.payload);
        yield put({ type: EDIT_DELETE_SHERWANI_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHERWANI_POCKET_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteSherwaniPocket() {
    yield takeLatest(EDIT_DELETE_SHERWANI_POCKET_PROGRESS, editDeleteSherwaniPocket);
}

function* uploadSherwaniPocketImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_sherwani_pocket_image', action.payload);
        yield put({ type: UPLOAD_SHERWANI_POCKET_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHERWANI_POCKET_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadSherwanPocketImage() {
    yield takeLatest(UPLOAD_SHERWANI_POCKET_IMAGE_PROGRESS, uploadSherwaniPocketImageSaga);
}

// =============================Sherwani Side Cut Master =========================

function* getSherwaniSideCutListSaga(action) {
    try {
        const response = yield axiosClient.get(`/sherwani_side_cut_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_SHERWANI_SIDE_CUT_LIST_SUCCESS, sherwani_side_cut: response.data });
    } catch (error) {
        yield put({ type: GET_SHERWANI_SIDE_CUT_LIST_FAILURE});
    }
}

function* watchSherwaniSideCutList() {
    yield takeLatest(GET_SHERWANI_SIDE_CUT_LIST_PROGRESS, getSherwaniSideCutListSaga);
}

function* addSherwaniSideCutSaga(action) {
    try {
        const response = yield axiosClient.post('/save_sherwani_side_cut', action.payload);
        yield put({ type: ADD_SHERWANI_SIDE_CUT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_SHERWANI_SIDE_CUT_FAILURE, payload: error.message });
    }
}

function* watchAddSherwaniSideCut() {
    yield takeLatest(ADD_SHERWANI_SIDE_CUT_PROGRESS, addSherwaniSideCutSaga);
}

function* editDeleteSherwaniSideCut(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_sherwani_side_cut`, action.payload);
        yield put({ type: EDIT_DELETE_SHERWANI_SIDE_CUT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_SHERWANI_SIDE_CUT_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteSherwaniSideCut() {
    yield takeLatest(EDIT_DELETE_SHERWANI_SIDE_CUT_PROGRESS, editDeleteSherwaniSideCut);
}

function* uploadSherwaniSideCuttImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_sherwani_side_cut_image', action.payload);
        yield put({ type: UPLOAD_SHERWANI_SIDE_CUT_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_SHERWANI_SIDE_CUT_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadSherwaniSideCutImage() {
    yield takeLatest(UPLOAD_SHERWANI_SIDE_CUT_IMAGE_PROGRESS, uploadSherwaniSideCuttImageSaga);
}

// =============================Kurta Collar Master =========================

function* getKurtaCollarListSaga(action) {
    try {
        const response = yield axiosClient.get(`/kurta_collar_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_KURTA_COLLAR_LIST_SUCCESS, kurta_collar: response.data });
    } catch (error) {
        yield put({ type: GET_KURTA_COLLAR_LIST_FAILURE});
    }
}

function* watchKurtaCollarList() {
    yield takeLatest(GET_KURTA_COLLAR_LIST_PROGRESS, getKurtaCollarListSaga);
}

function* addKurtaCollarSaga(action) {
    try {
        const response = yield axiosClient.post('/save_kurta_collar', action.payload);
        yield put({ type: ADD_KURTA_COLLAR_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_KURTA_COLLAR_FAILURE, payload: error.message });
    }
}

function* watchAddKurtaCollar() {
    yield takeLatest(ADD_KURTA_COLLAR_PROGRESS, addKurtaCollarSaga);
}

function* editDeleteKurtaCollar(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_kurta_collar`, action.payload);
        yield put({ type: EDIT_DELETE_KURTA_COLLAR_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_KURTA_COLLAR_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteKurtaCollar() {
    yield takeLatest(EDIT_DELETE_KURTA_COLLAR_PROGRESS, editDeleteKurtaCollar);
}

function* uploadkurtaCollarImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_kurta_collar_image', action.payload);
        yield put({ type: UPLOAD_KURTA_COLLAR_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_KURTA_COLLAR_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadKurtaCollarImage() {
    yield takeLatest(UPLOAD_KURTA_COLLAR_IMAGE_PROGRESS, uploadkurtaCollarImageSaga);
}

// =============================Kurta Front Master =========================

function* getKurtaFrontListSaga(action) {
    try {
        const response = yield axiosClient.get(`/kurta_front_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_KURTA_FRONT_LIST_SUCCESS, kurta_front: response.data });
    } catch (error) {
        yield put({ type: GET_KURTA_FRONT_LIST_FAILURE});
    }
}

function* watchKurtaFrontList() {
    yield takeLatest(GET_KURTA_FRONT_LIST_PROGRESS, getKurtaFrontListSaga);
}

function* addKurtaFrontSaga(action) {
    try {
        const response = yield axiosClient.post('/save_kurta_front', action.payload);
        yield put({ type: ADD_KURTA_FRONT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_KURTA_FRONT_FAILURE, payload: error.message });
    }
}

function* watchAddKurtaFront() {
    yield takeLatest(ADD_KURTA_FRONT_PROGRESS, addKurtaFrontSaga);
}

function* editDeleteKurtaFront(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_kurta_front`, action.payload);
        yield put({ type: EDIT_DELETE_KURTA_FRONT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_KURTA_FRONT_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteKurtaFront() {
    yield takeLatest(EDIT_DELETE_KURTA_FRONT_PROGRESS, editDeleteKurtaFront);
}

function* uploadkurtaFrontImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_kurta_front_image', action.payload);
        yield put({ type: UPLOAD_KURTA_FRONT_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_KURTA_FRONT_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadKurtaFrontImage() {
    yield takeLatest(UPLOAD_KURTA_FRONT_IMAGE_PROGRESS, uploadkurtaFrontImageSaga);
}

// =============================Kurta Pocket Master =========================

function* getKurtaPocketListSaga(action) {
    try {
        const response = yield axiosClient.get(`/kurta_pocket_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_KURTA_POCKET_LIST_SUCCESS, kurta_pocket: response.data });
    } catch (error) {
        yield put({ type: GET_KURTA_POCKET_LIST_FAILURE});
    }
}

function* watchKurtaPocketList() {
    yield takeLatest(GET_KURTA_POCKET_LIST_PROGRESS, getKurtaPocketListSaga);
}

function* addKurtaPocketSaga(action) {
    try {
        const response = yield axiosClient.post('/save_kurta_pocket', action.payload);
        yield put({ type: ADD_KURTA_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_KURTA_POCKET_FAILURE, payload: error.message });
    }
}

function* watchAddKurtaPocket() {
    yield takeLatest(ADD_KURTA_POCKET_PROGRESS, addKurtaPocketSaga);
}

function* editDeleteKurtaPocket(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_kurta_pocket`, action.payload);
        yield put({ type: EDIT_DELETE_KURTA_POCKET_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_KURTA_POCKET_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteKurtaPocket() {
    yield takeLatest(EDIT_DELETE_KURTA_POCKET_PROGRESS, editDeleteKurtaPocket);
}

function* uploadkurtaPocketImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_kurta_pocket_image', action.payload);
        yield put({ type: UPLOAD_KURTA_POCKET_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_KURTA_POCKET_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadKurtaPocketImage() {
    yield takeLatest(UPLOAD_KURTA_POCKET_IMAGE_PROGRESS, uploadkurtaPocketImageSaga);
}

// =============================Kurta Sleeve Master =========================

function* getKurtaSleeveListSaga(action) {
    try {
        const response = yield axiosClient.get(`/kurta_sleeve_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_KURTA_SLEEVE_LIST_SUCCESS, kurta_sleeve: response.data });
    } catch (error) {
        yield put({ type: GET_KURTA_SLEEVE_LIST_FAILURE});
    }
}

function* watchKurtaSleeveList() {
    yield takeLatest(GET_KURTA_SLEEVE_LIST_PROGRESS, getKurtaSleeveListSaga);
}

function* addKurtaSleeveSaga(action) {
    try {
        const response = yield axiosClient.post('/save_kurta_sleeve', action.payload);
        yield put({ type: ADD_KURTA_SLEEVE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_KURTA_SLEEVE_FAILURE, payload: error.message });
    }
}

function* watchAddKurtaSleeve() {
    yield takeLatest(ADD_KURTA_SLEEVE_PROGRESS, addKurtaSleeveSaga);
}

function* editDeleteKurtaSleeve(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_kurta_sleeve`, action.payload);
        yield put({ type: EDIT_DELETE_KURTA_SLEEVE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_KURTA_SLEEVE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteKurtaSleeve() {
    yield takeLatest(EDIT_DELETE_KURTA_SLEEVE_PROGRESS, editDeleteKurtaSleeve);
}

function* uploadkurtaSleeveImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_kurta_sleeve_image', action.payload);
        yield put({ type: UPLOAD_KURTA_SLEEVE_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_KURTA_SLEEVE_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadKurtaSleeveImage() {
    yield takeLatest(UPLOAD_KURTA_SLEEVE_IMAGE_PROGRESS, uploadkurtaSleeveImageSaga);
}

// =============================Kurta Style Master =========================


function* getKurtaStyleListSaga(action) {
    try {
        const response = yield axiosClient.get(`/kurta_style_list?page=${0}&size=${20}&searchKey=""`,);
        yield put({ type: GET_KURTA_STYLE_LIST_SUCCESS, kurta_style: response.data });
    } catch (error) {
        yield put({ type: GET_KURTA_STYLE_LIST_FAILURE});
    }
}

function* watchKurtaStyleList() {
    yield takeLatest(GET_KURTA_STYLE_LIST_PROGRESS, getKurtaStyleListSaga);
}

function* addKurtaStyleSaga(action) {
    try {
        const response = yield axiosClient.post('/save_kurta_style', action.payload);
        yield put({ type: ADD_KURTA_STYLE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_KURTA_STYLE_FAILURE, payload: error.message });
    }
}

function* watchAddKurtaStyle() {
    yield takeLatest(ADD_KURTA_STYLE_PROGRESS, addKurtaStyleSaga);
}

function* editDeleteKurtaStyle(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_kurta_style`, action.payload);
        yield put({ type: EDIT_DELETE_KURTA_STYLE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_KURTA_STYLE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteKurtaStyle() {
    yield takeLatest(EDIT_DELETE_KURTA_STYLE_PROGRESS, editDeleteKurtaStyle);
}

function* uploadkurtaStyleImageSaga(action) {
    try {
        const response = yield axiosClient.post('/upload_kurta_style_image', action.payload);
        yield put({ type: UPLOAD_KURTA_STYLE_IMAGE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: UPLOAD_KURTA_STYLE_IMAGE_FAILURE, payload: error.message });
    }
}

function* watchuploadKurtaStyleImage() {
    yield takeLatest(UPLOAD_KURTA_STYLE_IMAGE_PROGRESS, uploadkurtaStyleImageSaga);
}


// ============================= GRN =========================

function* getGrnListSaga(action) {
    try {
        const response = yield axiosClient.get(`/grn_list`,);
        yield put({ type: GET_GRN_LIST_SUCCESS, grn: response.data });
    } catch (error) {
        yield put({ type: GET_GRN_LIST_FAILURE});
    }
}

function* watchGrnList() {
    yield takeLatest(GET_GRN_LIST_PROGRESS, getGrnListSaga);
}

function* addGrnSaga(action) {
    try {
        const response = yield axiosClient.post('/save_grn', action.payload);
        yield put({ type: ADD_GRN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_GRN_FAILURE, payload: error.message });
    }
}

function* watchAddGrn() {
    yield takeLatest(ADD_GRN_PROGRESS, addGrnSaga);
}

function* editDeleteGrn(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_grn`, action.payload);
        yield put({ type: EDIT_DELETE_GRN_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_GRN_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteGrn() {
    yield takeLatest(EDIT_DELETE_GRN_PROGRESS, editDeleteGrn);
}

// =============================Order Issue=========================

function* getOrderIssueListSaga(action) {
    try {
        const response = yield axiosClient.get(`/order_issue_list`,);
        yield put({ type: GET_ORDER_ISSUE_LIST_SUCCESS, order_issue: response.data });
    } catch (error) {
        yield put({ type: GET_ORDER_ISSUE_LIST_FAILURE});
    }
}

function* watchOrderIssueList() {
    yield takeLatest(GET_ORDER_ISSUE_LIST_PROGRESS, getOrderIssueListSaga);
}

function* addOrderIssueSaga(action) {
    try {
        const response = yield axiosClient.post(`/save_order_issue`, action.payload);
        yield put({ type: ADD_ORDER_ISSUE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_ORDER_ISSUE_FAILURE, payload: error.message });
    }
}

function* watchAddOrderIssue() {
    yield takeLatest(ADD_ORDER_ISSUE_PROGRESS, addOrderIssueSaga);
}

function* editDeleteOrderIssue(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_order_issue`, action.payload);
        yield put({ type: EDIT_DELETE_ORDER_ISSUE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_ORDER_ISSUE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteOrderIssue() {
    yield takeLatest(EDIT_DELETE_ORDER_ISSUE_PROGRESS, editDeleteOrderIssue);
}

// =============================Orders==============================

function* getOrdersListSaga(action) {
    try {
        const response = yield axiosClient.get(`/order_list`);
        yield put({ type: GET_ORDERS_LIST_SUCCESS, orders: response.data });
    } catch (error) {
        yield put({ type: GET_ORDERS_LIST_FAILURE});
    }
}

function* watchOrdersList() {
    yield takeLatest(GET_ORDERS_LIST_PROGRESS, getOrdersListSaga);
}

// =============================Item Master==============================

function* getItemListSaga(action) {
    try {
        const response = yield axiosClient.get(`/item_list`);
        yield put({ type: GET_ITEM_LIST_SUCCESS, item: response.data});
    } catch (error) {
        yield put({ type: GET_ITEM_LIST_FAILURE});
    }
}

function* watchItemList() {
    yield takeLatest(GET_ITEM_LIST_PROGRESS , getItemListSaga);
} 

function* addItemSaga(action) {
    try {
        const response = yield axiosClient.post(`/save_item`, action.payload);
        yield put({ type: ADD_ITEM_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_ITEM_FAILURE, payload: error.message });
    }
}

function* watchAddItem() {
    yield takeLatest(ADD_ITEM_PROGRESS, addItemSaga);
}

function* editDeleteItem(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_item`, action.payload);
        yield put({ type: EDIT_DELETE_ITEM_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_ITEM_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteItem() {
    yield takeLatest(EDIT_DELETE_ITEM_PROGRESS, editDeleteItem);
}


// ======================Item Grade Master=========================

function* getItemGradeListSaga(action) {
    try {
        const response = yield axiosClient.get(`/item_grade_list`,);
        yield put({ type: GET_ITEM_GRADE_LIST_SUCCESS, item_grade: response.data });
    } catch (error) {
        yield put({ type: GET_ITEM_GRADE_LIST_FAILURE});
    }
}

function* watchItemGradeList() {
    yield takeLatest(GET_ITEM_GRADE_LIST_PROGRESS, getItemGradeListSaga);
}

function* addItemGradeSaga(action) {
    try {
        const response = yield axiosClient.post('/save_item_grade', action.payload);
        yield put({ type: ADD_ITEM_GRADE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_ITEM_GRADE_FAILURE, payload: error.message });
    }
}

function* watchAddItemGrade() {
    yield takeLatest(ADD_ITEM_GRADE_PROGRESS, addItemGradeSaga);
}

function* editDeleteItemGrade(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_item_grade`, action.payload);
        yield put({ type: EDIT_DELETE_ITEM_GRADE_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_ITEM_GRADE_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteItemGrade() {
    yield takeLatest(EDIT_DELETE_ITEM_GRADE_PROGRESS, editDeleteItemGrade);
}

// ======================Item Category Master=========================

function* getItemCategoryListSaga(action) {
    try {
        const response = yield axiosClient.get(`/item_category_list`,);
        yield put({ type: GET_ITEM_CATEGORY_LIST_SUCCESS, item_category: response.data });
    } catch (error) {
        yield put({ type: GET_ITEM_CATEGORY_LIST_FAILURE});
    }
}

function* watchItemCategoryList() {
    yield takeLatest(GET_ITEM_CATEGORY_LIST_PROGRESS, getItemCategoryListSaga);
}

// ======================User Addresses=========================

function* getUserAddressesListSaga(action) {
    try {
        const response = yield axiosClient.get(`/user_addresses_list?user_id=${action.payload.user_id}`);
        yield put({ type: GET_USER_ADDRESSES_LIST_SUCCESS, user_addresses : response.data });
    } catch (error) {
        yield put({ type: GET_USER_ADDRESSES_LIST_FAILURE});
    }
}

function* watchUserAddressesList() {
    yield takeLatest(GET_USER_ADDRESSES_LIST_PROGRESS, getUserAddressesListSaga);
}

function* addUserAddressesSaga(action) {
    try {
        const response = yield axiosClient.post('/save_user_addresses', action.payload);
        yield put({ type: ADD_USER_ADDRESSES_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_USER_ADDRESSES_FAILURE, payload: error.message });
    }
}

function* watchAddUserAddresses() {
    yield takeLatest(ADD_USER_ADDRESSES_PROGRESS, addUserAddressesSaga);
}

function* editDeleteUserAddresses(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_user_addresses`, action.payload);
        yield put({ type: EDIT_DELETE_USER_ADDRESSES_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_USER_ADDRESSES_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteUserAddresses() {
    yield takeLatest(EDIT_DELETE_USER_ADDRESSES_PROGRESS, editDeleteUserAddresses);
}

// ======================User Measurements UpperBody=========================

function* getUserMeasurementsUpperBodyListSaga(action) {
    try {
        const response = yield axiosClient.get(`/user_measurements_upperbody_list`);
        yield put({ type: GET_USER_MEASUREMENTS_UPPERBODY_LIST_SUCCESS, user_measurements_upperbody : response.data });
    } catch (error) {
        yield put({ type: GET_USER_MEASUREMENTS_UPPERBODY_LIST_FAILURE});
    }
}

function* watchUserMeasurementsUpperBodyList() {
    yield takeLatest(GET_USER_MEASUREMENTS_UPPERBODY_LIST_PROGRESS, getUserMeasurementsUpperBodyListSaga);
}

function* addUserMeasurementsUpperBodySaga(action) {
    try {
        const response = yield axiosClient.post('/save_user_measurements_upperbody', action.payload);
        yield put({ type: ADD_USER_MEASUREMENTS_UPPERBODY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_USER_MEASUREMENTS_UPPERBODY_FAILURE, payload: error.message });
    }
}

function* watchAddUserMeasurementsUpperBody() {
    yield takeLatest(ADD_USER_MEASUREMENTS_UPPERBODY_PROGRESS, addUserMeasurementsUpperBodySaga);
}

function* editDeleteUserMeasurementsUpperBody(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_user_measurements_upperbody`, action.payload);
        yield put({ type: EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteUserMeasurementsUpperBody() {
    yield takeLatest(EDIT_DELETE_USER_MEASUREMENTS_UPPERBODY_PROGRESS, editDeleteUserMeasurementsUpperBody);
}

// ======================User Measurements LowerBody=========================


function* getUserMeasurementsLowerBodyListSaga(action) {
    try {
        const response = yield axiosClient.get(`/user_measurements_lowerbody_list`);
        yield put({ type: GET_USER_MEASUREMENTS_LOWERBODY_LIST_SUCCESS, user_measurements_lowerbody : response.data });
    } catch (error) {
        yield put({ type: GET_USER_MEASUREMENTS_LOWERBODY_LIST_FAILURE});
    }
}

function* watchUserMeasurementsLowerBodyList() {
    yield takeLatest(GET_USER_MEASUREMENTS_LOWERBODY_LIST_PROGRESS, getUserMeasurementsLowerBodyListSaga);
}

function* addUserMeasurementsLowerBodySaga(action) {
    try {
        const response = yield axiosClient.post('/save_user_measurements_lowerbody', action.payload);
        yield put({ type: ADD_USER_MEASUREMENTS_LOWERBODY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_USER_MEASUREMENTS_LOWERBODY_FAILURE, payload: error.message });
    }
}

function* watchAddUserMeasurementsLowerBody() {
    yield takeLatest(ADD_USER_MEASUREMENTS_LOWERBODY_PROGRESS, addUserMeasurementsLowerBodySaga);
}

function* editDeleteUserMeasurementsLowerBody(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_user_measurements_lowerbody`, action.payload);
        yield put({ type: EDIT_DELETE_USER_MEASUREMENTS_LOWERBODY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_USER_MEASUREMENTS_LOWERBODY_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteUserMeasurementsLowerBody() {
    yield takeLatest(EDIT_DELETE_USER_MEASUREMENTS_LOWERBODY_PROGRESS, editDeleteUserMeasurementsLowerBody);
}

// ======================Standard Measurements UpperBody=========================

function* getStandardMeasurementsUpperBodyListSaga(action) {
    try {
        const response = yield axiosClient.get(`/standard_measurements_upperbody_list`);
        yield put({ type: GET_STANDARD_MEASUREMENTS_UPPERBODY_LIST_SUCCESS, standard_measurements_upperbody : response.data });
    } catch (error) {
        yield put({ type: GET_STANDARD_MEASUREMENTS_UPPERBODY_LIST_FAILURE});
    }
}

function* watchStandardMeasurementsUpperBodyList() {
    yield takeLatest(GET_STANDARD_MEASUREMENTS_UPPERBODY_LIST_PROGRESS, getStandardMeasurementsUpperBodyListSaga);
}

function* addStandardMeasurementsUpperBodySaga(action) {
    try {
        const response = yield axiosClient.post('/save_standard_measurements_upperbody', action.payload);
        yield put({ type: ADD_STANDARD_MEASUREMENTS_UPPERBODY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_STANDARD_MEASUREMENTS_UPPERBODY_FAILURE, payload: error.message });
    }
}

function* watchAddStandardMeasurementsUpperBody() {
    yield takeLatest(ADD_STANDARD_MEASUREMENTS_UPPERBODY_PROGRESS, addStandardMeasurementsUpperBodySaga);
}

function* editDeleteStandardMeasurementsUpperBody(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_standard_measurements_upperbody`, action.payload);
        yield put({ type: EDIT_DELETE_STANDARD_MEASUREMENTS_UPPERBODY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_STANDARD_MEASUREMENTS_UPPERBODY_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteStandardMeasurementsUpperBody() {
    yield takeLatest(EDIT_DELETE_STANDARD_MEASUREMENTS_UPPERBODY_PROGRESS, editDeleteStandardMeasurementsUpperBody);
}

// ======================Standard Measurements LowerBody=========================

function* getStandardMeasurementsLowerBodyListSaga(action) {
    try {
        const response = yield axiosClient.get(`/standard_measurements_lowerbody_list`);
        yield put({ type: GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_SUCCESS, standard_measurements_lowerbody : response.data });
    } catch (error) {
        yield put({ type: GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_FAILURE});
    }
}

function* watchStandardMeasurementsLowerBodyList() {
    yield takeLatest(GET_STANDARD_MEASUREMENTS_LOWERBODY_LIST_PROGRESS, getStandardMeasurementsLowerBodyListSaga);
}

function* addStandardMeasurementsLowerBodySaga(action) {
    try {
        const response = yield axiosClient.post('/save_standard_measurements_lowerbody', action.payload);
        yield put({ type: ADD_STANDARD_MEASUREMENTS_LOWERBODY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: ADD_STANDARD_MEASUREMENTS_LOWERBODY_FAILURE, payload: error.message });
    }
}

function* watchAddStandardMeasurementsLowerBody() {
    yield takeLatest(ADD_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS, addStandardMeasurementsLowerBodySaga);
}

function* editDeleteStandardMeasurementsLowerBody(action) {
    try {
        const response = yield axiosClient.put(`/update_delete_standard_measurements_lowerbody`, action.payload);
        yield put({ type: EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_FAILURE, payload: error.message });
    }
}

function* watchEditDeleteStandardMeasurementsLowerBody() {
    yield takeLatest(EDIT_DELETE_STANDARD_MEASUREMENTS_LOWERBODY_PROGRESS, editDeleteStandardMeasurementsLowerBody);
}






export default function* rootSaga() {
    yield all([

        watchLogin(), watchLogout(),
        //   ----------comman Masters---------
        watchGetUserList(), watchAddUser(), watchEditDeleteUser(),
        watchGetBodyTypeList(), watchAddBodyType(), watchEditDeleteBodyType(), watchuploadBodyTypeImage(),
        watchGetBrandList(), watchAddBrand(), watchEditDeleteBrand(),
        watchGetChargesList(), watchAddCharges(), watchEditDeleteCharges(),
        watchGetColorList(), watchAddColor(), watchEditDeleteColor(),
        watchGetEmployeeList(), watchAddEmployee(), watchEditDeleteEmployee(),
        watchGetFabricFeelList(), watchAddFabricFeel(), watchEditDeleteFabricFeel(),
        watchGetFabricMaterialList(), watchAddFabricMaterial(), watchEditDeleteFabricMaterial(),
        watchGetFabricQualityList(), watchAddFabricQuality(), watchEditDeleteFabricQuality(),
        watchGetFabricUseList(), watchAddFabricUse(), watchEditDeleteFabricUse(),
        watchGetOccasionList(), watchAddOccasion(), watchEditDeleteOccasion(),
        watchGetPatternList(), watchAddPattern(), watchEditDeletePattern(),
        watchGetRoleList(), watchAddRole(), watchEditDeleteRole(),
        watchGetUnitList(), watchAddUnit(), watchEditDeleteUnit(),

        //---------------- comman Masters End ----------

        // ----------------Dress Masters --------------
        watchGetShirtBackPleatList(), watchAddShirtBackPleat(), watchEditDeleteShirtBackPleat(), watchuploadShirtBackPleatImage(),
        watchGetShirtBottomList(), watchAddShirtBottom(), watchEditDeleteShirtBottom(), watchuploadShirtBottomImage(),
        watchGetShirtCollarCuffThicknessList(), watchAddShirtCollarCuffThickness(), watchEditDeleteShirtCollarCuffThickness(), watchuploadShirtCollarCuffThicknessImage(),
        watchGetShirtCollarList(), watchAddShirtCollar(), watchEditDeleteShirtCollar(), watchuploadShirtCollarImage(),
        watchGetShirtCuffList(), watchAddShirtCuff(), watchEditDeleteShirtCuff(),
        watchGetShirtFittingList(), watchAddShirtFitting(), watchEditDeleteShirtFitting(),
        watchGetShirtFrontList(), watchAddShirtFront(), watchEditDeleteShirtFront(), watchuploadShirtFrontImage(),
        watchGetShirtPocketList(), watchAddShirtPocket(), watchEditDeleteShirtPocket(), watchuploadShirtPocketImage(),
        watchGetTrouserBottomList(), watchAddTrouserBottom(), watchEditDeleteTrouserBottom(), watchuploadTrouserBottomImage(),
        watchGetTrouserCrotchList(), watchAddTrouserCrotch(), watchEditDeleteTrouserCrotch(), watchuploadTrouserCrotchImage(),
        watchGetTrouserPocketList(), watchAddTrouserPocket(), watchEditDeleteTrouserPocket(), watchuploadTrouserPocketImage(),

        // ----------------Dress Masters end --------------

        //   ----------Oprational Masters-------------------
        watchGetFabricsList(), watchAddFabrics(), watchEditDeleteFabrics(),
        watchGetManufracturersList(), watchAddManufracturers(), watchEditDeleteManufracturers(),
        watchGetStitchingCentersList(), watchAddStitchingCenters(), watchEditDeleteStitchingCenters(),
        watchGetTailorShopsList(), watchAddTailorShops(), watchEditDeleteTailorShops(),

        // ----------------Oprational Masters end --------------

        // ==================================Waist Coat Masters=============================================
        watchWaistCoatBottomTypeList(), watchAddWaistCoatBottomType(), watchEditDeleteWaistCoatBottomType() , watchuploadWaistCoatBottomTypeImage(),
        watchWaistCoatTypeList(), watchAddWaistCoatType(), watchEditDeleteWaistCoatType(), watchuploadWaistCoatTypeImage(),
        watchWaistCoatNeckList(), watchAddWaistCoatNeck(), watchEditDeleteWaistCoatNeck(), watchuploadWaistCoatNeckImage(),
        watchWaistCoatPocketList(), watchAddWaistCoatPocket(), watchEditDeleteWaistCoatPocket(), watchuploadWaistCoatPocketImage(),
        
        // ==================================Sherwani Masters=============================================

        watchSherwaniCollarDesignList(), watchAddSherwaniCollarDesign(), watchEditDeleteSherwaniCollarDesign(), watchuploadSherwaniCollarDesignImage(),
        watchSherwaniCollarList() , watchAddSherwaniCollar(), watchEditDeleteSherwaniCollar(), watchuploadSherwaniCollarImage(),
        watchSherwaniCuffDesignList() , watchAddSherwaniCuffDesign(), watchEditDeleteSherwaniCuffDesign(), watchuploadSherwanCuffDesignImage(),
        watchSherwaniCuffList() , watchAddSherwaniCuff() , watchEditDeleteSherwaniCuff() , watchuploadSherwaniCuffImage(),
        watchSherwaniFrontList() , watchAddSherwaniFront(), watchEditDeleteSherwaniFront(), watchuploadSherwanFrontImage(),
        watchSherwaniJariDesignList(), watchAddSherwaniJariDesign(), watchEditDeleteSherwaniJariDesign(), watchuploadSherwanJariDesignImage(),
        watchSherwaniPocketList(), watchAddSherwaniPocket(), watchEditDeleteSherwaniPocket(), watchuploadSherwanPocketImage(),
        watchSherwaniSideCutList(), watchAddSherwaniSideCut(), watchEditDeleteSherwaniSideCut(), watchuploadSherwaniSideCutImage(),

        // ==================================Kurta Masters=============================================
        watchKurtaCollarList(), watchAddKurtaCollar(), watchEditDeleteKurtaCollar(), watchuploadKurtaCollarImage(),
        watchKurtaFrontList() , watchAddKurtaFront(), watchEditDeleteKurtaFront(), watchuploadKurtaFrontImage(),
        watchKurtaPocketList(), watchAddKurtaPocket() , watchEditDeleteKurtaPocket() , watchuploadKurtaPocketImage(),
        watchKurtaSleeveList(), watchAddKurtaSleeve() , watchEditDeleteKurtaSleeve() , watchuploadKurtaSleeveImage(),
        watchKurtaStyleList(),  watchAddKurtaStyle() , watchEditDeleteKurtaStyle() , watchuploadKurtaStyleImage(),

        // ==================================Grn=============================================
        watchGrnList(), watchAddGrn(), watchEditDeleteGrn(),
        
        // ==================================Stictching Steps================================
          watchOrderIssueList() , watchAddOrderIssue() , watchEditDeleteOrderIssue(),

        // ==================================Orders================================
        watchOrdersList(),

        // ==================================Item Master================================
        watchItemList(),watchAddItem(), watchEditDeleteItem(),
        
        // ==================================Item Grade Master================================
        watchItemGradeList() , watchAddItemGrade() , watchEditDeleteItemGrade(),
        
        // ==================================Item Category Master================================
        watchItemCategoryList(),

        // ==================================User Addresses================================
        watchUserAddressesList() , watchAddUserAddresses() , watchEditDeleteUserAddresses(),
       
        // ==================================User Measurements UpperBody================================
        watchUserMeasurementsUpperBodyList() , watchAddUserMeasurementsUpperBody() , watchEditDeleteUserMeasurementsUpperBody(),

        // ==================================User Measurements LowerBody================================
        watchUserMeasurementsLowerBodyList(), watchAddUserMeasurementsLowerBody(), watchEditDeleteUserMeasurementsLowerBody(),

        // ==================================Standard Measurements UpperBody================================
        watchStandardMeasurementsUpperBodyList(), watchAddStandardMeasurementsUpperBody(), watchEditDeleteStandardMeasurementsUpperBody(),
        
        // ==================================Standard Measurements LowerBody================================
        watchStandardMeasurementsLowerBodyList(), watchAddStandardMeasurementsLowerBody(), watchEditDeleteStandardMeasurementsLowerBody() 
        
    ])
}