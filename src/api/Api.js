import axios from "axios";

const api = (find, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${find}&page=${page}&key=23310920-d081bc49b0dbcec0d7d3e38c7&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default api;
