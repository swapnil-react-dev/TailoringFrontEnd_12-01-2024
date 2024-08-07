import { combineReducers } from 'redux'
import user_master_reducer from './admin/masters/commonMasters/user_master_reducer'
import unit_master_reducer from './admin/masters/commonMasters/unit_master_reducer'
import role_master_reducer from './admin/masters/commonMasters/role_master_reducer'
import pattern_master_reducer from './admin/masters/commonMasters/pattern_master_reducer'
import occasion_master_reducer from './admin/masters/commonMasters/occasion_master_reducer'
import fabric_use_master_reducer from './admin/masters/commonMasters/fabric_use_master_reducer'
import fabric_quality_master_reducer from './admin/masters/commonMasters/fabric_quality_master_reducer'
import fabric_material_master_reducer from './admin/masters/commonMasters/fabric_material_master_reducer'
import fabric_feel_master_reducer from './admin/masters/commonMasters/fabric_feel_master_reducer'
import employee_master_reducer from './admin/masters/commonMasters/employee_master_reducer'
import color_master_reducer from './admin/masters/commonMasters/color_master_reducer'
import charges_master_reducer from './admin/masters/commonMasters/charges_master_reducer'
import brand_master_reducer from './admin/masters/commonMasters/brand_master_reducer'
import body_type_master_reducer from './admin/masters/commonMasters/body_type_master_reducer'
import shirt_backPleat_master_reducer from './admin/masters/dressesMaster/mensMasters/shirtMasters/shirt_backPleat_master_reducer'
import shirt_bottom_master_reducer from './admin/masters/dressesMaster/mensMasters/shirtMasters/shirt_bottom_master_reducer'
import shirt_collar_cuff_thickness_master_reducer from './admin/masters/dressesMaster/mensMasters/shirtMasters/shirt_collar_cuff_thickness_master_reducer'
import shirt_collar_master_reducer from './admin/masters/dressesMaster/mensMasters/shirtMasters/shirt_collar_master_reducer'
import shirt_cuff_master_reducer from './admin/masters/dressesMaster/mensMasters/shirtMasters/shirt_cuff_master_reducer'
import shirt_fitting_master_reducer from './admin/masters/dressesMaster/mensMasters/shirtMasters/shirt_fitting_master_reducer'
import shirt_front_master_reducer from './admin/masters/dressesMaster/mensMasters/shirtMasters/shirt_front_master_reducer'
import shirt_pocket_master_reducer from './admin/masters/dressesMaster/mensMasters/shirtMasters/shirt_pocket_master_reducer'
import trouser_bottom_master_reducer from './admin/masters/dressesMaster/mensMasters/trouserMasters/trouser_bottom_master_reducer'
import trouser_crotch_master_reducer from './admin/masters/dressesMaster/mensMasters/trouserMasters/trouser_crotch_master_reducer'
import trouser_pocket_master_reducer from './admin/masters/dressesMaster/mensMasters/trouserMasters/trouser_pocket_master_reducer'
import fabrics_reducer from './admin/masters/operationalMasters/fabrics_reducer'
import manufracturers_reducer from './admin/masters/operationalMasters/manufracturers_reducer'
import stitching_centers_reducer from './admin/masters/operationalMasters/stitching_centers_reducer'
import tailor_shops_reducer from './admin/masters/operationalMasters/tailor_shops_reducer'
import waist_coat_bottom_type_master_reducer from './admin/masters/dressesMaster/mensMasters/waistCoatMasters/waist_coat_bottom_type_master_reducer'
import waist_coat_type_master_reducer from './admin/masters/dressesMaster/mensMasters/waistCoatMasters/waist_coat_type_master_reducer'
import waist_coat_neck_master_reducer from './admin/masters/dressesMaster/mensMasters/waistCoatMasters/waist_coat_neck_master_reducer'
import waist_coat_pocket_master_reducer from './admin/masters/dressesMaster/mensMasters/waistCoatMasters/waist_coat_pocket_master_reducer'
import sherwani_collar_design_master_reducer from './admin/masters/dressesMaster/mensMasters/sherwaniMasters/sherwani_collar_design_master_reducer'
import sherwani_collar_master_reducer from './admin/masters/dressesMaster/mensMasters/sherwaniMasters/sherwani_collar_master_reduer'
import sherwani_cuff_design_master_reducer from './admin/masters/dressesMaster/mensMasters/sherwaniMasters/sherwani_cuff_design_master_reducer'
import sherwani_cuff_master_reducer from './admin/masters/dressesMaster/mensMasters/sherwaniMasters/sherwani_cuff_master_reducer'
import sherwani_front_master_reducer from './admin/masters/dressesMaster/mensMasters/sherwaniMasters/sherwani_front_master_reducer'
import sherwani_jari_design_master_reducer from './admin/masters/dressesMaster/mensMasters/sherwaniMasters/sherwani_jari_design_master_reducer'
import sherwani_pocket_master_reducer from './admin/masters/dressesMaster/mensMasters/sherwaniMasters/sherwani_pocket_master_reducer'
import sherwani_side_cut_master_reducer from './admin/masters/dressesMaster/mensMasters/sherwaniMasters/sherwani_side_cut_master_reducer'
import kurta_collar_master_reducer from './admin/masters/dressesMaster/mensMasters/kurtaMasters/kurta_collar_master_reducer'
import kurta_front_master_reducer from './admin/masters/dressesMaster/mensMasters/kurtaMasters/kurta_front_master_reducer'
import kurta_pocket_master_reducer from './admin/masters/dressesMaster/mensMasters/kurtaMasters/kurta_pocket_master_reducer'
import kurta_sleeve_master_reducer from './admin/masters/dressesMaster/mensMasters/kurtaMasters/kurta_sleeve_master_reducer'
import kurta_style_master_reducer from './admin/masters/dressesMaster/mensMasters/kurtaMasters/kurta_style_master_reducer'
import grn_reducer from './admin/masters/grn/grn_reducer'
import order_issue_reducer from './admin/masters/stitchingSteps/order_issue_reducer'
import orders_reducer from './admin/masters/orders/orders_reducer'
import item_master_reducer from './admin/masters/commonMasters/item_reducer'
import item_grade_master_reducer from './admin/masters/commonMasters/item_grade_master_reducer'
import item_category_master_reducer from './admin/masters/commonMasters/item_category_master_reducer'
import standard_measurements_upperbody_reducer from './admin/masters/commonMasters/standard_measurements_upperbody_master_reduer'
import standard_measurements_lowerbody_reducer from './admin/masters/commonMasters/standard_measurements_lowerbody_master_reduer'

