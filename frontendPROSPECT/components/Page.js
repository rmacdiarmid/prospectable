import React, { Component } from 'react';
import Header from './Header';
import Meta from '../components/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3a3a3a',
    lightgrey: '#E1E1E1',
    offwhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0,0,0, 0.9)',
};

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: red;
`;

class Page extends Component {
    render() {
        return (
            <StyledPage>
            <Meta />
            <Header />
            <Inner>
            {this.props.children} 
            </Inner>
            </StyledPage>
        );
    }
}

export default Page;