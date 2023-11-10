import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  return (
      <Wrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper size={size}>
          <Icon id={icon} size={size === 'small' ? 16 : 24} />
        </IconWrapper>
        <Input size={size} width={width} {...delegated} />
      </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

// TODO: Really want to re-interpret size === 'small` as 16 pixels here instead of in top level class
//       However, so far haven't figured out how to pass a prop down to the base class style
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: ${props => props.size === 'small' ? 16 : 24}px;
  margin: auto 0;
`;

// ********************************************************************************************
// TODO: Can't seem to get the input to take up the rest of the horizontal space after the icon
// TODO: left, top, bottom margins dictated by size
// ********************************************************************************************
const Input = styled.input`
  width: auto;
  font: inherit;
  font-size: ${props => props.size === 'small' ? 14 / 16 : 18 / 16}rem;
  font-weight: 700;
  padding-left: 36px; 
  height: ${props => props.size === 'small' ? 24 / 16 : 36 / 16}rem;
  color: inherit;
  border: none;
  border-bottom: ${props => props.size === 'small' ? 1 : 2}px solid ${COLORS.black};
  outline-offset: 2px;
  outline-width: ${props => props.size === 'small' ? 1 : 2}px;
  width: ${props => props.width}px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Underline = styled.div`
  width: 100%;
  border-style: solid;
  border-width: ${props => props.size === 'small' ? 0.5 : 1}px;
  border-radius: ${props => props.size === 'small' ? 0.5 : 1}px;
  border-color: black;
`;

export default IconInput;
