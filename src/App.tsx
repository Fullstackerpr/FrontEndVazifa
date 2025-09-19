import { NavLink, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import View from "./pages/View";

function App() {
  return (
    <>
      <div className="bg-blue-600 text-white flex gap-3 px-4 py-2 font-bold">
        <NavLink
          className={({ isActive }) =>
            `list-none uppercase ${isActive ? "text-gray-600 underline" : ""}`
          }
          to={"/"}
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `list-none uppercase ${isActive ? "text-gray-600 underline" : ""}`
          }
          to={"/view"}
        >
          View
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
