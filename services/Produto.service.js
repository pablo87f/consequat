import { ProdutosEndpoints } from "../endpoints/produtos.endpoints";
import { UnidadesMedidas } from "../utils/unidades-medida";

export const ProdutoService = {
  recuperarTodos: async () => {
    return ProdutosEndpoints.listar();
  },
  validarCadastro: (produto) => {},
  salvar: async (produto) => {
    return ProdutosEndpoints.criar(produto);
  },
};
