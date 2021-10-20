import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    Product: {
        width: "100%",
        ['@media (max-width:780px)']: {
            marginBottom: "25px"
        }
    },
    ProductImage: {
        width: "100%",
        height: "355px",
        marginBottom: "25px" 
    },
    ProductName: {
        textAlign: "left",
        fontFamily: "BrownStdBold",
        color: "#737373",
        marginBottom: "5px"
    },
    ProductPrice: {
        textAlign: "left",
        fontFamily: "BrownStdLight",
        fontSize: "14px",
        color: "#303030",
        marginBottom: "5px"
    },
    ProductColors: {
        textAlign: "left",
        color: "#c3c3c3",
        fontSize: "12px",
        fontFamily: "BrownStdLight",
    },
    ProductOffer: {
        textAlign: "left",
        fontSize: "12px",
        fontFamily: "BrownStdLight",
    },
    Offer: {
        color: "#d9c8b2"
    }
});

export default function Product(props) {
    const classes = useStyles();
    return (
        <div className={classes.Product} data-aos="zoom-in" data-aos-once="true">
            <img src={props.image} className={classes.ProductImage} alt={props.name}/>
            <Typography className={classes.ProductName}>{props.name}</Typography>
            <Typography className={classes.ProductPrice}>AED {props.price}</Typography>
            {props.colors ? <Typography className={classes.ProductColors}>Available in {props.colors} colours</Typography> : null}
            {props.offer ? <Typography className={classes.ProductOffer}><span className={classes.Offer}>Special Offer:</span> {props.offer}</Typography> : null}
        </div>
    )
}
