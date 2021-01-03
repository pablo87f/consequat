import api from "../api";

const endpoint = "produtos";

export const ProdutosEndpoints = {
  listar: async () => {
    return await api.get(`/${endpoint}`);
  },
  recuperar: async (id) => {
    return await api.get(`/${endpoint}/${id}`);
  },
  criar: async (data) => {
    return await api.post(`/${endpoint}`, data);
  },
  atualizar: async (id, data) => {
    return await api.put(`/${endpoint}/${id}`, data);
  },
  deletar: async (id) => {
    return await api.get(`/${endpoint}/${id}`);
  },
};
