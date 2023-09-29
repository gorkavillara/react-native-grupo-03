import { Switch, Text } from "react-native"
import { useContext } from "react"
import { AppContext } from "../../contexts/AppContextProvider"

const SwitchDarkMode = () => {
    const { darkMode, setDarkMode } = useContext(AppContext)

    return (
        <>
            <Text>Dark Mode Switch</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setDarkMode((prev) => !prev)}
                value={darkMode}
            />
        </>
    )
}

export default SwitchDarkMode
