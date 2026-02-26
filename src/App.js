import { Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import Error from "./component/Error";
import "./index.css";
// import Browse from "./component/Browse";
import { Provider } from "react-redux";
import store from "./utils/store";
import { lazy, Suspense } from "react";
// import AllMovieDetails from "./component/AllMovieDetails";

const Browse = lazy(() => import('./component/Browse'));
const AllMovieDetails = lazy(() => import('./component/AllMovieDetails'));

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/browse" element={<Suspense fallback={<div>Content is loading......</div>}><Browse /></Suspense>}></Route>
          <Route path="/movie/:id" element={<Suspense fallback={<div>Content is loading......</div>}><AllMovieDetails /></Suspense>} />
           <Route path="*" element={<Error />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
