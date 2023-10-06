import { StyleSheet, Text, View } from "react-native"
import {
    useRoute,
    RouteProp,
    useNavigation,
    NavigationProp
} from "@react-navigation/native"
import React from "react"
import Article from "../Store/components/Article"
import { StackScreensType } from "../../navigation/stacks/StoreStack"

const Details = () => {
    const route = useRoute<RouteProp<StackScreensType, "Details">>()
    const navigation =
        useNavigation<NavigationProp<StackScreensType, "Details">>()

    const { product } = route.params
    navigation.setOptions({
        title: product.title
    })
    console.log(product)
    return (
        <View style={{ flex: 1 }}>
            <Article product={product} />
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})
