import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const About = lazy(() => import("./about/About"));
const Product = lazy(() => import("./product/Product"));

const Login = lazy(() => import("./login/Login"));
const Auth = lazy(() => import("./auth/Auth"));

const Dashboard = lazy(() => import("./dashboard"));

const Account = lazy(() => import("./dashboard/account/Account"));
const AccCreate = lazy(() => import("./dashboard/account/create/Create"));
const AccView = lazy(() => import("./dashboard/account/view/View"));

const Profile = lazy(() => import("./dashboard/profile/Profile"));
const Wallet = lazy(() => import("./dashboard/wallet/Wallet"));
const Group = lazy(() => import("./dashboard/group/Group"));
const Channel = lazy(() => import("./dashboard/channel/Channel"));
const Contact = lazy(() => import("./dashboard/contacts/Contact"));
const Call = lazy(() => import("./dashboard/call/Call"));
const Message = lazy(() => import("./dashboard/message/Message"));
const Setting = lazy(() => import("./dashboard/setting/Setting"));
const Mode = lazy(() => import("./dashboard/mode/Mode"));

const MainRouter = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {useRoutes([
          {
            path: "/",
            element: <Layout />,
            children: [
              { index: true, element: <Home /> },
              { path: "about", element: <About /> },
              { path: "product", element: <Product /> },
              { path: "*", element: <div>Error 404 Not found!!!</div> },
            ],
          },
          { path: "/login", element: <Login /> },
          {
            path: "/",
            element: <Auth />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
                children: [
                  {
                    path: "account",
                    element: <Account />,
                    children: [
                      { path: "", element: <AccCreate /> },
                      { path: "view", element: <AccView /> },
                    ],
                  },
                  { path: "profile", element: <Profile /> },
                  { path: "wallet", element: <Wallet /> },
                  { path: "group", element: <Group /> },
                  { path: "channel", element: <Channel /> },
                  { path: "contact", element: <Contact /> },
                  { path: "call", element: <Call /> },
                  { path: "message", element: <Message /> },
                  { path: "setting", element: <Setting /> },
                  { path: "mode", element: <Mode /> },
                ],
              },
            ],
          },
        ])}
      </Suspense>
    </div>
  );
};

export default React.memo(MainRouter);
