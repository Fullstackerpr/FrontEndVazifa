import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      { <Footer />}
    </>
  );
};

export default Layout;
