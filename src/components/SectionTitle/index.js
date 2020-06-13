import React from 'react';
import { Container, DecorLine, SectionTitleTxt } from './styles';

const SectionTitle = ({ title }) => {
  return (
    <Container>
      <SectionTitleTxt>{title}</SectionTitleTxt>
      <DecorLine />
    </Container>
  );
};

export default SectionTitle;
