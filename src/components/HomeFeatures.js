import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Icon1 from '../images/icon1.png'
import Icon2 from '../images/icon2.png'
import Icon3 from '../images/icon3.png'
import Icon4 from '../images/icon4.png'

const useStyles = makeStyles({
    Container: {
        backgroundColor: "#f1f0ec",
        width: "100%",
        margin: "90px 0",
        padding: "60px 0"
    },
    MainTitle: {
      margin: 'auto',
      color: "#141414",
      marginBottom: "40px",
      fontFamily: 'BigCaslonMedium',
      fontSize: "30px"
    },
    InnerContainer: {
        width: "70%",
        margin: "auto"
    },
    FeaturesDiv: {
        display: "inline-block",
        width: "25%",
    },
    Icon: {
        width: "100%",
        marginBottom: "30px",
        '& image': {
            height: "100px"
        }
    },
    Title: {
        fontFamily: "BrownStdBold",
        color: "#525251",
        marginBottom: "30px"
    },
    Description: {
        fontFamily: "BrownStdLight",
        color: "#737373",
        fontSize: "14px"
    }
});

export default function HomeFeatures() {
    const classes = useStyles();
    return (
        <div className={classes.Container}>
            <div className={classes.TextDiv}>
                <Typography className={classes.MainTitle}>
                    Your Comfort Is Out #1 Priority
                </Typography>
            </div>
            <div className={classes.InnerContainer}>
                <div className={classes.FeaturesDiv}>
                    <div className={classes.Icon}>
                        <img src={Icon1} alt="Quality Products"/>
                    </div>
                    <div className={classes.Title}>
                        Quality Products
                    </div>
                    <div className={classes.Description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. 
                    </div>
                </div>
                <div className={classes.FeaturesDiv}>
                    <div className={classes.Icon}>
                        <img src={Icon2} alt="Lifetime Warranty"/>
                    </div>
                    <div className={classes.Title}>
                        Lifetime Warranty
                    </div>
                    <div className={classes.Description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. 
                    </div>
                </div>
                <div className={classes.FeaturesDiv}>
                    <div className={classes.Icon}>
                        <img src={Icon3} alt="Stress-free Shopping"/>
                    </div>
                    <div className={classes.Title}>
                        Stress-free Shopping
                    </div>
                    <div className={classes.Description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. 
                    </div>
                </div>
                <div className={classes.FeaturesDiv}>
                    <div className={classes.Icon}>
                        <img src={Icon4} alt="Fair Prices"/>
                    </div>
                    <div className={classes.Title}>
                        Fair Prices
                    </div>
                    <div className={classes.Description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. 
                    </div>
                </div>
            </div>
        </div>
    )
}
