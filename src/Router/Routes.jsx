import { Navigate, createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Lauout/DashBoardLayout";
import Eventos from "../Pages/DashBoard/Eventos/Eventos";
import CreateEvent from "../Pages/DashBoard/Eventos/CreateEvent/CreateEvent";
import SingleEvento from "../Pages/DashBoard/SingleEvento/SingleEvento";
import EditarEvento from "../Pages/DashBoard/EditarEvento/EditarEvento";
import EditarTicket from "../Pages/DashBoard/EditarTicket/EditarTicket";

import DetallesDelBoleto from "../Pages/DashBoard/DetallesDelBoleto/DetallesDelBoleto";
import Pagado from "../Pages/DashBoard/Finanzas/Pagado/Pagado";
import Facturas from "../Pages/DashBoard/Finanzas/Facturas/Facturas";
import Fiscal from "../Pages/DashBoard/Finanzas/Fiscal/Fiscal";
import Cuenta from "../Pages/DashBoard/Finanzas/Cuenta/Cuenta";
// import Informes from "../Pages/DashBoard/Informes/Informes";
import PaymentDetails from "../Pages/DashBoard/PaymentDetails/PaymentDetails";
import Compras from "../Pages/DashBoard/Compras/Compras";
import Acceso from "../Pages/DashBoard/Informes/Acceso/Acceso";
import Ventas from "../Pages/DashBoard/Informes/Ventas/Ventas";
import Trafico from "../Pages/DashBoard/Informes/Trafico/Trafico";
import AccesoDashboard from "../Pages/DashBoard/Informes/Acceso/AccesoDashboard";
import TraficoDashBoard from "../Pages/DashBoard/Informes/Trafico/TraficoDashBoard";
import VentasDashboard from "../Pages/DashBoard/Informes/Ventas/VentasDashboard";
import Marketing from "../Pages/DashBoard/Marketing/Marketing";
import Ajustes from "../Pages/DashBoard/Ajustes/Ajustes";
import Acortador from "../Pages/DashBoard/Acortador/Acortador";

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
      {
        path: "marketing",
        element: <Marketing />,
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
        path: "eventos/editarTicket",
        element: <EditarTicket></EditarTicket>,
      },
      {
        path: "compras",
        element: <Compras />,
      },

      {
        path: "compras/detallesboleto",
        element: <DetallesDelBoleto></DetallesDelBoleto>,
      },
      {
        path: "informes/acceso",
        element: <Acceso />,
      },
      {
        path: "informes/acceso/dashboard",
        element: <AccesoDashboard />,
      },
      {
        path: "informes/ventas",
        element: <Ventas />,
      },
      {
        path: "informes/ventas/dashboard",
        element: <VentasDashboard></VentasDashboard>,
      },
      {
        path: "informes/trafico",
        element: <Trafico />,
      },
      {
        path: "informes/trafico/dashboard",
        element: <TraficoDashBoard />,
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
      {
        path: "ajustes",
        element: <Ajustes />,
      },
      {
        path: "acortador",
        element: <Acortador />,
      },
    ],
  },
]);
