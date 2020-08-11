import React from 'react';
import { makeStyles } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import Header from '../../Components/Header/index';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Vendas from '../../assets/img/vendas.png';
import Telemarketing from '../../assets/img/telemarketing.png';
import Administrativo from '../../assets/img/administrativo.png';
import Juridico from '../../assets/img/juridico.png';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Teste Grid 01
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  styleImg: {
    height: 150,
    width: 30,
  },
  styleInfo: {
    textAlign: 'center',
  }, 
  styleGridContainer:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 45,
    width: '85%',
    alignItems: 'center',
  }
}))


function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  return(
    <Box>
      <Header />
      <Grid container spacing={4} className={classes.styleGridContainer}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box>
            <img className={classes.styleImg}
              style={{ width: '100%' }}
              alt='Vendas'
              src={Vendas}
            />
          </Box>
          <Box className={classes.styleInfo}>
            <h2>Setor de Vendas</h2>
            <p>Vendas@Vendas.com.br</p>
          </Box>       
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box>
            <img className={classes.styleImg}
              style={{ width: '100%' }}
              alt='Telemarketing'
              src={Telemarketing}
            />
          </Box>
          <Box className={classes.styleInfo}>
            <h2>Setor de Telemarketing</h2>
            <p>Telemarketing@Telemarketing.com.br</p>
          </Box>       
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box>
            <img className={classes.styleImg}
              style={{ width: '100%' }}
              alt='Administrativo'
              src={Administrativo}
            />
          </Box>
          <Box className={classes.styleInfo}>
            <h2>Setor Administrativo</h2>
            <p>Administrativo@Administrativo.com.br</p>
          </Box>       
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box>
            <img className={classes.styleImg}
              style={{ width: '100%' }}
              alt='Juridico'
              src={Juridico}
            />
          </Box>
          <Box className={classes.styleInfo}>
            <h2>Setor Juridico</h2>
            <p>Juridico@Juridico.com.br</p>
          </Box>       
        </Grid>
      </Grid>
      <Box mt={30}>
          <Copyright />
        </Box>
    </Box>
    
  );
}
export default Contact;