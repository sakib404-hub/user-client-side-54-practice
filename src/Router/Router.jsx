import { createBrowserRouter } from "react-router";
import Layout from "../Components/Layout/Layout";
import Homepage from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import Users from "../Components/Users/Users";
import Loader from "../Components/Loader/Loader";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AddUser from "../Components/AddUser/AddUser";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: '/aboutUs',
                Component: AboutUs
            },
            {
                path: '/users',
                Component: Users,
                loader: () => fetch('http://localhost:5010/users'),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/addUser',
                Component: AddUser
            }
        ]
    }
])