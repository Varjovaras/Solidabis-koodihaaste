import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/restaurants/';

const getAll = async (city: string) => {
  const request = await axios.get(baseUrl + city);
  return request.data;
};

export default { getAll };
