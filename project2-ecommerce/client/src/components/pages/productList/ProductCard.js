import React from 'react';
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './Product.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default ({ _id, title, description, price, stock }) => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <Link to={`/shop/product/${_id}`}>
                        <CardMedia
                            component="img"
                            alt={title}
                            height="140"
                            image='https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP770/iphonex_2x.png'
                            title={title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {price}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
                <CardActions>
                    <Col md={8}>
                        <Link to={`/login`}>
                            <Button size="small" color="dark">
                                Add Cart
                        </Button>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to={`/login`}>
                            <Button size="small" color="dark">
                                <FavoriteBorderIcon />
                            </Button>
                        </Link>
                    </Col>
                </CardActions>
            </Card>
        </>
    );
}