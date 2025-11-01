import { createBrowserRouter } from "react-router";
import Layout from "../Components/Layout/Layout";
import Homepage from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Homepage
            }
        ]
    }
])