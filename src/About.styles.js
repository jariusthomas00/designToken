import styled from 'styled-components';
import * as tokens from './build/js/variables';

const Box = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: `100vh`,
  margin: `10px auto 0`,
  padding: `10px`,
  backgroundColor: tokens.ColorsPrimary,
  fontSize: tokens.FontSizesH2,
  borderRadius: '10px'
});

const Media = styled.img`
  flex: 0 0 auto;
  display: block;
  width: 100px;
  height: 100px;
`;

const Heading = styled.h1({
  color: tokens.ColorsTertiary,
  fontSize: tokens.FontSizesH1
})
const Text = styled.div({
  fontSize: tokens.FontSizesH6,
  textAlign: 'left',
  color: tokens.ColorsSecondary,
});
const Description = styled.div({
  fontSize: tokens.FontSizesH5,
  textAlign: 'center',
  color: tokens.ColorsSecondary,
});

const Reference = styled.p({
  margin: 0,
});

const Link = styled.a({
  color: tokens.ColorsTertiary,
});

export {
    Box,
    Media,
    Link,
    Reference,
    Description,
    Text,
    Heading
}