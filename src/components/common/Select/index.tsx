import {styled} from 'styled-components';
import React, {useState, useId} from 'react';

const _wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const _label = styled.label`
  margin-end: 1em;
`;
const _select = styled.select``;
const _option = styled.option``;

function Select({
  options,
  onChange,
  value,
  name = 'Select:',
}: {
  options: {value: string; label: string}[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  name?: string;
}) {
  const [id] = useState(useId());
  return (
    <_wrapper>
      <_label htmlFor='id'>{name}</_label>
      <_select
        id={id}
        name={name}
        value={value}
        aria-label={name}
        onChange={(e) => {
          const val: any = e.target.value;
          onChange(val);
        }}
        className='form-select'>
        {options.map(
          (opt, i): React.ReactElement => (
            <_option selected={opt.value == value} key={i} value={opt.value}>
              {opt.label}
            </_option>
          )
        )}
      </_select>
    </_wrapper>
  );
}

export default Select;
