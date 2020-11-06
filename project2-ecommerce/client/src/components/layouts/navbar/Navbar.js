
//                         {!this.props.loggedInUser && <Link className="nav-link" to="/signup">Register</Link>}
//                         {!this.props.loggedInUser && <Link className="nav-link" to="/login">Login</Link>}
//                         {this.props.loggedInUser && <div className="nav-link" onClick={this.logoutUser}>Cerrar sesión</div>}
//                         {/* <Link className="nav-link" to="/profile">- Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</Link> */}

import React from 'react';

// import authService from './../../../service/auth.service'

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

const sections = [
    { title: 'Apple', url: '/shop' },
    { title: 'Samsung', url: '/shop' },
    { title: 'Huawei', url: '/shop' },
    { title: 'Xiaomi', url: '/shop' },
    { title: 'Otros', url: '/shop' },
];

export default function Navbar() {

    // authService = new authService()

    const classes = useStyles();

    // logoutUser = () => {
    //     this.authService
    //         .logout()
    //         .then(() => this.props.setTheUser(null))
    //         .catch(err => console.log('Error:', err))
    // }

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Link href='/shop'><Button size="small">Shop</Button></Link>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <Link href='/'>
                        RepairPhone
                    </Link>
                </Typography>
                <IconButton>
                    <Link href='/login'>
                        <ShoppingCartOutlinedIcon />
                    </Link>
                </IconButton>
                <Link href='/login'>
                    <Button variant="outlined" size="small">
                        Login
                    </Button>
                </Link>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        className={classes.toolbarLink}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment >
    );
}

// .propTypes = {
//     sections: PropTypes.array,
//     title: PropTypes.string,
// };


