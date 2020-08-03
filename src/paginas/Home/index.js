import React, { useState, useEffect } from 'react';
import PageRoot from '../../componentes/PageRoot';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import categoriasRepository from '../../repositories';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState({
    categorias: [],
  });

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((dados) => { setDadosIniciais(dados); console.log(dadosIniciais.length); })
      .catch((err) => { console.log(err.message); });
  }, []);

  return (
    <PageRoot>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.length >= 1 && (
      <>
        <BannerMain
          videoTitle={dadosIniciais[0].videos[0].titulo}
          url={dadosIniciais[0].videos[0].url}
          videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais[0]}
        />

        <Carousel
          category={dadosIniciais[1]}
        />

        <Carousel
          category={dadosIniciais[2]}
        />

        <Carousel
          category={dadosIniciais[3]}
        />

        <Carousel
          category={dadosIniciais[4]}
        />

        <Carousel
          category={dadosIniciais[5]}
        />
      </>
      )}

    </PageRoot>
  );
}

export default Home;
