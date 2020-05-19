import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from '../components/Meta';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3a3a3a',
    lightGrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0,0,0, 0.9)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.offWhite};
`;

const GlobalStyle = createGlobalStyle`
  html {
     box-sizing: border-box;
     font-size: 10px;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }
  body {
      padding: 100px;
      margin: 100px;
      font-size: 1.5rem;
  }
`;

class Page extends Component {
    render() {
        return (
           <ThemeProvider theme={theme}>
              <StyledPage>
                <Meta />
                <Header />
                <Inner>{this.props.children} 
                </Inner>
              </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;