import axios from 'axios';

const baseURL = 'http://localhost:1337/words/';

export const api = {
  getWord: async (id) => {
    const res = await axios.get(baseURL + id); // Fake sync
    return res.data;
  },
  getWords: async () => {
    const res = await axios.get(baseURL);
    return res.data;
  },
  deleteWord: async (id) => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  },
  createWord: async (payload) => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  },
  updateWord: async (payload) => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  }
};
