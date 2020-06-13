import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  padding-left: 32px;
  align-self: flex-start;
`;

export const SectionTitleTxt = styled.Text`
  font-size: 22px;
  color: ${colors.black};
`;

export const DecorLine = styled.View`
  width: 40px;
  height: 4px;
  border-radius: 3px;
  margin-top: 6px;
  align-self: flex-end;
  background-color: ${colors.primary};
`;
