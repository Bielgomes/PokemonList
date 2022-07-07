import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface TypeProps {
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    height: ${RFValue(80)}px;
    padding: ${RFValue(10)}px;

    background-color: ${({ theme }) => theme.colors.foreground};

    align-items: center;
    justify-content: flex-end;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold };
    color: ${({ theme }) => theme.colors.white};

    font-size: ${RFValue(25)}px;
`;

export const RarityItem = styled.TouchableOpacity<TypeProps>`
    width: 100%;
    height: ${RFValue(60)}px;

    background-color: ${({ theme, isActive }) => isActive ? theme.colors.title : theme.colors.shape };

    justify-content: center;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular };
    padding: 10px;
`;

export const Separetor = styled.View`
    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.secondary };
`;