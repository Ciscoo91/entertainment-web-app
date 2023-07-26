import {ReactNode} from "react"
import { Navigate } from "react-router-dom";
import userStore from "../store"

type ProtectedRouteProps = {
    children: ReactNode
}

export function ProtetedRoute({children}: ProtectedRouteProps){

    const [user] = userStore((state) => [state.user]);

    if(user == null){
        return <Navigate to="login" />
    }

    return children
}