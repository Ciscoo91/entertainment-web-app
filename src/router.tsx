import {createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SighUp"
import Movies from "./pages/Movies"
import Series from "./pages/Series"
import Bookmarked from "./pages/Bookmarked"
import HomeDisplayer from "./components/HomeDisplayer"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <HomeDisplayer />
      },
      {
        path: "/movies",
        element: <Movies/>
      },
      {
        path: "/series",
        element: <Series/>
      },
      {
        path: "/bookmarked",
        element: <Bookmarked/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
])

