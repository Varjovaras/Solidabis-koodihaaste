const restaurantUrl = 'http://localhost:8080/api/v1/restaurants/';
const voteUrl = 'http://localhost:8080/api/v1/vote/';
const resultUrl = 'http://localhost:8080/api/v1/results/';

async function getRestaurants(city: string) {
  const response = await fetch(restaurantUrl + city, {
    credentials: 'include',
  });
  console.log(response);
  return response.json();
}
const postVote = async (id: string) => {
  return fetch(voteUrl + id, {
    method: 'POST',
    mode: 'no-cors',
    credentials: 'include',
  });
};

const getResults = async () => {
  const response = await fetch(resultUrl);
  console.log(response);
  return response.json();
};

//yyyy-mm-dd
const getDayResults = async (date: string) => {
  const response = await fetch(resultUrl + date);
  console.log(response);
  return response.json();
};

const restaurantService = {
  getRestaurants,
  postVote,
  getResults,
  getDayResults,
};
export default restaurantService;
