import { useRecoilState } from "recoil"
import { Alert, ToastAndroid } from "react-native"
import { userAtom } from "../app/userState"

export const useUser = () => {
    const [user, setUser] = useRecoilState(userAtom)

    const login = (
        username: string,
        password: string
    ): { success: boolean } => {
        if (password.length < 3) {
            Alert.alert("La contraseña es incorrecta")
            return { success: false }
        }

        setUser({ id: 1, username })

        ToastAndroid.show("✅ Has iniciado sesión con éxito", 300)

        return { success: true }
    }

    return { user, login }
}
