import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";


const Layout = lazy(() => import("./layout/Layout"))
const Home = lazy(() => import("./home/Home"))
const Wishlist = lazy(() => import("./wishlist/Wishlist"))

const MainRouter = () => {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            {useRoutes([
                {
                    path: "/",
                    element: <Layout/>,
                    children: [
                        {index: true, element: <Home/>},
                        {path: "like", element: <Wishlist/>},
                        {path: "*", element: <div>Error 404 not found!!!</div>}
                    ]
                }
            ])}
        </Suspense>
    </div>
  )
}

export default MainRouter;