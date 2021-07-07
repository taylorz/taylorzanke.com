import React from 'react';
import styled from 'styled-components'

const StyledText = styled.span`
  font-family: ${(props) => props.bold ? props.theme.text.fontFamilySemibold
    : props.theme.text.fontFamily
  };
  font-size: ${({ theme }) => theme.text.fontSize}px;
  line-height: ${({ theme }) => theme.text.lineHeight}px;
  color: ${(props) => props.lightened ? props.theme.color.primary
    : props.theme.color.primary
  };
  display: ${(props) => props.p ? "block" : "inline"};
  margin-bottom: ${(props) => props.p ? props.theme.text.lineHeight
    : 0
  }px;
  text-align: ${props => props.center && "center"};
  &:hover {
    color: ${(props) => props.hoverable && props.theme.color.secondary};
    cursor: ${(props) => props.hoverable && "pointer"}
  }
`;

const Text = ({ children, ...props }) => {
  return (
    <StyledText {...props}>{children}</StyledText>
  )
}

export default Text
