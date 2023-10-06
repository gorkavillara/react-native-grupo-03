import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import { genericStyles } from "../../styles"
import { products } from "../../assets/products"
import Article from "./components/Article"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Details from "../Details/Details"

const ProductStack = createNativeStackNavigator()

const ProductList = () => (
    <View style={genericStyles.container}>
        {/* {products.map((prod) => (
<Article product={prod} key={prod.id} />
))} */}
        <FlatList
            style={{ width: "100%" }}
            numColumns={2}
            data={products}
            renderItem={(product) => (
                <Article product={product.item} key={product.item.id} />
            )}
        />
    </View>
)

const Store = () => {
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen
                name="ProductList"
                component={ProductList}
                options={{ title: "Shop" }}
            />
            <ProductStack.Screen name="Details" component={Details} />
        </ProductStack.Navigator>
    )
}

export default Store

const styles = StyleSheet.create({})
