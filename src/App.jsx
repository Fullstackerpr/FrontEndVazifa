import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import HomeDetail from "./pages/home/HomeDetail";
import Post from "./pages/posts/Post";
import Todos from "./pages/todos/Todos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/user/:id" element={<HomeDetail/>}></Route>
          <Route path="/post" element={<Post/>}></Route>
          <Route path="/todos" element={<Todos/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
