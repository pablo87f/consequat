import FormProdutos from "../../../components/FormProdutos";
import MainLayout from "../../../layouts/main.layout";
import { UnidadesMedidaService } from "../../../services/UnidadesMedida.service";

function Novo({ unidadesMedida }) {
  return (
    <MainLayout selectedMenuValue={"produtos"}>
      <FormProdutos produto={null} unidadesMedida={unidadesMedida} />
    </MainLayout>
  );
}

Novo.getInitialProps = async (ctx) => {
  const unidadesMedida = await UnidadesMedidaService.recuperarTodos();
  return { unidadesMedida: unidadesMedida };
};

export default Novo;
