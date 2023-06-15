import { Route, Routes } from "react-router";
import SampleHome from "./SampleHome";
import Community from "./community/Community";
import GrowthDiaryList from "./diary/GrowthDiaryList";
import MyPlantList from "./myplants/MyPlantList";
import Login from "./auth/Login";
import Register from "./auth/Register";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SampleHome />} />
        <Route path="/search" element={<SampleHome />} />
        <Route path="/community" element={<Community />} />
        <Route path="/my-plants" element={<MyPlantList />} />
        <Route path="/growth-journal" element={<GrowthDiaryList />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/Register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Main;
