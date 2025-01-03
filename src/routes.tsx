import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/Sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/Sign-up";
import { Orders } from "./pages/app/orders/orders";
import { NotFound } from "./pages/404";
import { Dashboard } from "./pages/app/dashboard/dashboard";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/orders', 
    element: <AppLayout />,
    children: [ 
      {
        path: '/orders', 
        element: <Orders />
      }
    ]
  },
  {
    path: '/sign-in', 
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in', 
        element: <SignIn />
      }
    ]
  },
  {
    path: '/sign-up', 
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-up', 
        element: <SignUp />
      }
    ]
  }
])