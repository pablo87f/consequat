import React from 'react';
import MainLayout from '../layouts/main.layout'

import { Button } from '@material-ui/core';
import Link from "next/link";

export default function About() {
  return (
    <MainLayout about>
      <Link href='/receitas'>
        <a>

       <Button color="primary">Ir pra Receitas</Button>
        </a>
      </Link>
    </MainLayout>
  );
}
