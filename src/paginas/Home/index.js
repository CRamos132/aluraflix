import React, { useState, useEffect } from 'react';
import PageRoot from '../../componentes/PageRoot';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState({
    categorias: [],
  });

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((dados) => { setDadosIniciais(dados); })
      .catch((err) => { console.log(err.message); });
  }, []);

  return (
    <PageRoot paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      { dadosIniciais.length >= 1 && dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageRoot>
  );
}

export default Home;
