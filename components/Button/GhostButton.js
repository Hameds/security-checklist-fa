// @flow
import React from 'react';
import * as Styled from './style';
import type { ButtonProps } from './types';

export default function GhostButton(props: ButtonProps) {
  const { children } = props;
  return <Styled.GhostButton {...props}>{children}</Styled.GhostButton>;
}
