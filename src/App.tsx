import { useRoutes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home";
import Shop from "./pages/shop/Shop";
import RecipesDetail from "./pages/recipes/intex"

const App = () => {
  return (
    <div>
      <Header/>
      {
        useRoutes([
          {path:"/", element:<Home/>},
          {path:"/shop", element:<Shop/>},  
          {path:"/recipe/:id", element: <RecipesDetail/>}
        ])
      }
    </div>
  )
}

export default App;