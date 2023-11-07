import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import icons from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  // return <Icon id={'chevron-down'}></Icon>
  return (
    <Wrapper>
    <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>
    <PresentationalBit>
        {displayedValue}
        <IconWrapper>
            <Icon id='chevron-down' strokeWidth={2} size={24}/>
        </IconWrapper>
    </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
`

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: min-content;
  pointer-events: none;
`

export default Select;
