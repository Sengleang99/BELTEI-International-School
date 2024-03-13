import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Baner from "./Component/Baner";
import Branch from "./Component/Branch";
import Content from "./Component/content";
import MessageFPD from "./Component/Message";
import Purpose from "./Component/Purpose";
import SideBarRight from "./Component/SideBarRight";
import VisionMessionAndGaol from "./Component/VisionMessionAndGaol";
import History from "./Component/History";
import WhyBeltei from "./Component/WhyBeltei";
import KhmerGenderalEducation from "./Component/KhmerGenderalEducation";
import Footer from "./Component/Footer";
import EFLProgram from "./Component/EFLProgram";
import CSLProgram from "./Component/CSLProgram";
import Intelligent from "./Component/Intelligent";
import Sidebar from "./Component/Sidebar";
import Prepration_Course from "./Component/Prepration_Course";
import Special_video from "./Component/Special_video";
import Local_Recognition from "./Component/Local_Recognition";
import Collaboration from "./Component/Collaboration";
import GradeA_Student from "./Component/GradeA_Student";
import Nation_Level from "./Component/Nation_Level";
import City_Level from "./Component/City_Level";
import Beltei_High from "./Component/Beltei_High";
import Beltei_Junior from "./Component/Beltei_Junior";
import Primery_Certificate from "./Component/Primery_Certificate";
import Grade12 from "./Component/Grade12";
import Grade9 from "./Component/Grade9";
import Grade6 from "./Component/Grade6";
import Grade3 from "./Component/Grade3";
import Event_Daily from "./Component/Event_Daily";
import ESL from "./Component/ESL";
import ESL_Level6 from "./Component/ESL_Level6";
import Preschool6 from "./Component/Preschool";
import Kirirom from "./Branch/Kirirom";
import Toul_Tumpoung from "./Branch/Toul_Tumpoung";
import DN from "./Branch/DN";
import Phsar_Duoem_Skov from "./Branch/Phsar_Duoem_Skov";
import Chba_Ampeov from "./Branch/Chba_Ampeov";
import O_Rusey from "./Branch/O_Rusey";
import Loksang from "./Branch/Loksang";
import Pochintong from "./Branch/Pochintong";
import Stung_Meancheay from "./Branch/Stung_Meancheay";
import Olympic from "./Branch/Olympic";
import Group3 from "./Event/Group3";
import BatchGroup3 from "./Event/BatchGroup3";
import Batch18Group1 from "./Event/Bactch18Group1";
import Nov2523 from "./Event/Nov2523";
import Beltei24 from "./Recognized/Beltei24";
import Beltei23 from "./Recognized/Beltei23";
import PhsaToch from "./Branch/PhsaToch";
import Phsa_Deihoy from "./Branch/Phsa_Deihoy";
import Camko_City from "./Branch/Camko_City";
import Takhmao from "./Branch/Takhmao";
import Chumpu_Vorn from "./Branch/Chumpu_Vorn";
import Vengsreng from "./Branch/Vengsreng";
import Russey_Kao from "./Branch/Russey_Kao";
import PrekLeap from "./Branch/PrekLeap";
import PrekLeap2 from "./Branch/PrekLeap2";
import Chomchao from "./Branch/Chomchao";
import Chouk_Meas from "./Branch/Chouk_Meas";
import Kour_Srov from "./Branch/Kour_Srov";
import Preysar from "./Branch/Preysar";
import Prektameak from "./Branch/Prektameak";
import Beltei22 from "./Recognized/Beltei22";
import Batch66N67 from "./Event/Batch66N67";
import Level12 from "./Component/Level12";
import Level9 from "./Component/Level9";
import Level6 from "./Component/Level6";
import Level3 from "./Component/Level3";
import Campus22 from "./Event/Campus22";
import Level12Student from "./Event/Level12Student";

