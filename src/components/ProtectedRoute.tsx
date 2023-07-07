import {ReactNode} from "react"
import { Navigate, useLocation } from "react-router-dom";
import userStore from "../store"

type ProtectedRouteProps = {
    children: ReactNode
}

function ProtetedRoute({children}: ProtectedRouteProps){

    const [user, token] = userStore((state) => [state.user, state.token]);
    const location = useLocation()

    if(user == null){
        return <Navigate to="login" />
    }

    return children
}