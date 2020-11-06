import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

const header = {
    title: 'RepairPhone',
    description:
        "Gracias a nuestra amplia experiencia, en RepairPhone, realizamos todo tipo de reparaciones. Da igual lo que necesites reparar, ya sea la pantalla de tu móvil, la batería o la cámara...",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

export default function Header() {
    const classes = useStyles();

    return (
        <Container className="mt-4">
            <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${header.image})` }}>
                {< img style={{ display: 'none' }} src={header.image} alt={header.imageText} />}
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {header.title}
                            </Typography>
                            <Typography variant="h6" color="inherit" paragraph>
                                {header.description}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper >
        </Container>
    );
}
