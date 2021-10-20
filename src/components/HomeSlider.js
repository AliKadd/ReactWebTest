import React from 'react'
import Carousel from "react-material-ui-carousel"
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SliderImage from '../images/slider1.jpg'
import { Link as ScrollLink } from 'react-scroll'

const useStyles = makeStyles({
    image: {
      width: "100%",
      height: "600px",
      objectFit: "cover",
      objectPosition: "50% 40%"
    },
    carousel: {
      marginTop: "10",
    },
    slide: {
        position: "relative"
    },
    title: {
        position: "absolute",
        top: "70px",
        width: "100%",
        fontSize: "30px",
        fontFamily: "BigCaslonMedium",
        color: "#6a6a6a"
    },
    linkDiv: {
        position: "absolute",
        bottom: "130px",
        width: "100%",
        textAlign: "Center"
    },
    sliderLink: {
        fontFamily: "BrownStdLight",
        color: "#bfbfbf",
        textTransform: "uppercase",
        fontSize: "14px",
        cursor: "pointer"
    }
});

export default function HomeSlider() {
    const classes = useStyles();
    return (
        <div>
            <Carousel
                autoplay={true}
                animation="slide"
                indicators={true}
                navButtonsAlwaysVisible={false}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        margin: 0,
                    },
                }}
                className={classes.carousel}
            >
                <div className={classes.slide}>
                    <img src={SliderImage} alt="" className={classes.image} />
                    <Typography className={classes.title}>
                        Super Soft, Stylish Bed Linen<br></br>
                        Made With Love
                    </Typography>
                </div>
                <div className={classes.slide}>
                    <img src={SliderImage} alt="" className={classes.image} />
                    <Typography className={classes.title}>
                        Super Soft, Stylish Bed Linen<br></br>
                        Made With Love
                    </Typography>
                </div>
            </Carousel>
            <div className={classes.linkDiv}>
                <ScrollLink to="home" spy={true} smooth={true} 
                    duration={1000} className={classes.sliderLink}
                    offset={-50}
                >
                    Explore
                </ScrollLink>
            </div>
        </div>
    );
}
