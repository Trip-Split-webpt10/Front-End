import React from 'react';
import styled from 'styled-components';

const HeaderH1 = styled.p`
    font-size: 3rem;
    text-align: center;
    font-family: 'Libre Franklin', sans-serif;
    margin-top: 5%;
`;

function Header() {
  return (
    <HeaderH1>About Us</HeaderH1>
  );
}

export default Header;