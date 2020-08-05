import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (resposta) => {
      if (resposta.ok) {
        const dados = await resposta.json();
        return dados;
      }
      throw new Error('Não foi possível realizar esta tarefa');
    });
}

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (resposta) => {
      if (resposta.ok) {
        const dados = await resposta.json();
        return dados;
      }
      throw new Error('Não foi possível realizar esta tarefa');
    });
}

function create(objetoCategoria) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoCategoria),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const dados = await resposta.json();
        return dados;
      }
      throw new Error('Não foi possível realizar esta tarefa');
    });
}

export default { getAllWithVideos, getAll, create };
