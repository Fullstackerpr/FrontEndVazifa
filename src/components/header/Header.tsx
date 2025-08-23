import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">MyApp</h1>
                <div className="flex gap-6">
                    <NavLink 
                        to={'/'} 
                        className={({ isActive }) => 
                            `transition-colors duration-200 hover:text-blue-400 ${
                                isActive ? 'text-blue-400 font-semibold' : 'text-white'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to={'/register'} 
                        className={({ isActive }) => 
                            `transition-colors duration-200 hover:text-blue-400 ${
                                isActive ? 'text-blue-400 font-semibold' : 'text-white'
                            }`
                        }
                    >
                        Register
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default React.memo(Header)
