import api from "../api";

const endpoint = "unidades-medida";

export const UnidadesMedidaEndpoints = {
  listar: async () => {
    const response = await api.get(`/${endpoint}`);
    return response.data;
  },
  recuperar: async (id) => {
    const response = await api.get(`/${endpoint}/${id}`);
    return response.data;
  },
  criar: async (data) => {
    const response = await api.post(`/${endpoint}`, data);
    return response.data;
  },
  atualizar: async (id, data) => {
    const response = await api.put(`/${endpoint}/${id}`, data);
    return response.data;
  },
  deletar: async (id) => {
    const response = await api.get(`/${endpoint}/${id}`);
    return response.data;
  },
};
