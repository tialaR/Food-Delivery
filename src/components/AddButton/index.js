import React, { useState } from 'react';
import { Add, AddTxt, Container, Decrease, DecreaseTxt, Value, ValueTxt } from './styles';

const AddButton = () => {
  const [addDecrease, setAddDecrease] = useState(1);

  return (
    <Container>
      <Decrease
        onPress={() => setAddDecrease(addDecrease !== 1 ? addDecrease - 1 : 1)}>
        <DecreaseTxt>-</DecreaseTxt>
      </Decrease>
      <Value>
        <ValueTxt>{addDecrease}</ValueTxt>
      </Value>
      <Add
        onPress={() =>
          setAddDecrease(addDecrease < 50 ? addDecrease + 1 : addDecrease)
        }>
        <AddTxt>+</AddTxt>
      </Add>
    </Container>
  );
};

export default AddButton;
