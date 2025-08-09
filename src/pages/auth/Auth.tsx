import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    const token = "aaaaaaaaa"
    return token ? <Outlet/> : <Navigate replace to={"/login"}/>
}

export default React.memo(Auth)