const axios = require("axios");

const API_URL = process.env.NEXT_PUBLIC_DATAAPI_URL;

export const project = {
  getAll: () => axios.get(`${API_URL}/projects`).then((res) => res.data),

  getOne: (id) =>
    axios.get(`${API_URL}/projects/${id}`).then((res) => res.data),

  getStacks: (id) =>
    axios.get(`${API_URL}/projects/${id}/stacks`).then((res) => res.data),

  getPictures: (id) =>
    axios.get(`${API_URL}/projects/${id}/pictures`).then((res) => res.data),
};
export const company = {
  getAll: () => axios.get(`${API_URL}/companies`).then((res) => res.data),

  getOne: (id) =>
    axios.get(`${API_URL}/companies/${id}`).then((res) => res.data),
};

export const job = {
  getAll: () => axios.get(`${API_URL}/jobs`).then((res) => res.data),

  getOne: (id) => axios.get(`${API_URL}/jobs/${id}`).then((res) => res.data),
};
export const stack = {
  getAll: () => axios.get(`${API_URL}/stacks`).then((res) => res.data),

  getOne: (id) => axios.get(`${API_URL}/stacks/${id}`).then((res) => res.data),
};
export const formation = {
  getAll: () => axios.get(`${API_URL}/formations`).then((res) => res.data),

  getOne: (id) =>
    axios.get(`${API_URL}/formations/${id}`).then((res) => res.data),
};

export const pictures = {
  getAll: () => axios.get(`${API_URL}/pictures`).then((res) => res.data),

  getOne: (id) =>
    axios.get(`${API_URL}/pictures/${id}`).then((res) => res.data),
};
