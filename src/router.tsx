import { createBrowserRouter } from "react-router"
import App from "./App";
import { SignUp } from "./components/SignUp";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },

  {
    path: "/sign-up",
    Component: SignUp,
  },
]);