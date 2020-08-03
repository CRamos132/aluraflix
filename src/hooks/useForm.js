import { useState } from 'react';

export function useForm(valoresIniciais) {
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

  return {
    novaCategoria,
    categoriaHandler,
    clearForm,
  };
}

export default useForm;
