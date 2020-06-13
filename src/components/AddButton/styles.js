import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 14px;
  width: 110px;
  height: 50px;
  box-shadow: 0px 5px 10px ${colors.shadow};
`;

export const Add = styled.TouchableOpacity`
  width: 40px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const AddTxt = styled.Text`
  font-size: 20px;
  color: ${colors.grayDark};
`;

export const Value = styled.View`
  width: 30px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ValueTxt = styled.Text`
  font-size: 16px;
  color: ${colors.grayDark};
  font-weight: 600;
`;

export const Decrease = styled.TouchableOpacity`
  width: 40px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const DecreaseTxt = styled.Text`
  font-size: 20px;
  color: ${colors.grayDark};
`;
