import {create} from "zustand"
import { User } from "./types";

type State = {
    user: null | User,
    accessToken: null | string
}

type Action = {
    authenticate: (username: User, accessToken: string) => void,
    logout: () => void
}

const userStore = create<State & Action>((set) => ({
    user: null,
    accessToken: null,
    authenticate: (user: User, accessToken:string) => {
        set({ user, accessToken });
    },
    logout: () => set({user: null, accessToken:null})
}))

export default userStore