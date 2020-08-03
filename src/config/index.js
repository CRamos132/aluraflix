const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://heitor-flix.herokuapp.com';

export default { URL };
