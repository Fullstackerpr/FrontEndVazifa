import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Modern Shoes</h2>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer