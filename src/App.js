import { Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import "./index.css";
import Browse from "./component/Browse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Routes>
    </>
  );
}

export default App;
