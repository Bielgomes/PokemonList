import React, { useState } from 'react';
import { useIsFocused  } from '@react-navigation/native';
import { Modal } from 'react-native';

import { Header } from '../../components/Header';
import { RaritySelector } from '../RaritySelector';
import { TypeSelector } from '../TypeSelector';
import { PokemonFlatList } from '../../components/PokemonFlatList';

import { Pokemons } from '../../utils/pokemons';

import { TypeProps } from '../MasterTools';

import {
    Container
} from './styles';

export interface RarityProps {
    name: string;
    key: string;
}

export interface PokemonProps {
    id: number;
    name: string;
    rarity: string
    types: string[];
    image: string;
}

export function Dashboard() {
    const isFocused = useIsFocused();

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

    const [pokemonName, setPokemonName] = useState('');

    const [pokemons, setPokemons] = useState<PokemonProps[]>(Pokemons); 

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

    if (!isFocused) {
        return (
            <>
            </>
        )
    }

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