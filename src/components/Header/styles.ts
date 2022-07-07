import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.shape };
    width: 100%;
    height: ${RFPercentage(18)}px;

    flex-direction: row;

    align-items: flex-end;
    justify-content: space-around;

    padding: 14px 1px;
`;

export const Search = styled.View`
    background-color: ${ ({theme}) => theme.colors.primary };

    width: 100%;

    border-radius: 7px;

    padding: 0px 10px;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;

export const Input = styled.TextInput`
    width: 90%;
    height: ${RFValue(30)}px;
`;

export const SearchButton = styled.TouchableOpacity``;

export const Selector = styled.TouchableOpacity`
    background-color: ${ ({theme}) => theme.colors.primary };
    width: 49%;

    height: ${RFValue(30)}px;

    border-radius: 7px;

    padding: 7px;
    padding-left: 10px;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: ${ ({theme}) => theme.colors.secondary };
    font-family: ${({ theme }) => theme.fonts.regular };
`

export const Icon = styled(Feather)`
    color: ${ ({theme}) => theme.colors.secondary };
    font-size: ${RFValue(15)}px;
`;

export const SelectContainer = styled.View`
    width: ${RFValue(330)}px;
    height: ${RFValue(65)}px;
    
    justify-content: space-between;
`

export const SelectorContainer = styled.View`
    flex-direction: row;

    justify-content: space-between !important;
`;