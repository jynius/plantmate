import { Route, Routes } from "react-router";
import SampleHome from "./SampleHome";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SampleHome />} />
      </Routes>
    </>
  );
};

export default Main;
