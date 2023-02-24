import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Kasm from "../Kasm/Kasm";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/:role",
  },
  {
    element: <Kasm />,
    path: "/linux",
  },
]);
