import React from "react";
import { FlatList } from "react-native";

import { Raritys } from "../../utils/rarity";

import { RarityProps } from '../Dashboard'

import {
    Container,
    Header,
    Title,
    RarityItem,
    Text,
    Separetor
} from './styles'

interface Props {
    rarity: RarityProps;
    setRarity: (rarity: RarityProps) => void;
    closeModal: () => void;
}

export function RaritySelector({ rarity, setRarity, closeModal }: Props) {

    function handleRaritySelect(rarity : RarityProps) {
        setRarity(rarity)
        closeModal()
    }

    return (
        <Container>
            <Header>
                <Title>Raridade</Title>
            </Header>
            <FlatList
                data={Raritys}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => 
                    <RarityItem
                        isActive={item.key === rarity.key}
                        onPress={() => handleRaritySelect(item)}
                    >
                        <Text>{item.name}</Text>
                    </RarityItem>
                }
                ItemSeparatorComponent={() => <Separetor/>}
            />
        </Container>
    )
}