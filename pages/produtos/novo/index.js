import FormProdutos from "../../../components/FormProdutos";
import MainLayout from "../../../layouts/main.layout";

export default function Novo() {
  return (
    <MainLayout selectedMenuValue={"receitas"}>
      <FormProdutos produto={null}/>
    </MainLayout>
  );
}