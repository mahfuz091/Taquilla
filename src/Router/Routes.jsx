import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Lauout/DashBoardLayout";
import Eventos from "../Pages/DashBoard/Eventos/Eventos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "eventos",
        element: <Eventos />,
      },
    ],
  },
]);
