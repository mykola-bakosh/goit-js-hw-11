import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const myApiKey = import.meta.env.VITE_PIXABAY_API_KEY;

export function getImagesByQuery(query) {
  const params = {
    key: myApiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 18,
  };

  return axios.get(baseUrl, { params }).then(responce => responce.data);
}
