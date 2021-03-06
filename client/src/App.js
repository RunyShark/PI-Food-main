import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Lending from "./components/Lending/Lending";
import Error from "./components/Error/Error";
import Home from "./Pages/Home/Home";
import DetaisName from "../src/Pages/Module/DetailsName/DetailsName";
import Detail from "./Pages/Module/Detail/Details";
import Formuls from "../src/Pages/Module/Formuls/Formuls";
import Favorite from "./Pages/Module/Favorite/Favorite";
import UpdateFavorites from "./Pages/Module/UpdateFavorites/UpdateFavorites";
import "./App.css";

function App() {
  return (
    <div>
      <div className="page-container">
        <div className="content-wart">
          <Nav />
          <Routes>
            <Route path="/" element={<Lending />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Formuls />} />
            <Route path="/favorite/" element={<Favorite />} />
            <Route path="/favorite/update/:id" element={<UpdateFavorites />} />
            <Route path="/recipes/data/details" element={<DetaisName />} />
            <Route path="/recipes/data/details/:id" element={<Detail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
