import React from 'react';


import { Button, Link } from '@material-ui/core';
import MainLayout from '../../layouts/main.layout';


export default function Produtos() {
  return (
    <MainLayout selectedMenuValue={"produtos"}>
       <Link href='/produtos/novo'>
        <a>

       <Button color="primary">Criar novo produto</Button>
        </a>
      </Link>
    </MainLayout>
  );
}
