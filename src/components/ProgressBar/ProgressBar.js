/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Sizes = {
    large:
        {
            padding: 4,
            borderRadius: 8,
            barHeight: 16,
        },
    medium:
        {
            padding: 0,
            borderRadius: 4,
            barHeight: 12,
        },
    small:
        {
            padding: 0,
            borderRadius: 4,
            barHeight: 8,
        }
};

const ProgressBar = ({ value, size }) => {
  const {padding, borderRadius, barHeight} = Sizes[size];
  return (
    <Wrapper padding={padding} borderRadius={borderRadius} role='progressbar' aria-valuenow={value.toString()}>
      <Mask>
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Bar width={value} height={barHeight} />
      </Mask>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${props => props.padding}px;
  border-radius: ${props => props.borderRadius}px;
`

const Mask = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.width}%;
  height: ${props => props.height}px;
`

export default ProgressBar;
