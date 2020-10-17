import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import Posts from './Components/Posts';
// import Home from './Components/Home';
import RequestPage from './RequestPage'


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
  
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
  
  function Home() {
    const classes = useStyles();
  
    return (
        <Router>
            <div className="App">
          <React.Fragment>
            <CssBaseline />
            <main>
              {/* Hero unit */}
              <div className={classes.heroContent}>
                <Container maxWidth="sm">
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Album layout
              </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Something short and leading about the collection below—its contents, the creator, etc.
                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                    entirely.
              </Typography>
                  <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button variant="contained" color="primary">
                          Make a Donation
                    </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" color="primary" component={Link} to={'/requestPage'}>
                          Request a Donation
                    </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Container>
              </div>
            </main>
          </React.Fragment>
          <Switch>
          <Route path="/request" component={RequestPage} />
        </Switch>
        </div>
        </Router>
    );
  }
  
  export default Home;