import { Route, Routes } from "react-router";
import SampleHome from "./SampleHome";
import Community from "./community/Community";
import CommunityPostRegister from "./community/CommunityPostRegister";
import GrowthDiaryList from "./diary/GrowthDiaryList";
import MyPlantList from "./myplants/MyPlantList";
import Login from "./auth/Login";

import MyPlantDetail from "./myplants/MyPlantDetail";
import { MyPlantStore } from "../context/MyPlantStore";
import SignUp from "../SignUp";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SampleHome />} />
        <Route path="/search" element={<SampleHome />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/post-register" element={<CommunityPostRegister />} />
        <Route path="/my-plants" element={<MyPlantStore><MyPlantList /> </MyPlantStore>} />
        <Route path="/my-plants/:id" element={<MyPlantStore><MyPlantDetail /></MyPlantStore>} />
        <Route path="/growth-journal" element={<GrowthDiaryList />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Main;
