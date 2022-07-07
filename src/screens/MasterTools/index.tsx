import { useIsFocused } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal } from "react-native";

import { PokemonCard } from "../../components/PokemonCard";
import { Pokemons } from "../../utils/pokemons";
import { RaritySelector } from "../RaritySelector";
import { TypeSelector } from "../TypeSelector";

import { PokemonProps, RarityProps } from "../Dashboard";

import {
    Container,
    Header,
    Title,
    Text,
    Content,
    ComboBox,
    Button,
    Icon,
    Footer
} from "./styles";

export interface TypeProps {
    name: string;
    key: string;
    color: string;
    TextColor: string;
}

export function MasterTools() {
    const isFocused = useIsFocused()

    const [pokemon, setPokemon] = useState<PokemonProps>({
        "id": 1,
        "name": "bulbasaur",
        "rarity": "common",
        "types": [
            "grass",
            "poison"
        ],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    });

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

    const [modalType, setModalType] = useState(false);
    const [modalRarity, setModalRarity] = useState(false);

    function closeModalType() {
        setModalType(false);
    }

    function openModalType() {
        setModalType(true);
    }

    function closeModalRarity() {
        setModalRarity(false);
    }

    function openModalRarity() {
        setModalRarity(true);
    }

    function handleError() {
        setPokemon({
            "id": 0,
            "name": "Não existente",
            "rarity": "rarity",
            "types": [],
            "image": "none.png"
        })
    }

    function handleGeneratePokemon() {

        if (rarity.key === 'rarity' && type.key === 'type') {
            setPokemon(Pokemons[Math.floor(Math.random() * Pokemons.length)]);
        } else if (rarity.key !== 'rarity' && type.key === 'type') {
            const pokemonList = Pokemons.filter(pokemon => pokemon.rarity === rarity.key)
            setPokemon(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
        } else if (rarity.key === 'rarity' && type.key !== 'type') {
            const pokemonList = Pokemons.filter(pokemon => pokemon.types.includes(type.key))
            setPokemon(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
        } else {
            const pokemonList = Pokemons.filter(pokemon => pokemon.rarity === rarity.key && pokemon.types.includes(type.key))

            if (pokemonList.length === 0) {
                handleError()
            } else {
                setPokemon(pokemonList[Math.floor(Math.random() * pokemonList.length)]);
            }
        }
    }

    if (!isFocused) {
        return (
            <>
            </>
        )
    }

    return (
        <Container>
            <Header>
                <Title>Master Tools</Title>
            </Header>
            <Footer>
                <Content>
                    <ComboBox
                        onPress={openModalRarity}
                    >
                        <Text>{rarity.name}</Text>
                        <Icon name="chevron-down"/>
                    </ComboBox>
                    <ComboBox
                        onPress={openModalType}
                    >
                        <Text>{type.name}</Text>
                        <Icon name="chevron-down"/>
                    </ComboBox>
                </Content>
                <PokemonCard
                    Pokemon={pokemon}
                />
                <Button
                    onPress={handleGeneratePokemon}
                >
                    <Text>Gerar</Text>  
                </Button>
            </Footer>
            <Modal visible={modalRarity}>
                <RaritySelector
                    rarity={rarity}
                    setRarity={setRarity}
                    closeModal={closeModalRarity}
                />
            </Modal>
            <Modal visible={modalType}>
                <TypeSelector
                    type={type}
                    setType={setType}
                    closeModal={closeModalType}
                />
            </Modal>
        </Container>
    )
}