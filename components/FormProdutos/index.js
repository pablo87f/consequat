import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Grid, Paper, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import { Autocomplete } from '@material-ui/lab';

import { TextField } from "../TextField";

import { RecuperarUnidadesMedidaService } from "../../services/RecuperarUnidadesMedida.service";
import { FormatarUnidadesMedidaService as FormatarUnidadeMedidaService, FormatarUnidadesMedidaService } from "../../services/FormatarUnidadeMedida.service";
import Link from 'next/link';

export default function FormProdutos({ produto }) {

  const [nome, setNome] = useState(produto?.nome)

  const [unidadesMedida, setUnidadesMedida] = useState([])

  const [unidadesMedidaSelecionada, setUnidadesMedidaSelecionada] = useState(undefined)

  const loadInitialData = async () => {
    const unidsMedida = await RecuperarUnidadesMedidaService.executar()
    setUnidadesMedida(unidsMedida)
  }

  const handleChangeUnidadeMedida = (event, value, reason, details) => {
    if (reason === 'select-option') {
      setUnidadesMedidaSelecionada(value)
    } else if (reason === 'clear') {
      setUnidadesMedidaSelecionada(undefined)
    }
  }

  const limparForm = () => {
    setUnidadesMedidaSelecionada(undefined)
    setNome('')
  }

  const handleClickSalvar = () => {
    console.log(nome, unidadesMedidaSelecionada);
    limparForm()
  }

  useEffect(() => {
    loadInitialData()
  }, [])

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
            <Autocomplete options={unidadesMedida}
              value={unidadesMedidaSelecionada}
              onChange={handleChangeUnidadeMedida}
              getOptionLabel={(option) => FormatarUnidadesMedidaService.executar(option)}
              renderInput={(params) => (
                <TextField label="Unidade de medida"
                  {...params}
                  value={unidadesMedidaSelecionada?.nome || ''}
                  variant='outlined' >
                </TextField>)} >
            </Autocomplete>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} >
            <Box style={{ justifyContent: 'flex-end' }}>
              <Grid container spacing={3} direction='row-reverse'>
                <Grid item lg={3} md={6} sm={12} xs={12}>
                  <Button variant="contained" color="primary"
                    style={{ width: '100%' }}
                    onClick={handleClickSalvar}
                    startIcon={<SaveIcon />}>Salvar</Button>
                </Grid>
                <Grid item lg={3} md={6} sm={12} xs={12} >
                  <Link href='/produtos'>
                    <Button variant="outlined" color="primary"
                      style={{ width: '100%' }}>
                      Cancelar
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

      </form>

    </Paper>


  )
} 