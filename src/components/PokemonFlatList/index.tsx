import React from "react"

import { PokemonCard } from "../PokemonCard"

import {
    PokemonContainer,
    PokemonList
} from "./styles"

import { PokemonProps } from "../../screens/Dashboard"

interface Props {
    data: PokemonProps[];
    handleRemoveFavorite?: (id: number) => void;
}

export function PokemonFlatList({ data, handleRemoveFavorite } : Props) {
    return (
        <PokemonContainer>
            <PokemonList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <PokemonCard
                        Pokemon={item}
                        handleRemoveFavorite={handleRemoveFavorite}
                    />
                }
            />
        </PokemonContainer>
    )
}