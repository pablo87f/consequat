import React from 'react';


import { Button } from '@material-ui/core';
import Link from "next/link";
import MainLayout from '../../layouts/main.layout';


export default function Recipes() {
  return (
    <MainLayout selectedMenuValue={"receitas"}>
       <Button color="primary">Olá mundo - Recipes</Button>
    </MainLayout>
  );
}
