import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const ContainerScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-grow: 1;
  padding-top: 24px;
  background: ${colors.background};
`;
