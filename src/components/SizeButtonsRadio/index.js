import React, { useState } from 'react';
import { sizes } from '../../utils/mocks';
import { SizeButton, SizeButtonTxt, SizesButtonsRadioGroup } from './styles';

const SizeButtonsRadio = ({ onChangeSize }) => {
  const [selectedButton, setSelectedButton] = useState(sizes[0].key);

  return (
    <SizesButtonsRadioGroup>
      {sizes.map((size, index) => (
        <SizeButton
          selectedSize={selectedButton === size.key}
          midle={index === 1}
          onPress={() => {
            setSelectedButton(size.key);
            onChangeSize(size.key);
          }}>
          <SizeButtonTxt selectedSize={selectedButton === size.key}>
            {size.text}
          </SizeButtonTxt>
        </SizeButton>
      ))}
    </SizesButtonsRadioGroup>
  );
};

export default SizeButtonsRadio;
