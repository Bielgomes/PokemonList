import React from "react";
import { FlatList } from "react-native";

import {
    Container,
    Header,
    Title,
    RarityItem,
    Text,
    Separetor
} from "./styles";

import { TypeProps } from "../MasterTools";
import { Types } from "../../utils/type";

interface Props {
    type: TypeProps;
    setType: (type: TypeProps) => void;
    closeModal: () => void;
}

export function TypeSelector({ type, setType, closeModal }: Props) {

    function handleTypeSelect(type : TypeProps) {
        setType(type)
        closeModal()
    }

    return (
        <Container>
            <Header>
                <Title>Tipos</Title>
            </Header>
            <FlatList
                data={Types}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => 
                    <RarityItem
                        isActive={item.key === type.key}
                        onPress={() => handleTypeSelect(item)}
                    >
                        <Text>{item.name}</Text>
                    </RarityItem>
                }
                ItemSeparatorComponent={() => <Separetor/>}
            />
        </Container>
    )
}