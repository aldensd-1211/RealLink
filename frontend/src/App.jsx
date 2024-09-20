import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProperty from "./pages/AddProperty";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Bookings from "./pages/Bookings";
import Favourites from "./pages/Favourites";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading data...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/listing" element={<Listing />}></Route>
              <Route path="/addproperty" element={<AddProperty />}></Route>
              <Route path="/bookings" element={<Bookings />}></Route>
              <Route path="/favourites" element={<Favourites />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