function App() {
  const backgroundColor = "#72a17a";
  return (
    <div
      className="p-3"
      style={{ backgroundColor, height: "100%", width: "100%" }}
    >
      <div className="container" style={{ background: "white" }}>
        <Baner />
        <BrowserRouter>
          <Branch />
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 border">
              <Sidebar />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 border">
              <Routes>
                <Route path="/" element={<Content />}></Route>
                <Route path="/SMSFromPD" element={<MessageFPD />}></Route>
                <Route path="/Purpose" element={<Purpose />}></Route>
                <Route
                  path="/Vision"
                  element={<VisionMessionAndGaol />}
                ></Route>
                <Route path="/history" element={<History />}></Route>
                <Route path="/WhyBeltei" element={<WhyBeltei />}></Route>
                <Route path="/KGE" element={<KhmerGenderalEducation />}></Route>
                <Route path="/ESLProgram" element={<EFLProgram />}></Route>
                <Route path="/CSLProgram" element={<CSLProgram />}></Route>
                <Route path="/Intelligent" element={<Intelligent />}></Route>
                <Route
                  path="/Prepration"
                  element={<Prepration_Course />}
                ></Route>
                <Route
                  path="/Recognition"
                  element={<Local_Recognition />}
                ></Route>
                <Route
                  path="/Collaboration"
                  element={<Collaboration />}
                ></Route>
                <Route
                  path="/GradeA_Student"
                  element={<GradeA_Student />}
                ></Route>
                <Route path="/Nation_Level" element={<Nation_Level />}></Route>
                <Route path="/City_Level" element={<City_Level />}></Route>
                <Route path="/Beltei_Hight" element={<Beltei_High />}></Route>
                <Route
                  path="/Beltei_Junior"
                  element={<Beltei_Junior />}
                ></Route>
                <Route
                  path="/Primery_Certificate"
                  element={<Primery_Certificate />}
                ></Route>
                {/* public speaking Grade */}
                <Route path="/Grade12" element={<Grade12 />}></Route>
                <Route path="/Grade9" element={<Grade9 />}></Route>
                <Route path="/Grade6" element={<Grade6 />}></Route>
                <Route path="/Grade3" element={<Grade3 />}></Route>
                <Route path="/ESL" element={<ESL />}></Route>
                <Route path="/ESL_Level6" element={<ESL_Level6 />}></Route>
                <Route path="/Preschool" element={<Preschool6 />}></Route>
                {/* public speaking Level */}
                <Route path="/Level12" element={<Level12 />}></Route>
                <Route path="/Level9" element={<Level9 />}></Route>
                <Route path="/Level6" element={<Level6 />}></Route>
                <Route path="/Level3" element={<Level3 />}></Route>
                {/* Branch */}

                <Route path="/Kirirom" element={<Kirirom />}></Route>
                <Route
                  path="/Toul_Tumpoung"
                  element={<Toul_Tumpoung />}
                ></Route>
                <Route path="/DN" element={<DN />}></Route>
                <Route
                  path="/Phsar_Duoem_Skov"
                  element={<Phsar_Duoem_Skov />}
                ></Route>
                <Route path="/Chba_Ampeov" element={<Chba_Ampeov />}></Route>
                <Route path="/O_Rusey" element={<O_Rusey />}></Route>
                <Route path="/Loksang" element={<Loksang />}></Route>
                <Route path="/Pochintong" element={<Pochintong />}></Route>
                <Route
                  path="/Stung_Meancheay"
                  element={<Stung_Meancheay />}
                ></Route>
                <Route path="/Olympic" element={<Olympic />}></Route>
                <Route path="/PhsaToch" element={<PhsaToch />}></Route>
                <Route path="/Phsa_Deihoy" element={<Phsa_Deihoy />}></Route>
                <Route path="/Camko_City" element={<Camko_City />}></Route>
                <Route path="/Takhmao" element={<Takhmao />}></Route>
                <Route path="/Chumpu_Vorn" element={<Chumpu_Vorn />}></Route>
                <Route path="/Vengsreng" element={<Vengsreng />}></Route>
                <Route path="/Russey_Kao" element={<Russey_Kao />}></Route>
                <Route path="/PrekLeap" element={<PrekLeap />}></Route>
                <Route path="/PrekLeap2" element={<PrekLeap2 />}></Route>
                <Route path="/Chomchao" element={<Chomchao />}></Route>
                <Route path="/Chouk_Meas" element={<Chouk_Meas />}></Route>
                <Route path="/Kour_Srov" element={<Kour_Srov />}></Route>
                <Route path="/Preysar" element={<Preysar />}></Route>
                <Route path="/Prektameak" element={<Prektameak />}></Route>

                {/* Event */}
                <Route path="/BatchGroup3" element={<BatchGroup3 />}></Route>
                <Route path="/Group3" element={<Group3 />}></Route>
                <Route
                  path="/Batch18Group1"
                  element={<Batch18Group1 />}
                ></Route>
                <Route path="/Nov2523" element={<Nov2523 />}></Route>
                <Route path="/Batch66N67" element={<Batch66N67 />}></Route>
                <Route path="/Campus22" element={<Campus22 />}></Route>
                <Route
                  path="/Level12Student"
                  element={<Level12Student />}
                ></Route>

                {/* Reconigntation */}
                <Route path="/Beltei24" element={<Beltei24 />}></Route>
                <Route path="/Beltei23" element={<Beltei23 />}></Route>
                <Route path="/Beltei22" element={<Beltei22 />}></Route>
              </Routes>
              <Event_Daily />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 border">
              <SideBarRight />
            </div>
          </div>
        </BrowserRouter>
        <div className="row">
          <div className="col-lg-12">
            <Special_video />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
