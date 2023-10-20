import { StyleSheet, View, TouchableOpacity } from "react-native"
import Constants from "expo-constants"
import { genericStyles } from "../../styles"
import { useNavigation } from "@react-navigation/native"
import MapView, { Marker, Overlay } from "react-native-maps"
import { useLocation } from "../../hooks/useLocation"

const [latitude, longitude] = [43.334644, -1.933932]

const MapsScreen = () => {
    const navigation = useNavigation()
    const { currentPosition, realTimePosition, poiClickHandler, poiMarker } =
        useLocation()

    return (
        <MapView
            style={[genericStyles.container, styles.map]}
            onPoiClick={poiClickHandler}
        >
            <Marker
                coordinate={{ latitude, longitude }}
                title="Faro de la plata"
                description="Este es el faro de la plata"
                pinColor="#a4f"
                // icon={require("../../assets/markerIcon.png")}
                // anchor={{ x: -0.1, y: -0.1 }}
            />
            {realTimePosition && (
                <Marker
                    coordinate={realTimePosition.coords}
                    title="Posición actual"
                    description="Esta es mi posición actual"
                    pinColor="#00f"
                />
            )}
            {poiMarker && (
                <Marker
                    coordinate={poiMarker.coordinate}
                    title={poiMarker.name}
                    isPreselected={true}
                />
            )}
            {/* <Overlay>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={navigation.goBack}
                    >
                        <Icon name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </Overlay> */}
        </MapView>
    )
}

export default MapsScreen

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
        padding: 24,
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    cameraButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    button: {
        backgroundColor: "#fff6",
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40
    }
})
