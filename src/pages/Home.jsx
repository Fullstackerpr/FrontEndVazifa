import React from 'react'
import Products from '../components/Products'
import { DATA } from '../static'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Products data={DATA}/>
    </div>
  )
}

export default Home;