import axios from 'axios';



const API_KEY = '50781933-cd9c20a0da5c230dc3f91d18e';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
   
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', `Sorry, there are no images matching your search query. Please try again!`, error.message,
    );
    throw error;
  }
}