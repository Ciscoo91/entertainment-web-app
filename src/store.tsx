import {create} from "zustand"
import { User } from "./types";

type State = {
    user: null | User,
    token: null | string
}

type Action = {
    login: (username: string, password: string) => Promise<void>,
    logout: () => void
}

const userStore = create<State & Action>((set) => ({
    user: null,
    token: null,
    login: async (username: string, password:string) => {
        try {
        // Make an API call to authenticate the user
        const response = await fetch('your-authentication-api-url', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
            'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Authentication failed');
        }

        const { user, token } = await response.json();

        set({ user, token });
        } catch (error) {
            console.error(error);
        }
    },
    logout: () => set({user: null, token:null})
}))

export default userStore