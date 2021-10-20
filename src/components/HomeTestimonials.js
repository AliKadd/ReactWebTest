import React from 'react'
import Carousel from "react-material-ui-carousel"
import { Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import StarIcon from '@material-ui/icons/Star'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles({
    Container: {
        width: "100%",
        margin: "90px 0",
    },
    carousel: {
        width: "100%",
        marginBottom: "30px"
    },
    slide: {
        width: "50%",
        margin: "auto"
    },
    stars: {
        color: "#b1b1b1",
        marginBottom: "25px"
    },
    filledIcon: {
        color: "#b1b1b1"
    },
    text: {
        color: "#141414",
        fontFamily: "BigCaslonMedium",
        fontSize: "25px"
    },
    link: {
        color: "#8a8a8a",
        fontFamily: "BrownStdRegular",
        textUnderlineOffset: "5px"
    }
});

export default function HomeTestimonials() {
    const classes = useStyles();
    return (
        <div className={classes.Container}>
            <Carousel
                autoplay={true}
                animation="slide"
                indicators={false}
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
                    <div className={classes.stars}>
                        <Rating name="half-rating" readOnly="true" value={2.5} precision={0.5}
                            icon={<StarIcon className={classes.filledIcon} fontSize="inherit" />}
                            emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />} />
                    </div>
                    <Typography className={classes.text}>
                        "This is the best towel set I've ever had; it's cool, comfortable and aesthetically perfect."
                    </Typography>
                </div>
                <div className={classes.slide}>
                    <div className={classes.stars}>
                    <Rating name="half-rating" readOnly="true" value={4.5} precision={0.5}
                            icon={<StarIcon className={classes.filledIcon} fontSize="inherit" />}
                            emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />} />
                    </div>
                    <Typography className={classes.text}>
                        "This is the best towel set I've ever had; it's cool, comfortable and aesthetically perfect."
                    </Typography>
                </div>
                <div className={classes.slide}>
                    <div className={classes.stars}>
                    <Rating name="half-rating" readOnly="true" value={3} precision={0.5}
                            icon={<StarIcon className={classes.filledIcon} fontSize="inherit" />}
                            emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />} />
                    </div>
                    <Typography className={classes.text}>
                        "This is the best towel set I've ever had; it's cool, comfortable and aesthetically perfect."
                    </Typography>
                </div>
            </Carousel>
            <Link href="#" underline="always" className={classes.link}>Read Testimonials</Link>
        </div>
    );
}
