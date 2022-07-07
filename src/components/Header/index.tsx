import React from 'react';
import { RarityProps } from '../../screens/Dashboard';
import { TypeProps } from '../../screens/MasterTools';

import {
    Container,
    Search,
    Input,
    SearchButton,
    Selector,
    Title,
    Icon,
    SelectContainer,
    SelectorContainer
} from './styles';

interface Props {
    rarity: RarityProps
    type: TypeProps
    openModalRarity: () => void;
    openModalType: () => void;
    onChange: (value: string) => void;
}

export function Header({ onChange, rarity, type, openModalRarity, openModalType } : Props) {
    return (
        <Container>
            <SelectContainer>
                <Search>
                    <Input 
                        placeholder="Nome"
                        keyboardType="visible-password"
                        autoCapitalize="words"
                        onChangeText={onChange}
                    />
                    <SearchButton>
                        <Icon name="search" />
                    </SearchButton>
                </Search>
                <SelectorContainer>
                    <Selector
                        onPress={openModalRarity}
                    >
                        <Title>{rarity.name}</Title>
                        <Icon name="chevron-down" />
                    </Selector>
                    <Selector
                        onPress={openModalType}
                    >
                        <Title>{type.name}</Title>
                        <Icon name="chevron-down" />
                    </Selector>
                </SelectorContainer>
            </SelectContainer>
        </Container>
    )
}