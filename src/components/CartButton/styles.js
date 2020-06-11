import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const CartButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${colors.black};
  box-shadow: 0px 5px 10px ${colors.shadow};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 50px;
  border-radius: 14px;
  flex: 1;
  margin-left: 10px;
`;

export const CardButtonTxt = styled.Text`
  font-size: 14px;
  padding-right: 10px;
  color: ${colors.white};
`;
