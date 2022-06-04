
import client from "./Axios";
const getAll = () => {
  return client.get("products");
};
const get = id => {
  return client.get(`product/${id}`);
};
const create = data => {
  return client.post("product", data);
};
const update = (id, data) => {
  return client.put(`product/${id}`, data);
};
const remove = id => {
  return client.delete(`product/${id}`);
};
const removeAll = () => {
  return client.delete(`product`);
};

const getAllCat = () => {
  return client.get("categories");
};
const getCat = id => {
  return client.get(`category/${id}`);
};
const createCat = data => {
  return client.post("category", data);
};
const updateCat = (id, data) => {
  return client.put(`category/${id}`, data);
};
const removeCat = id => {
  return client.delete(`category/${id}`);
};
const removeAllCat = () => {
  return client.delete(`category`);
};

const Service = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  getAllCat,
  getCat,
  createCat,
  updateCat,
  removeCat,
  removeAllCat
};
export default Service;