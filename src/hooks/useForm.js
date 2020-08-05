import { useState } from 'react';

export function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function handleChange(evento) {
    const { name, value } = evento.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
