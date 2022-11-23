import axios from 'axios';
const baseUrl = 'https://secret-headland-86569.herokuapp.com/api/school-news';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const noveltieService = { getAll };

export default noveltieService;