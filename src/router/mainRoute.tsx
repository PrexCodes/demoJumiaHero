import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Component/Block/Layout/UserLayout";
import HomeScreen from "../Pages/User/HomeScreen";
import AdminLayout from "../Component/Block/Layout/AdminLayout";
import Dashboard from "../Pages/admin/Dashboard";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
        {
            index: true,
            element: <HomeScreen/>,
            path: '/'
        
        }
    ]
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
        {
            index: true,
            element: <Dashboard/>,
            path: '/dashboard'
        
        }
    ]
  },
]);
