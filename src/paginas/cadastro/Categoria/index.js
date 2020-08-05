import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageRoot from '../../../componentes/PageRoot';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = { titulo: '', descricao: '', cor: '' };

  const history = useHistory();

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [listaCategorias, setValues] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setValues(categorias);
      });
  }, []);

  return (
    <PageRoot>
      <h1>
        Cadastro de caregoria:
        {values.titulo}
      </h1>

      <form onSubmit={function inserirCategoria(e) {
        e.preventDefault();
        setValues([...listaCategorias, values]);
        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
        })
          .then(() => { history.push('/'); });
        alert('Cadastrado');
        clearForm();
      }}
      >

        <FormField
          label="Nome da categoria:"
          type="text"
          name="titulo"
          value={values.titulo}
          onchange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onchange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onchange={handleChange}
        />

        <Button>Cadastrar</Button>
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
