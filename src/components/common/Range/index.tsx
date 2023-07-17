import styled from 'styled-components';
import React, {useState, useId, useMemo} from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const _label = styled.label`
  margin-end: 1em;
`;
export default function Range({
  label = '',
  className = '',
  onChange = (e) => {},
  min = 0,
  max = 100,
  value = 0,
}) {
  const [id] = useState(useId());
  const [_value, setValue] = useState(value);
  useMemo(() => {
    onChange(_value);
  }, [_value]);
  return (
    <Container className={className}>
      {label && (
        <_label htmlFor={id} className='form-label'>
          {label}
        </_label>
      )}
      <input
        type='range'
        value={_value}
        min={min}
        max={max}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className='form-range'
        id={id}
      />
    </Container>
  );
}
