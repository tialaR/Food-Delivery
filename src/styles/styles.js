import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors } from './colors';

export const RowSpace = styled.View`
  height: 20px;
`;

export const HeaderImage = styled.Image.attrs({
  source: require('../assets/pizza-logo.png'),
  resizeMode: 'contain',
})`
  width: 30px;
  height: 30px;
  transform: rotate(-30deg);
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-weight: ${Platform.OS === 'android' ? 'bold' : '900'};
  color: ${colors.black};
  margin-left: 6px;
`;
