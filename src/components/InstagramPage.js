import React from 'react'
import { Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InstagramIcon from '@material-ui/icons/Instagram'

import Post1 from '../images/Instagram1.jpg'
import Post2 from '../images/Instagram2.jpg'
import Post3 from '../images/Instagram3.jpg'
import Post4 from '../images/Instagram4.jpg'

const useStyles = makeStyles({
    Container: {
        width: "100%",
        margin: "90px 0"
    },
    MainTitle: {
      margin: 'auto',
      color: "#8a8a8a",
      marginBottom: "20px",
      fontFamily: 'BrownStdRegular',
      fontSize: "16px"
    },
    iconLink:{
        color: "#8a8a8a"
    },
    icon: {
        verticalAlign: "bottom",
        marginLeft: "10px",
        fontSize: "27px"
    },
    InnerContainer: {
        width: "100%"
    },
    PostDiv: {
        display: "inline-block",
        width: "25%",
    },
    Post: {
        width: "100%",
        marginBottom: "30px",
        height: "350px"
    },
    Image: {
        objectFit: "cover",
        width: "100%",
        height: "100%"
    }
});

export default function InstagramPage() {
    const classes = useStyles();
    return (
        <div className={classes.Container}>
            <div className={classes.TextDiv}>
                <Typography className={classes.MainTitle}>
                    <Link underline="none" href="#" className={classes.iconLink}>FOLLOW US ON <InstagramIcon className={classes.icon}/></Link>
                </Typography>
            </div>
            <div className={classes.InnerContainer}>
                <div className={classes.PostDiv} data-aos="flip-left" data-aos-once="true">
                    <div className={classes.Post}>
                        <img src={Post1} className={classes.Image}/>
                    </div>
                </div>
                <div className={classes.PostDiv} data-aos="flip-left" data-aos-once="true">
                    <div className={classes.Post}>
                        <img src={Post2} className={classes.Image}/>
                    </div>
                </div>
                <div className={classes.PostDiv} data-aos="flip-left" data-aos-once="true">
                    <div className={classes.Post}>
                        <img src={Post3} className={classes.Image}/>
                    </div>
                </div>
                <div className={classes.PostDiv} data-aos="flip-left" data-aos-once="true">
                    <div className={classes.Post}>
                        <img src={Post4} className={classes.Image}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
