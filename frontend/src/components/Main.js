import { Route, Routes } from "react-router";
import SampleHome from "./SampleHome";
import Community from "../community/Community";
import GrowthDiaryList from "./diary/GrowthDiaryList";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SampleHome />} />
        <Route path='/search' element={<SampleHome />} />
        <Route path='/community' element={<Community />} />
        <Route path='/my-plants' element={<SampleHome />} />
        <Route path='/growth-journal' element={<GrowthDiaryList />} />
      </Routes>
    </>
  );
};

export default Main;
