import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />}></Route>
        </Route>
        <Route path="/user" element={<Users/>}></Route>
      </Routes>
    </>
  );
}

export default React.memo(App);
