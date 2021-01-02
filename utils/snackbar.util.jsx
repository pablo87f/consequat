import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useSnackbar } from 'notistack';

const InnerSnackbarUtilsConfigurator = ({
  setUseSnackbarRef,
}) => {
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
  success(title, text, key = 'alertSucess') {
    this.toast(title, text, 'success', key);
  },
  warning(title, text, key = 'alertWarning') {
    this.toast(title, text, 'warning', key);
  },
  info(title, text, key = 'alertInfo') {
    this.toast(title, text, 'info', key);
  },
  error(title, text, key = 'alertError') {
    this.toast(title, text, 'error', key);
  },
  toast(
    title,
    text,
    severity,
    key = 'alert',
    autoHideDuration = 3000,
  ) {
    useSnackbarRef?.enqueueSnackbar(text, {
      key,
      autoHideDuration,
      anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
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
