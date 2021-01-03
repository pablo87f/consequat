import { ProdutosEndpoints } from "../endpoints/Produtos.endpoints";

export const ProdutoService = {
  recuperarTodos: async () => {
    return ProdutosEndpoints.listar();
  },
  validar: (produto) => {
    return (
      produto &&
      produto.nome &&
      produto.nome.length > 3 &&
      produto.idUnidadeMedida &&
      produto.idUnidadeMedida > 0
    );
  },
  cadastrar: async (produto) => {
    const response = await ProdutosEndpoints.criar(produto);
    console.log("response", response);
    return response;
  },
};
