import { Navigate, createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Lauout/DashBoardLayout";
import Eventos from "../Pages/DashBoard/Eventos/Eventos";
import CreateEvent from "../Pages/DashBoard/Eventos/CreateEvent/CreateEvent";
import SingleEvento from "../Pages/DashBoard/SingleEvento/SingleEvento";
import EditarEvento from "../Pages/DashBoard/EditarEvento/EditarEvento";
import EditarTicket from "../Pages/DashBoard/EditarTicket/EditarTicket";
import Pedidos from "../Pages/DashBoard/Pedidos/Pedidos";
import DetallesDelBoleto from "../Pages/DashBoard/DetallesDelBoleto/DetallesDelBoleto";
import Pagado from "../Pages/DashBoard/Finanzas/Pagado/Pagado";
import Facturas from "../Pages/DashBoard/Finanzas/Facturas/Facturas";
import Fiscal from "../Pages/DashBoard/Finanzas/Fiscal/Fiscal";
import Cuenta from "../Pages/DashBoard/Finanzas/Cuenta/Cuenta";
import Informes from "../Pages/DashBoard/Informes/Informes";
import PaymentDetails from "../Pages/DashBoard/PaymentDetails/PaymentDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to='/eventos'></Navigate>,
      },
      {
        path: "eventos",
        element: <Eventos />,
      },
      {
        path: "eventos/createEvento",
        element: <CreateEvent></CreateEvent>,
      },
      {
        path: "eventos/paymentDetails",
        element: <PaymentDetails></PaymentDetails>,
      },
      // {
      //   path: 'finanzas',
      //   element: <Navigate to="/finanzas/pagado" ></Navigate>

      // },
      {
        path: "eventos/singleEvento",
        element: <SingleEvento></SingleEvento>,
      },
      {
        path: "eventos/editarEvento",
        element: <EditarEvento></EditarEvento>,
      },
      {
        path: "eventos/editarTicket",
        element: <EditarTicket></EditarTicket>,
      },
      {
        path: "pedidos",
        element: <Pedidos></Pedidos>,
      },

      {
        path: "pedidos/detallesboleto",
        element: <DetallesDelBoleto></DetallesDelBoleto>,
      },
      {
        path: "informes",
        element: <Informes></Informes>,
      },

      {
        path: "finanzas/pagado",
        element: <Pagado></Pagado>,
      },
      {
        path: "finanzas/facturas",
        element: <Facturas></Facturas>,
      },
      {
        path: "finanzas/fiscal",
        element: <Fiscal></Fiscal>,
      },
      {
        path: "finanzas/cuenta",
        element: <Cuenta></Cuenta>,
      },
    ],
  },
]);
