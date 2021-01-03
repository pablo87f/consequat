import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useSnackbar } from "notistack";

const InnerSnackbarUtilsConfigurator = ({ setUseSnackbarRef }) => {
  setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef;
const setUseSnackbarRef = (useSnackbarRefProp) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => {
  return (
    <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
  );
};
const handleOnclose = (key) => {
  useSnackbarRef?.closeSnackbar(key);
};
export default {
  success(text, title = "Sucesso!", key = "alertSucess") {
    this.toast(text, title, "success", key);
  },
  warning(text, title = "Atenção!", key = "alertWarning") {
    this.toast(text, title, "warning", key);
  },
  info(text, title = "Informativo", key = "alertInfo") {
    this.toast(text, title, "info", key);
  },
  error(text, title = "Erro!", key = "alertError") {
    this.toast(text, title, "error", key, 5000);
  },
  toast(text, title, severity, key = "alert", autoHideDuration = 3000) {
    useSnackbarRef?.enqueueSnackbar(text, {
      key,
      autoHideDuration,
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
      onClick: () => handleOnclose(key),
      content: (
        <Alert severity={severity} onClose={() => handleOnclose(key)}>
          <AlertTitle>{title}</AlertTitle>
          {text}
        </Alert>
      ),
    });
  },
};
