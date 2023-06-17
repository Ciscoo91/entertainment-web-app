import {createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SighUp"
import Movies from "./pages/Movies"
import Series from "./pages/Series"
import Bookmarked from "./pages/Bookmarked"

export const router = createBrowserRouter([
  {
    path: "/",
    element: typeof Home
  },
  {
    path: "/login",
    element: typeof Login
  },
  {
    path: "/sign-up",
    element: typeof SignUp
  },
  {
    path: "/movies",
    element: typeof Movies
  },
  {
    path: "/series",
    element: typeof Series
  },
  {
    path: "/bookmarked",
    element: typeof Bookmarked
  },
])

