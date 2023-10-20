import * as Location from "expo-location"
import { useState, useEffect } from "react"
import { PoiClickEvent, LatLng, Point } from "react-native-maps"

interface PoiMarker {
    placeId: string;
    name: string;
    coordinate: LatLng;
    position?: Point | undefined;
}

export const useLocation = () => {
    const [poiMarker, setPoiMarker] = useState<PoiMarker | null>(null)
    const [currentPosition, setCurrentPosition] =
        useState<Location.LocationObject | null>(null)
    const [realTimePosition, setRealTimePosition] =
        useState<Location.LocationObject | null>(null)

    useEffect(() => {
        Location.getCurrentPositionAsync().then((pos) =>
            setCurrentPosition(pos)
        )
    }, [])

    useEffect(() => {
        const interval = setInterval(
            () =>
                Location.getCurrentPositionAsync().then((pos) =>
                    setRealTimePosition(pos)
                ),
            5000
        )

        return () => clearInterval(interval)
    }, [])

    const poiClickHandler = (event: PoiClickEvent) => {
        // console.log(event.nativeEvent)
        setPoiMarker(event.nativeEvent)
    }

    return { currentPosition, realTimePosition, poiClickHandler, poiMarker }
}
