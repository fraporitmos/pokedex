import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import ItemPokemon from '../components/ItemPokemon'

const Home = nativeStack => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
    
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000")
            .then((resp) =>
                setPokemons(resp.data.results)
            )
    }, [])


    return (
        // <ScrollView style={{flex:1}}>
        //     {
        //         pokemons.map( (pokemon) => (
        //             <ItemPokemon 
        //                 key={pokemon.url}
        //                 name={pokemon.name}
        //             />
        //         ))
        //     }
        // </ScrollView>
        <View>
            <FlatList
                data={pokemons}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ItemPokemon
                        nativeStack ={nativeStack}
                        name={item.name}
                        url={item.url}
                    />
                )} />
        </View>
    )
}

export default Home
