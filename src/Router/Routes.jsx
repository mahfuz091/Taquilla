import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Lauout/DashBoardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashBoardLayout></DashBoardLayout>,
    },
]);