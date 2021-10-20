import React from 'react'
import logo from '../images/logo.png'
import { Link, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import UserIcon from '@material-ui/icons/PersonOutline'
import CartIcon from '@material-ui/icons/ShoppingCartOutlined'

const styles = makeStyles({
    bar: {
        width: "85%",
        margin: "auto",
        height: "80px",
        padding: "5px 0"
    },
    logo: {
        margin: "0 50px",
        maxHeight: "100%",
        maxWidth: "100%",
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: "1",
        "&:hover": {
            color: "black",
            textDecoration: "none"
        },
        textTransform: "uppercase",
        fontFamily: 'BrownStdRegular',
        alignSelf: 'center',
        fontSize: "13px",
        color: "#737373"
    },
    logoDiv: {
        width: "30%",
        textAlign: "center",
        display: "inline-block",
        height: '100%'
    },
    leftDiv: {
        width: "35%",
        textAlign: "left",
        display: "inline-flex"
    },
    rightDiv: {
        width: "35%",
        textAlign: "right",
        display: "inline-flex"
    },
    icons: {
        marginLeft: "55px"
    },
    icon: {
        padding: "0 8px",
        fontFamily: 'BrownStdRegular',
        color: "#737373"
    }
})

export default function navBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="#141414" className={classes.bar}>
            <div className={classes.leftDiv}>
                <Link href="#" className={classes.menuItem}>
                    Shop
                </Link>
                <Link href="#" className={classes.menuItem}>
                    Our Story
                </Link>
                <Link href="#" className={classes.menuItem}>
                    Expertise
                </Link>
            </div>
            <div className={classes.logoDiv}>
                <img src={logo} className={classes.logo}/>
            </div>
            <div className={classes.rightDiv}>
                <Link href="#" className={classes.menuItem}>
                    Contact
                </Link>
                <div className={classes.icons}>
                    <SearchIcon className={classes.icon}/>
                    <UserIcon className={classes.icon}/>
                    <CartIcon className={classes.icon}/>
                </div>
            </div>
        </Toolbar>
    )
}
