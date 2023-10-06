import {
    Pressable,
    StyleSheet,
    Text,
    View,
    ImageBackground
} from "react-native"
import { BlurView } from "expo-blur"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { genericStyles } from "../../styles"
import { StackScreensType } from "../../navigation/stacks/StoreStack"

const Home = ({
    navigation,
    route
}: NativeStackScreenProps<StackScreensType, "Home">) => {
    console.log(navigation)
    return (
        <ImageBackground
            source={require("../../assets/homeBg.jpg")}
            style={genericStyles.container}
        >
            <BlurView intensity={20} style={[genericStyles.container, { width: "100%", backgroundColor: "#0007", gap: 32 }]}>
                <Text style={[genericStyles.titulo, styles.whiteText]}>Home</Text>
                <Pressable onPress={() => navigation.navigate("Store")} style={styles.button}>
                    <Text>Ir a la store</Text>
                </Pressable>
            </BlurView>
        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 32
    },
    whiteText: {
        color: "white"
    }
})
