import styled from 'styled-components/native';

import { FontAwesome } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
    color: string;
    textColor: string;
}

interface FavoriteProps {
    isFavorite: boolean;
}

interface RarityProps {
    backgroundColor: string;
}

export const Container = styled.View`
    background-color: ${ ({ theme }) => theme.colors.white };

    margin: 0px 25px;
    margin-bottom: 15px;

    border-radius: 7px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.bold };
    color: ${ ({ theme }) => theme.colors.title };
`;

export const Favorite = styled.TouchableOpacity``;

export const Icon = styled(FontAwesome)<FavoriteProps>`
    font-size: ${RFValue(25)}px;
    color: ${ ({ theme, isFavorite }) => isFavorite ? theme.colors.favorite : theme.colors.title };

    margin-left: 10px;
`;

export const Footer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const TypesList = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Type = styled.Text<TypeProps>`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold };
    color: ${ ({ textColor }) => textColor };
    
    background-color: ${ ({ color }) => color };

    padding: 0px 6px;

    border-radius: 7px;

    margin: 5px;
`;

export const Photo = styled.Image`
    width: ${RFValue(200)}px;
    height: ${RFValue(200)}px;
`;

export const Rarity = styled.View<RarityProps>`
    background-color: ${ ({ backgroundColor }) => backgroundColor };
    border-bottom-left-radius: 7px;
    border-top-right-radius: 7px;

    align-self: flex-start;
    padding: 0px 10px;
`;

export const RarityName = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold };
    color: ${ ({ theme }) => theme.colors.white };
`;