export default combineReducers({
    // common Master----------
    user: user_master_reducer,
    unit: unit_master_reducer,
    role: role_master_reducer,
    pattern: pattern_master_reducer,
    occasion: occasion_master_reducer,
    fabric_use: fabric_use_master_reducer,
    fabric_quality: fabric_quality_master_reducer,
    fabric_material: fabric_material_master_reducer,
    fabric_feel: fabric_feel_master_reducer,
    employee: employee_master_reducer,
    color: color_master_reducer,
    charges: charges_master_reducer,
    brand: brand_master_reducer,
    body_type: body_type_master_reducer,
    standard_measurements_upperbody : standard_measurements_upperbody_reducer,
    standard_measurements_lowerbody :  standard_measurements_lowerbody_reducer,

    //  dress Master----------
    shirt_backpleat: shirt_backPleat_master_reducer,
    shirt_bottom: shirt_bottom_master_reducer,
    shirt_collar_cuff_thickness: shirt_collar_cuff_thickness_master_reducer,
    shirt_collar: shirt_collar_master_reducer,
    shirt_cuff: shirt_cuff_master_reducer,
    shirt_fitting: shirt_fitting_master_reducer,
    shirt_front: shirt_front_master_reducer,
    shirt_pocket: shirt_pocket_master_reducer,
    trouser_bottom: trouser_bottom_master_reducer,
    trouser_crotch: trouser_crotch_master_reducer,
    trouser_pocket: trouser_pocket_master_reducer,

    //  Oprational Master ----------

    fabrics: fabrics_reducer,
    manufracturers: manufracturers_reducer,
    stitching_centers: stitching_centers_reducer,
    tailor_shops: tailor_shops_reducer,


    // Waist Coat Master --------

    waist_coat_bottom_type: waist_coat_bottom_type_master_reducer,
    waist_coat_type: waist_coat_type_master_reducer,
    waist_coat_neck: waist_coat_neck_master_reducer,
    waist_coat_pocket: waist_coat_pocket_master_reducer,

    // Sherwani Master --------
    sherwani_collar_design: sherwani_collar_design_master_reducer,
    sherwani_collar: sherwani_collar_master_reducer,
    sherwani_cuff_design: sherwani_cuff_design_master_reducer,
    sherwani_cuff: sherwani_cuff_master_reducer,
    sherwani_front: sherwani_front_master_reducer,
    sherwani_jari_design: sherwani_jari_design_master_reducer,
    sherwani_pocket: sherwani_pocket_master_reducer,
    sherwani_side_cut: sherwani_side_cut_master_reducer,

    // Kurta Master --------
    kurta_collar: kurta_collar_master_reducer,
    kurta_front: kurta_front_master_reducer,
    kurta_pocket: kurta_pocket_master_reducer,
    kurta_sleeve: kurta_sleeve_master_reducer,
    kurta_style: kurta_style_master_reducer,

    // GRN --------
    grn: grn_reducer,

    // Stitching Steps --------
    order_issue : order_issue_reducer,
    orders : orders_reducer,

    // Item Master -------
    item : item_master_reducer,
    // Item Grade -------
    item_grade : item_grade_master_reducer,
    item_category : item_category_master_reducer,

    
    

})