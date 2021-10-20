import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    ShopBox: {
        backgroundColor: "black",
        width: "100%",
        height: "550px",
        position: "relative",

    },
    ShopImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    ShopBtn: {
        backgroundColor: "white",
        color: "#6a6a6a",
        fontFamily: "BrownStdBold",
        fontSize: "14px",
        width: "50%",
        position: "absolute",
        bottom: "80px",
        borderRadius: "0",
        zIndex: 1,
        left: "25%",
        textTransform: "capitalize"
    },
});

export default function ShopCategory(props) {
    const classes = useStyles();
    return (
        <Grid data-aos="fade-up" data-aos-once="true" item sm="12" md="6">
            <div className={classes.ShopBox}>
                <img src={props.image} alt="" className={classes.ShopImage} />
                <Button variant="contained" className={classes.ShopBtn}>{props.name}</Button>
            </div>
        </Grid>
    )
}
