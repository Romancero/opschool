import axios from 'axios';
const baseUrl = 'https://secret-headland-86569.herokuapp.com/api/pages';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const pageService = { getAll };

export default pageService;