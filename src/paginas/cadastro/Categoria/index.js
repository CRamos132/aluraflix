import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageRoot from '../../../componentes/PageRoot';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';

function useForm(valoresIniciais) {
  const [novaCategoria, setNovaCategoria] = useState(valoresIniciais);

  function categoriaHandler(evento) {
    const { name, value } = evento.target;

    setNovaCategoria({
      ...novaCategoria,
      [name]: value,
    });
  }

  function clearForm() {
    setNovaCategoria(valoresIniciais);
  }

  return (
    novaCategoria,
    categoriaHandler,
    clearForm
  );
}

function CadastroCategoria() {
  const [listaCategorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://heitor-flix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (resposta) => {
        const dados = await resposta.json();
        setCategorias([...dados]);
      });
  }, []);

  const valoresIniciais = { titulo: '', descricao: '', cor: '' };

  const { categoriaHandler, novaCategoria, clearForm } = useForm(valoresIniciais);

  return (
    <PageRoot>
      <h1>
        Cadastro de caregoria:
        {novaCategoria.titulo}
      </h1>

      <form onSubmit={function inserirCategoria(e) {
        e.preventDefault();
        setCategorias([...listaCategorias, novaCategoria]);
        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria:"
          type="text"
          name="titulo"
          value={novaCategoria.titulo}
          onchange={categoriaHandler}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={novaCategoria.descricao}
          onchange={categoriaHandler}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={novaCategoria.cor}
          onchange={categoriaHandler}
        />

        <Button as="a">Cadastrar</Button>
      </form>
      <ul>
        {listaCategorias.map((cat, index) => (<li key={index}>{cat.titulo}</li>))}
      </ul>
      <Link to="/">
        Voltar ao início
      </Link>
    </PageRoot>
  );
}

export default CadastroCategoria;
