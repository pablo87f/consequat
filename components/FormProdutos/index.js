import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Autocomplete } from "@material-ui/lab";
import Link from "next/link";
import React, { useState } from "react";
import { FormatarUnidadesMedidaService } from "../../services/FormatarUnidadeMedida.service";
import { ProdutoService } from "../../services/Produto.service";
import SnackbarUtils from "../../utils/snackbar.util";
import { TextField } from "../TextField";

function FormProdutos({ produto, unidadesMedida }) {
  const [nome, setNome] = useState(produto?.nome);
  const [unidadesMedidaSelecionada, setUnidadesMedidaSelecionada] = useState(
    undefined
  );

  const [processando, setProcessando] = useState(false);

  const handleChangeUnidadeMedida = (event, value, reason, details) => {
    if (reason === "select-option") {
      setUnidadesMedidaSelecionada(value);
    } else if (reason === "clear") {
      setUnidadesMedidaSelecionada(undefined);
    }
  };

  const limparForm = () => {
    setUnidadesMedidaSelecionada(undefined);
    setNome("");
  };

  const handleClickSalvar = async () => {
    try {
      setProcessando(true);
      const produto = {
        nome: nome,
        idUnidadeMedida: unidadesMedidaSelecionada?.id,
      };

      if (ProdutoService.validar(produto)) {
        const retorno = await ProdutoService.cadastrar(produto);

        console.log("retorno", retorno);

        SnackbarUtils.success("Produto salvo com sucesso 👍");

        limparForm();
      } else {
        SnackbarUtils.warning("Por favor, preencha os campos corretamente");
      }
    } catch (ex) {
      console.log(ex);
      SnackbarUtils.error("Houve uma falha ao salvar o produto");
    } finally {
      setProcessando(false);
    }
  };

  const loadingIndicator = processando ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        margin: "10px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          height: 100,
          position: "absolute",
        }}
      >
        <CircularProgress />
      </div>
    </div>
  ) : null;

  return (
    <Paper
      style={{
        padding: 16,
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" align="left" component="h1" gutterBottom>
        Cadastro de produto
      </Typography>

      <form onSubmit={() => {}} noValidate>
        {loadingIndicator}
        <Grid
          container
          alignItems="flex-start"
          spacing={3}
          style={{
            opacity: processando ? 0.5 : 1,
            pointerEvents: processando ? "none" : "initial",
          }}
        >
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <TextField
              label="Nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Autocomplete
              key={unidadesMedidaSelecionada?.nome || ""}
              options={unidadesMedida || []}
              value={unidadesMedidaSelecionada}
              onChange={handleChangeUnidadeMedida}
              getOptionLabel={(option) =>
                FormatarUnidadesMedidaService.executar(option)
              }
              renderInput={(params) => (
                <TextField
                  label="Unidade de medida"
                  {...params}
                  value={unidadesMedidaSelecionada?.nome || ""}
                  variant="outlined"
                ></TextField>
              )}
            ></Autocomplete>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box style={{ justifyContent: "flex-end" }}>
              <Grid container spacing={3} direction="row-reverse">
                <Grid item lg={3} md={6} sm={12} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "100%" }}
                    onClick={handleClickSalvar}
                    startIcon={<SaveIcon />}
                  >
                    Salvar
                  </Button>
                </Grid>
                <Grid item lg={3} md={6} sm={12} xs={12}>
                  <Link href="/produtos">
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ width: "100%" }}
                    >
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
  );
}

export default FormProdutos;
