import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Grid, Paper, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import { Autocomplete } from '@material-ui/lab';

import { TextField } from "../TextField";

export default function FormProdutos({ produto }) {

  const [nome, setNome] = useState(produto?.nome)

  return (
    <Paper style={{ padding: 16, display: "flex", flex: 1, flexDirection: 'column' }}>
      <Typography variant="h5" align="left" component="h1" gutterBottom>
        Cadastro de produto
      </Typography>

      <form onSubmit={() => { }} noValidate>

        <Grid container alignItems="flex-start" spacing={3} >
          <Grid item lg={6} md={12} sm={12} xs={12} >
            <TextField label="Nome" value={nome} onChange={(e) => {
              setNome(e.target.value)
            }}></TextField>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Autocomplete options={["pablo", "teste"]} renderInput={(params) => (<TextField label="Unidade de medida"  {...params} variant='outlined' ></TextField>)} >
            </Autocomplete>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} >
            <Box style={{  justifyContent: 'flex-end' }}>
              <Grid container spacing={3} direction='row-reverse'>
                <Grid item lg={3} md={6} sm={12} xs={12}>
                  <Button variant="contained" color="primary" style={{ width: '100%' }} 
                  startIcon={<SaveIcon />}>Salvar</Button>
                </Grid>
                <Grid item lg={3} md={6} sm={12} xs={12} >
                  <Button variant="outlined" color="primary" style={{ width: '100%' }}>Cancelar</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

      </form>

    </Paper>


  )
} 