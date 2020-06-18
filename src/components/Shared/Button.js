import React from 'react';
import styled from '@emotion/styled';

const Button = ({
  children, ...props
}) => (
  <ButtonWrapper {...props}>{children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  border: none;
  font-size: 40px;
  margin: auto;
  transition: box-shadow 0.1s ease;
  outline: none;
  position: relative;
  font-size: 20px;
  `
export default Button
