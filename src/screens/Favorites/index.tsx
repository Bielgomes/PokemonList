import React, { useState, useCallback } from "react"

import { useFocusEffect } from "@react-navigation/native";
import { Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PokemonFlatList } from "../../components/PokemonFlatList";
import { Header } from "../../components/Header";
import { RaritySelector } from "../RaritySelector";
import { TypeSelector } from "../TypeSelector";

import { Pokemons } from "../../utils/pokemons";

import { TypeProps } from "../MasterTools";
import { PokemonProps, RarityProps } from "../Dashboard";

import {
    Container
} from "./styles"

export function Favorites() {
    const key = "@pokeRPG:favorites"
    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

    const [rarity, setRarity] = useState<RarityProps>({
        key: 'rarity',
        name: 'Raridade'
    });
    
    const [type, setType] = useState<TypeProps>({
        key: 'type',
        name: 'Tipo',
        color: '#FFF',
        TextColor: '#000'
    });

    const [modalVisibleRarity, setModalVisibleRarity] = useState(false);
    const [modalVisibleType, setModalVisibleType] = useState(false);

    const [pokemonName, setPokemonName] = useState('')

    function handleRemoveFavorite(id : number) {
        setPokemons(pokemons.filter(pokemon => pokemon.id !== id));
    }

    async function getFavorites() {
        const favorites = await AsyncStorage.getItem(key)
        const favoritesFormatted = favorites ? JSON.parse(favorites) : []

        setPokemons(Pokemons.filter(pokemon => favoritesFormatted.includes(pokemon.id)))
        
        return
    }

    function openModalRarity() {
        setModalVisibleRarity(true);
    }

    function closeModalRarity() {
        setModalVisibleRarity(false);
    }

    function openModalType() {
        setModalVisibleType(true);
    }

    function closeModalType() {
        setModalVisibleType(false);
    }

    useFocusEffect(useCallback(() => {
        getFavorites()
    }, []))

    return (
        <Container>
            <Header
                onChange={setPokemonName}
                rarity={rarity}
                type={type}
                openModalRarity={openModalRarity}
                openModalType={openModalType}
            />
            <PokemonFlatList
                data={pokemons.filter(pokemon =>
                    (rarity.key !== 'rarity' ? pokemon.rarity === rarity.key : true) && (type.key !== 'type' ? pokemon.types.includes(type.key) : true) && (pokemonName !== '' ? pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()) : true)
                )}
                handleRemoveFavorite={handleRemoveFavorite}
            />
            <Modal 
                visible={modalVisibleRarity}
            >
                <RaritySelector
                    rarity={rarity}
                    setRarity={setRarity}
                    closeModal={closeModalRarity}
                />
            </Modal>
            <Modal
                visible={modalVisibleType}
            >
                <TypeSelector
                    type={type}
                    setType={setType}
                    closeModal={closeModalType}
                />
            </Modal>
        </Container>
    )
}