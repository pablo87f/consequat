import { ProdutosEndpoints } from "../endpoints/Produtos.endpoints";

export const ProdutoService = {
  recuperarTodos: async () => {
    return ProdutosEndpoints.listar();
  },
  validarCadastro: (produto) => {},
  salvar: async (produto) => {
    return ProdutosEndpoints.criar(produto);
  },
};
