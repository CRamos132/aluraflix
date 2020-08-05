import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageRoot from '../../../componentes/PageRoot';
import FormField from '../../../componentes/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../componentes/Button';
import videoRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=ROeA2H-EQ6w&t=0s',
    categoria: 'Front-end',
  });

  const history = useHistory();

  const [listaCategorias, setValues] = useState([]);
  const categoriasTitulos = listaCategorias.map((categoria) => categoria.titulo);
  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setValues(categorias);
      });
  }, []);

  return (
    <PageRoot>
      <h1>Cadastro de vídeos</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const categoriaEscolhida = listaCategorias
          .find((categoria) => categoria.titulo === values.categoria);
        if (categoriaEscolhida) {
          videoRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => { history.push('/'); });
          alert('Cadastrado');
        } else {
          alert('Categoria inválida');
        }
      }}
      >
        <FormField
          label="Nome do vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onchange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onchange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onchange={handleChange}
          sugestoes={categoriasTitulos}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageRoot>
  );
}

export default CadastroVideo;
