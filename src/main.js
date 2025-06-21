import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const searchInput = searchForm.elements.searchQuery;

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const query = searchInput.value.trim(); 

  if (!query) {
    iziToast.error({
      message: 'Search field cannot be empty!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    console.error('Error during image search:', error);
    iziToast.error({
      message: 'Something went wrong! Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader(); 
    searchForm.reset();
  }
});