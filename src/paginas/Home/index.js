import React from 'react';
import PageRoot from '../../componentes/PageRoot'
import dadosIniciais from '../../dados/dados_iniciais.json'
import BannerMain from '../../componentes/BannerMain'
import Carousel from '../../componentes/Carousel'

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <PageRoot>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />      

        <Carousel
          category={dadosIniciais.categorias[3]}
        />      

        <Carousel
          category={dadosIniciais.categorias[4]}
        />      

        <Carousel
          category={dadosIniciais.categorias[5]}
        />      

      </PageRoot>
    </div>
  );
}

export default Home;
