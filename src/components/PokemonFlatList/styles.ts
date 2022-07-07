import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

import { FlatList } from 'react-native';

import { PokemonProps } from '../../screens/Dashboard';

export const PokemonContainer = styled.View`
    margin-top: 20px;
    margin-bottom: ${RFValue(100)}px;
`;

export const PokemonList = styled(FlatList as new () => FlatList<PokemonProps>).attrs({
    showsVerticalScrollIndicator: false,
    initialNumToRender: 5
})``;