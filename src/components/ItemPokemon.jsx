import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ItemPokemon = ({ name, url, nativeStack }) => {
    return (
        <TouchableOpacity
            onPress={() => nativeStack.navigation.navigate("DetailScreen",url)}
            style={styles.container}>
            <Image
                style={styles.pokedex}
                source={{ uri: 'https://res.cloudinary.com/dokwcwo9t/image/upload/v1699121555/idat/pokedex-removebg-preview_ifoeiw.png' }}
            />
            <Text style={styles.text}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#b3b3b3b3'
    },
    pokedex: {
        width: 50,
        height: 50
    },
    text: {
        color: '#000000',
        fontSize: 20,
        marginLeft: 12,
        fontWeight: '800'
    }
})

export default ItemPokemon
