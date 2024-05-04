const mainTheme = {
  dark: {
    palette: {
      primary: {
        main: "#223c49",
      },
    },
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            "&:after, &:before": {
              borderBottom: "none",
            },
            "&:hover": {
              "&:before": {
                borderBottom: "none!important",
              },
            },
          },
        },
      },
    },
  },
  light: {},
};

export { mainTheme };
