import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProperty from "./pages/AddProperty";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Bookings from "./pages/Bookings";
import Favourites from "./pages/Favourites";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listing" element={<Listing />}></Route>
        <Route path="/addproperty" element={<AddProperty />}></Route>
        <Route path="/bookings" element={<Bookings />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
