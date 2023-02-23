import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const requestImages = async ({ query, page, perPage }) => {
  const { data } = await axios.get(
    `?q=cat&page=${page}&key=32926703-703d0338e476ad21248e3ea4a&q=${query}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
