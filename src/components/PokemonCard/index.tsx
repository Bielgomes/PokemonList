import React, { useEffect } from "react";

import {
    Container,
    Header,
    Title,
    Favorite,
    Icon,
    Footer,
    TypesList,
    Type,
    Photo,
    Rarity,
    RarityName
} from "./styles"

import { PokemonProps } from "../../screens/Dashboard";
import { Types } from "../../utils/type";
import { Raritys } from "../../utils/rarity";

import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
    Pokemon: PokemonProps;
    handleRemoveFavorite?: (id: number) => void;
}

export function PokemonCard({ Pokemon, handleRemoveFavorite } : Props) {
    const [favorite, setFavorite] = React.useState(false);

    const key = "@pokeRPG:favorites"

    async function handleFavorite(id : number) {

        if (id === 0) {
            return
        }

        const data = await AsyncStorage.getItem(key);

        const currentData = data ? JSON.parse(data) : []

        if (!currentData.includes(id)) {
            const dataFormatted = [...currentData, id]
            await AsyncStorage.setItem(key, JSON.stringify(dataFormatted))
            setFavorite(true)
        } else {
            const dataFormatted = currentData.filter(item => item !== id)
            await AsyncStorage.setItem(key, JSON.stringify(dataFormatted))
            setFavorite(false)

            if (handleRemoveFavorite) {
                handleRemoveFavorite(id)
            }
        }
    }

    useEffect(() => {
        async function getFavorites() {
            const favorites = await AsyncStorage.getItem(key)
            const favoritesFormatted = favorites ? JSON.parse(favorites) : []

            if (favoritesFormatted.includes(Pokemon.id)) {
                setFavorite(true)
            } else {
                setFavorite(false)
            }
        }

        getFavorites()
    }, [Pokemon])

    return (
        <Container>
            <Header>
                <Title>
                    {Pokemon.name.toUpperCase()}
                </Title>
                <Favorite
                    onPress={() => handleFavorite(Pokemon.id)}
                >
                    <Icon
                        name={favorite ? "heart" : "heart-o"}
                        isFavorite={favorite}
                    />
                </Favorite>
            </Header>

            <Footer>
                <TypesList>
                    {Pokemon.types.map(type => (
                        <Type
                            key={type} 
                            color={Types.filter(t => t.key === type)[0].color}
                            textColor={Types.filter(t => t.key === type)[0].TextColor}
                        >
                            {Types.filter(t => t.key === type)[0].name.toUpperCase()}
                        </Type>
                    ))}
                </TypesList>
                <Photo
                    source={{uri: `${Pokemon.image}`}}
                />
                <Rarity
                    backgroundColor={Raritys.filter(r => r.key === Pokemon.rarity)[0].color}
                >
                    <RarityName>
                        {Raritys.filter(r => r.key === Pokemon.rarity)[0].name.toUpperCase()}
                    </RarityName>
                </Rarity>
            </Footer>
        </Container>
    )
}