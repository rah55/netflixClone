import { Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import Error from "./component/Error";
import "./index.css";
import Browse from "./component/Browse";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/browse" element={<Browse />}></Route>
          <Route path="/error" element={<Error />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
