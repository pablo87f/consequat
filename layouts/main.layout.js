// import React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Link from '../components/Link';
// import ProTip from '../components/ProTip';
// import Copyright from '../components/Copyright';


// import { Button } from '@material-ui/core';

// function Home() {
//   return <Button color="primary">Hello World</Button>;
// }

// export default function Index() {
//   return (
//     <Home/>
//   );
// }

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import React from 'react';
import DrawerMenu from '../components/DrawerMenu';
import mainMenuItems from './mainMenuItems';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: `#fafafa`
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function MainLayout({ children, selectedMenuValue }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleChangeDrawerOpen = (open) => {
    setOpen(!open);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleChangeDrawerOpen(open)}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <DrawerMenu open={open} onClickArrow={() => handleChangeDrawerOpen(open)}
        menuItens={mainMenuItems} selectedMenuValue={selectedMenuValue}
      />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container} >
          <Grid container spacing={3} >
            {children}
          </Grid>
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
}