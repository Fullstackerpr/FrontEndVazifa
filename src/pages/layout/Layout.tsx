import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

const Layout = () => {    
    return (
    <div>
        <Header/>
        <Hero/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout;