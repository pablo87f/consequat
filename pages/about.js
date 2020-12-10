import React from 'react';
import Layout from '../components/layout'

import { Button } from '@material-ui/core';
import Link from "next/link";

export default function About() {
  return (
    <Layout about>
      <Link href='/receitas'>
        <a>

       <Button color="primary">Ir pra Receitas</Button>
        </a>
      </Link>
    </Layout>
  );
}
