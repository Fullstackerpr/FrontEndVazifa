import { lazy, memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import notf from "../assets/404.jpg";
import loading from "../assets/loading.jpg";

const Layout = lazy(() => import("./layout"));
const Create = lazy(() => import("./create"));
const View = lazy(() => import("./view"));

const MainRouter = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <img src={loading} alt="" width={400} className="mx-auto mt-40" />
          </div>
        }
      >
        {useRoutes([
          {
            path: "/",
            element: <Layout />,
            children: [
              { index: true, element: <Create /> },
              { path: "view", element: <View /> },
              {
                path: "*",
                element: (
                  <div>
                    <img
                      src={notf}
                      alt=""
                      width={900}
                      className="h-[600px] object-cover mx-auto mt-16"
                    />
                  </div>
                ),
              },
            ],
          },
        ])}
      </Suspense>
    </div>
  );
};

export default memo(MainRouter);
