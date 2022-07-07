import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({ theme }) => theme.colors.background };

    align-items: center;
`;
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(15)}px;
    background-color: ${ ({ theme }) => theme.colors.foreground };
    justify-content: flex-end;
    align-items: center;

    padding: 15px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${ ({ theme }) => theme.fonts.bold };
    color: ${ ({ theme }) => theme.colors.white };
`;

export const Text = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${ ({ theme }) => theme.fonts.regular };
`;

export const Content = styled.View`
    flex-direction: row;
    align-self: center;
`;

export const ComboBox = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;

    background-color: ${ ({ theme }) => theme.colors.white };
    border-radius: 7px;

    padding: 10px;

    justify-content: space-between;

    margin: 10px;

    width: 40%;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${ ({ theme }) => theme.colors.favorite };
    border-radius: 7px;

    width: ${RFValue(300)}px;

    align-items: center;
    justify-content: center;

    margin-bottom: 10px;

    padding: 10px;

    align-self: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
    flex: 1;
    width: 100%;

    justify-content: space-between;
`;