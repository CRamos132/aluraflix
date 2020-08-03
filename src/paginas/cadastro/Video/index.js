import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageRoot from '../../../componentes/PageRoot';

const Wrapper = styled.div`
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function CadastroVideo() {
  return (
    <PageRoot>
      <Wrapper>
        <h1>Cadastro de vídeos</h1>
        <Link to="/cadastro/categoria">
          Cadastrar categoria
        </Link>
      </Wrapper>
    </PageRoot>
  );
}

export default CadastroVideo;
