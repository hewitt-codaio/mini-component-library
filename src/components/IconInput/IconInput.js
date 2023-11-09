import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width,
  size,
  placeholder,
}) => {
  return (
    <Wrapper size={size} width={width}>
      <IconInputWrapper>
        <IconWrapper size={size === 'small' ? 16 : 24} id={'search'}/>
        <Input size={size} placeholder={placeholder}/>
      </IconInputWrapper>
      <Underline size={size} />
    </Wrapper>
  );
};

// ********************************************************************************************
// TODO: Can't seem to get the input to take up the rest of the horizontal space after the icon
// TODO: left, top, bottom margins dictated by size
// ********************************************************************************************
const Input = styled.input`
  width: auto;
  font: inherit;
  border: none;
  margin-left: 12px; 
  margin-bottom: ${props => props.size === 'small' ? 4 : 7}px;
  outline: 0;
`

const Wrapper = styled.div`
  width: ${props => props.width ?? 271}px;
  font-size: ${props => props.size === 'small' ? 14 / 16 : 18 / 16}rem;
  ${Input}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
  }
`

const IconInputWrapper = styled.div`
`

// TODO: Really want to re-interpret size === 'small` as 16 pixels here instead of in top level class
//       However, so far haven't figured out how to pass a prop down to the base class style
const IconWrapper = styled(Icon)`
  display: inline-block;
  margin: auto;
  height: 100%;
`

const Underline = styled.div`
  width: 100%;
  border-style: solid;
  border-width: ${props => props.size === 'small' ? 0.5 : 1}px;
  border-radius: ${props => props.size === 'small' ? 0.5 : 1}px;
  border-color: black;
`

export default IconInput;
