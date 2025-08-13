import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Create from './pages/create/Create'
import View from './pages/view/View'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </>
  )
}

export default App
