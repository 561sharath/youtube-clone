import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Body from "./components/Body";
import MainContainer from "./components/MainContainer";

import { Provider } from "react-redux";
import store from "./Utils/Store";
import Serachpage from "./components/Serachpage";
import WacthPage from "./components/WacthPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path="wacth" element={<WacthPage />} />
              <Route path="/search/:id" element={<Serachpage />} />
            </Route>
            
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
