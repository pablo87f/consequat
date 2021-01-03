import { UnidadesMedidaEndpoints } from "../endpoints/UnidadesMedida.endpoints";

export const UnidadesMedidaService = {
  recuperarTodos: async () => {
    return UnidadesMedidaEndpoints.listar();
  },
};
