import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Food from "./pages/food/Food";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
