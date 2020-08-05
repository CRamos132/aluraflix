import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoVideo),
  })
    .then(async (resposta) => {
      if (resposta.ok) {
        const dados = await resposta.json();
        return dados;
      }
      throw new Error('Não foi possível realizar esta tarefa');
    });
}

export default { create };
