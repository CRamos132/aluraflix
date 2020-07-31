import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageRoot from '../../../componentes/PageRoot';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';

function CadastroCategoria() {
  const valoresIniciais = { nome: '', descricao: '', cor: '' };

  const [listaCategorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState(valoresIniciais);

  function inserirCategoria(e) {
    e.preventDefault();
    setCategorias([...listaCategorias, novaCategoria]);
    setNovaCategoria(valoresIniciais);
  }
  function categoriaHandler(evento) {
    const { name, value } = evento.target;

    setNovaCategoria({
      ...novaCategoria,
      [name]: value,
    });
  }
  useEffect(() => {
    const url = 'http://localhost:8080/categorias';
    fetch(url)
      .then(async (resposta) => {
        const dados = await resposta.json();
        setCategorias([...dados]);
      });
  }, []);

  return (
    <PageRoot>
      <h1>
        Cadastro de caregoria:
        {novaCategoria.nome}
      </h1>

      <form onSubmit={inserirCategoria}>

        <FormField
          label="Nome da categoria:"
          type="text"
          name="nome"
          value={novaCategoria.nome}
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
        {listaCategorias.map((cat, index) => (<li key={index}>{cat.nome}</li>))}
      </ul>
      <Link to="/">
        Voltar ao início
      </Link>
    </PageRoot>
  );
}

export default CadastroCategoria;
