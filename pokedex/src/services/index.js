import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function GetPokemons(id) {
  // Async e await, faz com que a requisição só retorne algo quando obter um código, seja ele de sucesso ou não
  const response = await api.get(`/pokemon/${id}`);

  return response.data;
}