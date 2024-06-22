import {create} from "zustand";
import {AuthActions, InitialState, IUser} from "./types.ts";
import {combine} from "zustand/middleware";
import {login} from "./auth.service.ts";




export const useAuthStore = create<InitialState & AuthActions>(
    combine<InitialState, AuthActions>({
        user: {} as IUser,
        isAuth: false,
        isLoading: false,
        password: '',
        email: ''
    },
        (set) => ({
            setAuth: (bool: boolean) => set({isAuth: bool}),
            setUser: (user: IUser) => set({user}),
            setIsLoading: (bool: boolean) => set({isLoading: bool}),
            setPassword: (password: string) => set({password}),
            setEmail: (email: string) => set({email}),

            login: async (email: string, password: string) => {
                try {
                    const data = await login(email, password);

                    if(data){
                        const user = data.request
                        set({isAuth: true, user: user});
                        localStorage.setItem('token', data.request.token)
                    }
                }
                catch (error) {
                    console.log(error)
                }
            },
            logout: async () => {
                try {
                    set({user: {} as IUser})
                    set({isAuth: false});
                    localStorage.removeItem('token')
                }
                catch (error) {
                    console.log(error)
                }
            }
        })
    )
)