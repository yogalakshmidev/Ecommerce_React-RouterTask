import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import Layout from "./wrappers/Layout";
import DashboardLayout from "./wrappers/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import Home from "./Home";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";



const App = () => {

    const routes = [
        {
            path:"/",
            element:<Layout />,
            children:[
                {
                    path: "",
                    element: <Home />
                },
                {
                  path: "register",
                  element: <Register />
              },
              {
                  path: "login",
                  element: <Login />
              },

                // {
                //     path:"dashboard",
                //     element:<DashboardLayout />,
                //     children: [
                //         {
                //             path:"",
                //             element:<Dashboard />
                //         },
                //     ]
                // }
            ]
        }
    ];

    const router = createBrowserRouter(routes, {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        }
    });

    return <RouterProvider
        router={router}
        future={{
            v7_startTransition: true,
        }}
    />
}

export default App;