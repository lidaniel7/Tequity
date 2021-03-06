import React, { useEffect, useState } from 'react';
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
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import axios from 'axios';

import Popup from './Popup';
import PaymentPage from './PaymentPage'


let uniqid = require('uniqid')

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Tequity
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

const getPosts = () => {
    const request = axios.get('http://localhost:3001/getRequests')
    return request.then(response => {
        return response.data
    })
}

export default function Posts() {
    const classes = useStyles();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
            .then(retrievedPosts => {
                setPosts(retrievedPosts)
                console.log(retrievedPosts)
            })
        console.log("rendered")
    }, [])



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Any Donations Are Greatly Appreciated!
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Each card below consists of a request from a schoolteacher/administrator for technology (old or new) for their students who are unable to afford it.
                        </Typography>
                        <br />
                        <br />
                        <Box align="center">
                            <PaymentPage />
                        </Box>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {posts.map((card) => (
                            <Grid item key={uniqid()} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={`https://cdn.civil.services/us-states/flags/${card.state}-large.png`}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.school}
                                        </Typography>
                                        <Typography>
                                            Computers needed: {card.laptops}
                                        </Typography>
                                        <Typography>
                                            Total Cost: {card.cost}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Popup ml={3} personRequest={card}/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}