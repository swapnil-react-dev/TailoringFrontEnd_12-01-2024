import React from "react";
import { Route, Routes } from 'react-router-dom';
import Dashbord from "../admin/dashbord/Dashbord";
import Footer from "../admin/footer/Footer";
import UserMasterList from "../admin/masters/commonMasters/userMaster/UserMasterList";
import UserMasterAdd from "../admin/masters/commonMasters/userMaster/UserMasterAdd";
import AdminLogin from "../admin/login/AdminLogin";

import ShirtBackPleatList from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtBackPleat/ShirtBackPleatList";
import ShirtBackPleatAdd from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtBackPleat/ShirtBackPleatAdd";
import ShirtBottomList from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtBottom/ShirtBottomList";
import ShirtBottomAdd from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtBottom/ShirtBottomAdd";
import ShirtCollarCuffThicknessMasterAdd from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtCollarCuffThicknessMaster/ShirtCollarCuffThicknessMasterAdd";
import ShirtCollarCuffThicknessMasterList from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtCollarCuffThicknessMaster/ShirtCollarCuffThicknessMasterList";
import ShirtCollarMasterList from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtCollarMaster/ShirtCollarMasterList";
import ShirtCollarMasterAdd from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtCollarMaster/ShirtCollarMasterAdd";
import ShirtCuffMasterList from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtCuffMaster/ShirtCuffMasterList";
import ShirtCuffMasterAdd from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtCuffMaster/ShirtCuffMasterAdd";
import ShirtFittingMasterList from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtFittingMaster/ShirtFittingMasterList";
import ShirtFittingMasterAdd from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtFittingMaster/ShirtFittingMasterAdd";
import ShirtFrontMasterList from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtFrontMaster/ShirtFrontMasterList";
import ShirtFrontMasterAdd from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtFrontMaster/ShirtFrontMasterAdd";
import ShirtPocketMasterList from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtPocketMaster/ShirtPocketMasterList";
import ShirtPocketMasterAdd from "../admin/masters/dressesMasters/mensMasters/shirtMasters/shirtPocketMaster/ShirtPocketMasterAdd";
import TrouserBottomMasterList from "../admin/masters/dressesMasters/mensMasters/trouserMasters/trouserBottomMaster/TrouserBottomMasterList";
import TrouserBottomMasterAdd from "../admin/masters/dressesMasters/mensMasters/trouserMasters/trouserBottomMaster/TrouserBottomMasterAdd";
import TrouserCrotchMasterList from "../admin/masters/dressesMasters/mensMasters/trouserMasters/trouserCrotchMaster/TrouserCrotchMasterList";
import TrouserCrotchMasterAdd from "../admin/masters/dressesMasters/mensMasters/trouserMasters/trouserCrotchMaster/TrouserCrotchMasterAdd";
import TrouserPocketMasterList from "../admin/masters/dressesMasters/mensMasters/trouserMasters/trouserPocketMaster/TrouserPocketMasterList";
import TrouserPocketMasterAdd from "../admin/masters/dressesMasters/mensMasters/trouserMasters/trouserPocketMaster/TrouserPocketMasterAdd";
import FabricsAdd from "../admin/masters/operationalMasters/fabrics/FabricsAdd";
import FabricsList from "../admin/masters/operationalMasters/fabrics/FabricsList";
import ManufacturesList from "../admin/masters/operationalMasters/manufacturers/ManufacturersList";
import ManufacturesAdd from "../admin/masters/operationalMasters/manufacturers/ManufacturersAdd";
import StitchingCentersList from "../admin/masters/operationalMasters/stitchingCenters/StitchingCentersList";
import StitchingCentersAdd from "../admin/masters/operationalMasters/stitchingCenters/StitchingCentersAdd";
import TailorShopsAdd from "../admin/masters/operationalMasters/tailorShops/TailorShopsAdd";
import TailorShopsList from "../admin/masters/operationalMasters/tailorShops/TailorShopsList";
import WaistCoatBottomTypeList from "../admin/masters/dressesMasters/mensMasters/waistCoatMasters/waistCoatBottomType/WaistCoatBottomTypeList";
import WaistCoatBottomTypeAdd from "../admin/masters/dressesMasters/mensMasters/waistCoatMasters/waistCoatBottomType/WaistCoatBottomTypeAdd";
import WaistCoatTypeAdd from "../admin/masters/dressesMasters/mensMasters/waistCoatMasters/waistCoatType/WaistCoatTypeAdd";
import WaistCoatTypeList from "../admin/masters/dressesMasters/mensMasters/waistCoatMasters/waistCoatType/WaistCoatTypeList";
import WaistCoatNeckList from "../admin/masters/dressesMasters/mensMasters/waistCoatMasters/wasitCoatNeck/WaistCoatNeckList";
import WaistCoatNeckAdd from "../admin/masters/dressesMasters/mensMasters/waistCoatMasters/wasitCoatNeck/WaistCoatNeckAdd";
import WaistCoatPocketList from "../admin/masters/dressesMasters/mensMasters/waistCoatMasters/waistCoatPocket/WaistCoatPocketList";
import WaistCoatPocketAdd from "../admin/masters/dressesMasters/mensMasters/waistCoatMasters/waistCoatPocket/WaistCoatPocketAdd";
import SherwaniCollarDesignList from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniCollarDesign/SherwaniCollarDesignList";
import SherwaniCollarDesignAdd from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniCollarDesign/SherwaniCollarDesignAdd";
import SherwaniCollarAdd from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniCollar/SherwaniCollarAdd";
import SherwaniCollarList from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniCollar/SherwaniCollarList";
import SherwaniCuffDesignList from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniCuffDesign/SherwaniCuffDesignList";
import SherwaniCuffDesignAdd from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniCuffDesign/SherwaniCuffDesignAdd";
import SherwaniCuffList from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniCuff/SherwaniCuffList";
import SherwaniCuffAdd from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniCuff/SherwaniCuffAdd";
import SherwaniFrontAdd from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniFront/SherwaniFrontAdd";
import SherwaniFrontList from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniFront/SherwaniFrontList";
import SherwaniJariDesignList from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniJariDesign/SherwaniJariDesignList";
import SherwaniJariDesignAdd from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniJariDesign/SherwaniJariDesignAdd";
import SherwaniPocketList from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniPocket/SherwaniPocketList";
import SherwaniPocketAdd from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniPocket/SherwaniPocketAdd";
import SherwaniSideCutList from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniSideCut/SherwaniSideCutList";
import SherwaniSideCutAdd from "../admin/masters/dressesMasters/mensMasters/sherwaniMasters/sherwaniSideCut/SherwaniSideCutAdd";
import KurtaCollarList from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaCollar/KurtaCollarList";
import KurtaCollarAdd from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaCollar/KurtaCollarAdd";
import KurtaFrontList from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaFront/KurtaFrontList";
import KurtaFrontAdd from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaFront/KurtaFrontAdd";
import KurtaPocketList from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaPocket/KurtaPocketList";
import KurtaPocketAdd from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaPocket/KurtaPocketAdd";
import KurtaSleeveAdd from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaSleeve/KurtaSleeveAdd";
import KurtaSleeveList from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaSleeve/KurtaSleeveList";
import KurtaStyleList from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaStyle/KurtaStyleList";
import KurtaStyleAdd from "../admin/masters/dressesMasters/mensMasters/kurtaMasters/kurtaStyle/KurtaStyleAdd";
import GrnList from "../admin/masters/grn/GrnList";
import GrnAdd from "../admin/masters/grn/GrnAdd";
import OrderIssueList from "../admin/masters/stitchingSteps/OrderIssueList";
import OrderIssueAdd from "../admin/masters/stitchingSteps/OrderIssueAdd";
import OrdersList from "../admin/masters/orders/OrdersList";
import ItemGradeList from "../admin/masters/commonMasters/itemGradeMaster/ItemGradeList";
import ItemGradeAdd from "../admin/masters/commonMasters/itemGradeMaster/ItemGradeAdd";
import ItemMasterList from "../admin/masters/commonMasters/itemMaster/ItemMasterList"
import ItemMasterAdd from "../admin/masters/commonMasters/itemMaster/ItemMasterAdd";
import StandardMeasurementsUpperBodyList from "../admin/masters/commonMasters/standardMeasurementsUpperBodyMaster/StandardMeasurementsUpperBodyMasterList";
import StandardMeasurementsUpperBodyAdd from "../admin/masters/commonMasters/standardMeasurementsUpperBodyMaster/StandardMeasurementsUpperBodyMasterAdd";
import StandardMeasurementsLowerBodyList from "../admin/masters/commonMasters/standardMeasurementsLowerBodyMaster/StandardMeasurementsLowerBodyMasterList";
import StandardMeasurementsLowerBodyAdd from "../admin/masters/commonMasters/standardMeasurementsLowerBodyMaster/StandardMeasurementsLowerBodyMasterAdd";






