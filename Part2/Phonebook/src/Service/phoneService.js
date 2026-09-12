import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

export const getPersons = async () => {
  return await axios.get(baseUrl);
};
export const addPerson = async (person) => {
  return await axios.post(baseUrl, person);
};
export const deletePerson = async (id) => {
  return await axios.delete(`${baseUrl}/${id}`);
};
export const updatePerson = async (person, id) => {
  return await axios.patch(`${baseUrl}/${id}`, person);
};

export default { getPersons, addPerson, deletePerson };
