/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const Component = Sizes[size];
  return <Component role='progressbar' aria-valuenow={value.toString()}><Mask><Indicator width={value}/></Mask></Component>;
};

const Base = styled.div`
  background-color: ${COLORS.transparentGray15};
  overflow: hidden;
`

const Large = styled(Base)`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`

const Medium = styled(Base)`
  height: 12px;
  border-radius: 4px;
`

const Small = styled(Base)`
  height: 8px;
  border-radius: 4px;
`

const Sizes = {large: Large, medium: Medium, small: Small};

const Mask = styled.div`
  height: 16px;
  border-radius: 4px;
  overflow: hidden;
`

const Indicator = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${props => props.width}%;
`

export default ProgressBar;
