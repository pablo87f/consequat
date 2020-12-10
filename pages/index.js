import React from 'react';


import { Button } from '@material-ui/core';
import Link from "next/link";
import MainLayout from '../layouts/main.layout';

export default function Home() {
  return (
    <MainLayout selectedMenuValue={"home"}>
       
      <Link href='/receitas'>
        <a>

       <Button color="primary">Ir pra Receitas</Button>
        </a>
      </Link>
    
    </MainLayout>
  );
}
