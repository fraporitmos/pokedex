import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Detail = (nativeStack) => {

    const { params } = nativeStack.route
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(pokemon)
        axios.get(params).then((resp) => {
            setPokemon(resp.data)
            setLoading(true)
        })
    }, [])

    return (
        <>
            {
                loading ?
                    <View style={styles.container} >
                        <Image
                            style={styles.sprite}
                            source={{ uri: pokemon.sprites.other.home.front_default }}
                        />
                        <Text style={styles.textName}>
                            Pokemon
                        </Text>

                        <View style={styles.cardInfo}>
                            <View style={styles.cardItem}>
                                <Text style={styles.textCard}>
                                    Height
                                </Text>
                                <View style={styles.separator} />
                                <Text style={styles.textCard}>
                                    {pokemon.height}
                                </Text>
                            </View>
                            <View style={styles.cardItem}>
                                <Text style={styles.textCard}>
                                    Weight
                                </Text>
                                <View style={styles.separator} />
                                <Text style={styles.textCard}>
                                    {pokemon.weight}
                                </Text>
                            </View>
                            <View style={styles.cardItem}>
                                <Text style={styles.textCard}>
                                    Experi.
                                </Text>
                                <View style={styles.separator} />
                                <Text style={styles.textCard}>
                                    {pokemon.base_experience}
                                </Text>
                            </View>
                            <View style={styles.smallContainer}>
                                <Image
                                    style={styles.spriteSmall}
                                    source={{ uri: pokemon.sprites.front_default }}
                                />
                                <Image
                                    style={styles.spriteSmall}
                                    source={{ uri: pokemon.sprites.back_shiny }}
                                />
                                <Image
                                    style={styles.spriteSmall}
                                    source={{ uri: pokemon.sprites.back_default }}
                                />
                            </View>
                        </View>

                    </View> : <Text>Cargando ...</Text>
            }
        </>



    )
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000000',
    },
    sprite: {
        width: 300,
        height: 300,

    },
    cardInfo: {
        height: '45%',
        width: '90%',
        marginTop: 10,
        backgroundColor: '#C35214',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    separator: {
        height: "100%",
        width: 2,
        backgroundColor: '#FFFFFF'
    },
    textCard: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '700'

    },
    cardItem: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderBlockColor: '#fff',
        padding: 4
    },
    smallContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spriteSmall: {
        width: 100,
        height: 200,

    }
})

export default Detail
