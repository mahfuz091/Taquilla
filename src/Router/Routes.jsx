import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Lauout/DashBoardLayout";
import Eventos from "../Pages/DashBoard/Eventos/Eventos";
import CreateEvent from "../Pages/DashBoard/Eventos/CreateEvent/CreateEvent";
import SingleEvento from "../Pages/DashBoard/SingleEvento/SingleEvento";
import EditarEvento from "../Pages/DashBoard/EditarEvento/EditarEvento";
import EditarTicket from "../Pages/DashBoard/EditarTicket/EditarTicket";
import Pedidos from "../Pages/DashBoard/Pedidos/Pedidos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "eventos",
        element: <Eventos />,
      },
      {
        path: "eventos/createEvento",
        element: <CreateEvent></CreateEvent>,
      },
      {
        path: "eventos/singleEvento",
        element: <SingleEvento></SingleEvento>,
      },
      {
        path: "eventos/editarEvento",
        element: <EditarEvento></EditarEvento>,
      },
      {
        path: 'eventos/editarTicket',
        element: <EditarTicket></EditarTicket>
      },
      {
        path: 'pedidos',
        element: <Pedidos></Pedidos>
      }
    ],
  },
]);
