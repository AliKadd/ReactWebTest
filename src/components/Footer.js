import React from 'react'
import { Grid, Box, Container, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

import PaymentImg from '../images/payment.jpg'

const useStyles = makeStyles({
    Container: {
        width: "90%"
    },
    footer: {
        textAlign: "left",
        color: "#757575"
    },
    iconLink: {
        marginRight: "20px",
    },
    title: {
        fontFamily: 'BrownStdRegular',
        textTransform: 'uppercase'
    },
    text: {
        fontFamily: 'BrownStdLight',
        color: '#757575'
    },
    footerLink: {
        fontFamily: 'BrownStdLight',
        color: '#757575',
        marginBottom: "15px",
        display: "block"
    },
    inlineInput: {
        display: "flex"
    },
    input: {
        borderRadius: '0',
        [`& fieldset`]: {
            borderRadius: 0,
        },
        fontSize: "12px"
    },
    button: {
        borderRadius: '0',
        backgroundColor: "#d1d1d1",
        color: "#4a4a4a",
        fontFamily: "BrownStdRegular",
        textTransform: "uppercase",
        fontSize: "12px",
        padding: "5px 25px"
    },
    alignRight: {
        textAlign: "right"
    },
    footerCopy: {
        marginTop: "35px"
    },
    InputField: {
        border: "1px solid #ebebeb",
        paddingLeft: "5px",
        height: "45px",
        outline: "0",
        fontFamily: "BrownStdLight",
        width: "75%"
    }
});

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container className={classes.Container}>
                <Grid container spacing={5}>
                    <Grid item xs="12" sm="6" md="3">
                        <Box marginBottom="25px" className={classes.title}>Our Story</Box>
                        <Box marginBottom="25px" className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Box>
                        <Box>
                            <Link href="#" className={classes.iconLink}><FacebookIcon style={{color:'#757575', fontSize: "20px"}}/></Link>
                            <Link href="#" className={classes.iconLink}><TwitterIcon style={{color:'#757575', fontSize: "20px"}}/></Link>
                            <Link href="#" className={classes.iconLink}><InstagramIcon style={{color:'#757575', fontSize: "20px"}}/></Link>
                        </Box>
                    </Grid>
                    <Grid item xs="12" sm="6" md="3">
                        <Box marginBottom="25px" className={classes.title}>More..</Box>
                        <Box>
                            <Link href="#" className={classes.footerLink}>About Us</Link>
                        </Box>
                        <Box>
                            <Link href="#" className={classes.footerLink}>Contact Us</Link>
                        </Box>
                        <Box>
                            <Link href="#" className={classes.footerLink}>Track My Order</Link>
                        </Box>
                        <Box>
                            <Link href="#" className={classes.footerLink}>FAQ</Link>
                        </Box>
                    </Grid>
                    <Grid item xs="12" sm="6" md="3">
                        <Box marginBottom="25px" className={classes.title}>Shop</Box>
                        <Box>
                            <Link href="#" className={classes.footerLink}>Bed Linen</Link>
                        </Box>
                        <Box>
                            <Link href="#" className={classes.footerLink}>Bath Towels</Link>
                        </Box>
                        <Box>
                            <Link href="#" className={classes.footerLink}>Bathrobes</Link>
                        </Box>
                        <Box>
                            <Link href="#" className={classes.footerLink}>Home Fragrances</Link>
                        </Box>
                    </Grid>
                    <Grid item xs="12" sm="6" md="3">
                        <Box marginBottom="25px" className={classes.title}>Newsletter</Box>
                        <Box marginBottom="25px" className={classes.text}>Subscribe to receive updates, access to exclusive deals, and more.</Box>
                        <Box className={classes.inlineInput}>
                            <input type="email" name="email" className={classes.InputField} placeholder="Enter your email address"/>
                            <Button className={classes.button} variant="outlined">Subscribe</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.footerCopy}>
                <Grid container spacing={5}>
                    <Grid item xs="12" sm="6">
                        <Box>&copy;{new Date().getFullYear()} BLAUCHE</Box>
                    </Grid>
                    <Grid item xs="12" sm="6">
                        <Box className={classes.alignRight}>
                            <img src={PaymentImg} className={classes.footerImg}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
