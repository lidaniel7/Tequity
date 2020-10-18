import React from 'react';
import logo from './logo.svg';
import './App.css';
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

import Posts from './Components/Posts';
import Home from './Components/Home';
import RequestPage from './Components/RequestPage'

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <AppBar position="relative">
          <Toolbar>
              <Button color="inherit" component={Link} to={'/'}>Home</Button>
              <Button color="inherit" component={Link} to={'/posts'}>Make a Donation</Button>
              <Button color="inherit" component={Link} to={'/request'}>Request a Donation</Button>
            {/* <Link to={'/posts'} className="nav-link">Posts</Link> */}
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/posts" component={Posts} />
          <Route path="/request" component={RequestPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
