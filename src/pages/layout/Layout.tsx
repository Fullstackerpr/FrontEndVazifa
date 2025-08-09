import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

const Layout = () => {
  return (
    <div>
        <Header/>
        <Link to={"/login"}></Link>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default React.memo(Layout);