import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import { genericStyles } from "../../styles"
import { products } from "../../assets/products"
import Article from "./components/Article"

const Store = () => {
    return (
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
}

export default Store

const styles = StyleSheet.create({})