const TailorRoutes = () => {
    return (
        <>
            <Routes>
                {/* admin routes */}
                <Route path="/admin" element={<> <AdminLogin /> </>}> </Route>
                <Route path="/admin/dashboard" element={<> <Dashbord /> </>}> </Route>

                {/* ============ Common Masters ============ */}
               
                <Route path="/admin/user" element={<> <UserMasterList />  </>}> </Route>
                <Route path="/admin/add-user" element={<> <UserMasterAdd />  </>}> </Route>

                <Route path="/admin/item-grade" element={<> <ItemGradeList/> </>}></Route>
                <Route path="/admin/add-item-grade" element={<> <ItemGradeAdd/> </>}></Route>
                
                {/* ============ Dresses > Mens> Shirt Masters ============ */}

                <Route path="/admin/shirt-back-pleat" element={<> <ShirtBackPleatList /> </>}> </Route>
                <Route path="/admin/add-shirt-back-pleat" element={<> <ShirtBackPleatAdd /> </>}> </Route>

                <Route path="/admin/shirt-bottom" element={<> <ShirtBottomList />  </>}> </Route>
                <Route path="/admin/add-shirt-bottom" element={<> <ShirtBottomAdd /> </>}> </Route>

                <Route path="/admin/shirt-collar-cuff-thickness" element={<> <ShirtCollarCuffThicknessMasterList /> </>}> </Route>
                <Route path="/admin/add-shirt-collar-cuff-thickness" element={<> <ShirtCollarCuffThicknessMasterAdd /> </>}> </Route>

                <Route path="/admin/shirt-collar" element={<> <ShirtCollarMasterList /> </>}> </Route>
                <Route path="/admin/add-shirt-collar" element={<> <ShirtCollarMasterAdd /> </>}> </Route>

                <Route path="/admin/shirt-cuff" element={<> <ShirtCuffMasterList />  </>}> </Route>
                <Route path="/admin/add-shirt-cuff" element={<> <ShirtCuffMasterAdd />  </>}> </Route>

                <Route path="/admin/shirt-fitting" element={<> <ShirtFittingMasterList />  </>}> </Route>
                <Route path="/admin/add-shirt-fitting" element={<> <ShirtFittingMasterAdd />  </>}> </Route>

                <Route path="/admin/shirt-front" element={<> <ShirtFrontMasterList />  </>}> </Route>
                <Route path="/admin/add-shirt-front" element={<> <ShirtFrontMasterAdd />  </>}> </Route>

                <Route path="/admin/shirt-pocket" element={<> <ShirtPocketMasterList />  </>}> </Route>
                <Route path="/admin/add-shirt-pocket" element={<> <ShirtPocketMasterAdd />  </>}> </Route>

                {/* ============ Dresses > Mens> Shirt Masters end============ */}


                {/* ============ Dresses > Mens> Trouser Masters ============ */}

                 <Route path="/admin/trouser-bottom" element={<> <TrouserBottomMasterList /> </>}> </Route>
                <Route path="/admin/add-trouser-bottom" element={<> <TrouserBottomMasterAdd /> </>}> </Route>

                <Route path="/admin/trouser-crotch" element={<> <TrouserCrotchMasterList /> </>}> </Route>
                <Route path="/admin/add-trouser-crotch" element={<> <TrouserCrotchMasterAdd /> </>}> </Route>

                <Route path="/admin/trouser-pocket" element={<> <TrouserPocketMasterList /> </>}> </Route>
                <Route path="/admin/add-trouser-pocket" element={<> <TrouserPocketMasterAdd /> </>}> </Route>

                {/* ============Operational Masters============ */}

                <Route path="/admin/fabrics" element={<> <FabricsList/> </>}></Route>
                <Route path="/admin/add-fabrics" element={<> <FabricsAdd/> </>}></Route>

                <Route path="/admin/manufacturers" element={<><ManufacturesList/> </>}></Route>
                <Route path="/admin/add-manufacturers" element={<><ManufacturesAdd/> </>}></Route>

                <Route path="/admin/stitching" element={<> <StitchingCentersList/> </>}></Route>
                <Route path="/admin/add-stitching" element={<> <StitchingCentersAdd/> </>}></Route>

                <Route path="/admin/tailorshops" element={<> <TailorShopsList/> </>}></Route>
                <Route path="/admin/add-tailorshops" element={<> <TailorShopsAdd/> </>}></Route>

  {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////              */}
                 {/* ============Waist Coat Masters============ */}      
                 <Route path="/admin/waist-coat-bottom-type" element={<> <WaistCoatBottomTypeList/> </>}> </Route>
                 <Route path="/admin/add-waist-coat-bottom-type" element={<> <WaistCoatBottomTypeAdd/> </>}> </Route>

                 <Route path="/admin/waist-coat-type" element={<> <WaistCoatTypeList/> </>}></Route>
                 <Route path="/admin/add-waist-coat-type" element={<> <WaistCoatTypeAdd/> </>}></Route>
                 
                 <Route path="/admin/waist-coat-neck" element={<> <WaistCoatNeckList/> </>}> </Route>
                 <Route path="/admin/add-waist-coat-neck" element={<> <WaistCoatNeckAdd/> </>}></Route>

                 <Route path="/admin/waist-coat-pocket" element={<> <WaistCoatPocketList/> </>}></Route>
                 <Route path="/admin/add-waist-coat-pocket" element={<> <WaistCoatPocketAdd/> </>}></Route>
                
                 {/* ============Sherwani Masters============ */}   

                 <Route path="/admin/sherwani-collar-design" element={<> <SherwaniCollarDesignList/> </>}></Route>
                 <Route path="/admin/add-sherwani-collar-design" element={<> <SherwaniCollarDesignAdd/> </>}></Route>

                 <Route path="/admin/sherwani-collar" element={<> <SherwaniCollarList/> </>}></Route>
                 <Route path="/admin/add-sherwani-collar" element={<> <SherwaniCollarAdd/> </>}></Route>
                  
                 <Route path="/admin/sherwani-cuff-design" element={<> <SherwaniCuffDesignList/> </>}></Route>
                 <Route path="/admin/add-sherwani-cuff-design" element={<> <SherwaniCuffDesignAdd/> </>}></Route>

                 <Route path="/admin/sherwani-cuff" element={<> <SherwaniCuffList/> </>}></Route>
                 <Route path="/admin/add-sherwani-cuff" element={<> <SherwaniCuffAdd/> </>}></Route>

                 <Route path="/admin/sherwani-front" element={<> <SherwaniFrontList/> </>}></Route>
                 <Route path="/admin/add-sherwani-front" element={<> <SherwaniFrontAdd/> </>}></Route>

                 <Route path="/admin/sherwani-jari-design" element={<> <SherwaniJariDesignList/> </>}></Route>
                 <Route path="/admin/add-sherwani-jari-design" element={<> <SherwaniJariDesignAdd/> </>}></Route>

                 <Route path="/admin/sherwani-pocket" element={<> <SherwaniPocketList/> </>}></Route>
                 <Route path="/admin/add-sherwani-pocket" element={<> <SherwaniPocketAdd/> </>}></Route>
                 
                 <Route path="/admin/sherwani-side-cut" element={<> <SherwaniSideCutList/> </>}></Route>
                 <Route path="/admin/add-sherwani-side-cut" element={<> <SherwaniSideCutAdd/> </>}></Route>
                 
                 {/* ============Kurta Masters============ */}  

                 <Route path="/admin/kurta-collar" element={<> <KurtaCollarList/> </>}></Route>
                 <Route path="/admin/add-kurta-collar" element={<> <KurtaCollarAdd/> </>}></Route>

                 <Route path="/admin/kurta-front" element={<> <KurtaFrontList/> </>}></Route>
                 <Route path="/admin/add-kurta-front" element={<> <KurtaFrontAdd/> </>}></Route>

                 <Route path="/admin/kurta-pocket" element={<> <KurtaPocketList/> </>}></Route>
                 <Route path="/admin/add-kurta-pocket" element={<> <KurtaPocketAdd/> </>}></Route>

                 <Route path="/admin/kurta-sleeve" element={<> <KurtaSleeveList/> </>}></Route>
                 <Route path="/admin/add-kurta-sleeve" element={<> <KurtaSleeveAdd/> </>}></Route>

                 <Route path="/admin/kurta-style" element={<> <KurtaStyleList/> </>}></Route>
                 <Route path="/admin/add-kurta-style" element={<> <KurtaStyleAdd/> </>}></Route>
                 
                 {/* ================Grn================= */} 

                 <Route path="/admin/grn" element={<> <GrnList/> </>}></Route>
                 <Route path="/admin/add-grn" element={<> <GrnAdd/> </>}></Route>

                 {/* ==========Stitching Steps========== */}

                 <Route path="/admin/order-issue" element={<> <OrderIssueList/> </>}></Route>
                 <Route path="/admin/add-order-issue" element={<> <OrderIssueAdd/> </>}></Route> 

                 {/* ==========Orders========== */}

                 <Route path="/admin/orders" element={<> <OrdersList/> </>}> </Route>

                 {/* ==========Item Master========== */}

                 <Route path="/admin/item" element={<> <ItemMasterList/> </>}> </Route>
                 <Route path="/admin/add-item" element={<> <ItemMasterAdd/> </>}> </Route>
                 
                 {/* ==========Standard Measurement UpperBody========== */}

                 <Route path="/admin/standard_measurements_upperbody" element={<> <StandardMeasurementsUpperBodyList/> </>}> </Route>
                 <Route path="/admin/add-standard_measurements_upperbody" element={<> <StandardMeasurementsUpperBodyAdd/> </>}></Route>

                 {/* ==========Standard Measurement LowerBody========== */}

                 <Route path="/admin/standard_measurements_lowerbody" element={<> <StandardMeasurementsLowerBodyList/>  </>}></Route>
                 <Route path="/admin/add-standard_measurements_lowerbody" element={<> <StandardMeasurementsLowerBodyAdd/>  </>}></Route>


            </Routes>
        </>
    )
}
export default TailorRoutes;