import {RouterProvider} from "react-router-dom";
import {router} from "@/app/config/route/router";

export const App = () => {
    return <RouterProvider router={router} />;
};
