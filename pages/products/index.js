import React from 'react';


import { Button } from '@material-ui/core';
import MainLayout from '../../layouts/main.layout';


export default function Produtos() {
  return (
    <MainLayout selectedMenuValue={"receitas"}>
      <Button color="primary">Olá mundo - Recipes</Button>
    </MainLayout>
  );
}
