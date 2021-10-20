import React, { useEffect } from 'react'
import { Typography, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Product from './Product'

import BathRobes from '../images/BathRobes.jpg'
import BathTowels from '../images/BathTowels.jpg'
import BedLinens from '../images/BedLinens.jpg'
import HomeFragrances from '../images/HomeFragrances.jpg'
import Towel1 from '../images/Towel1.jpg'
import Towel2 from '../images/Towel2.jpg'
import Towel3 from '../images/Towel3.jpg'
import ShopCategory from './ShopCategory'

const useStyles = makeStyles({
    Container: {
        width: "100%",
        margin: "90px 0",
    },
    ShopContainer: {
        width: "70%",
        margin: "auto",
        marginBottom: "60px",
        padding: "0"
    },
    TextDiv: {
      display: "inline-block"
    },
    Title: {
      margin: 'auto',
      color: "#636363",
      marginBottom: "40px",
      fontFamily: 'BigCaslonMedium',
      width: "700px",
    },
    BestSellers: {
        width: "70%",
        margin: "auto",
        columns: "3",
        columnGap: "1",
        marginBottom: "60px",
        ['@media (max-width:780px)']: {
            columns: "1"
        }
    },
    ShopTitle: {
        fontSize: "18px"
    },
    BestTitle: {
        fontSize: "25px"
    }
});

export default function HomeShop() {
    const classes = useStyles();
    return (
        <div className={classes.Container} id="home">
            <div className={classes.TextDiv}>
                <Typography data-aos="zoom-in" data-aos-once="true" className={[classes.Title, classes.ShopTitle]}>
                    Our premium products got the finest quality cotton that create an exquisite lightweight textile that’s both soft and crisp – guaranteed to give you a wonderful night’s sleep.
                </Typography>
            </div>
            <Container className={classes.ShopContainer}>
                <Grid container spacing={0}>
                    <ShopCategory name="Shop Bed Linens" image={BedLinens}/>
                    <ShopCategory name="Shop Bath Towels" image={BathTowels}/>
                </Grid>
                <Grid container spacing={0}>
                    <ShopCategory name="Shop Bath Robes" image={BathRobes}/>
                    <ShopCategory name="Shop Fragrances" image={HomeFragrances}/>
                </Grid>
            </Container>

            <div className={classes.TextDiv}>
                <Typography className={[classes.Title, classes.BestTitle]}>
                        Best Sellers
                </Typography>
            </div>
            <div className={classes.BestSellers}>
                <Product image={Towel1} name="Product Name" price="XXX" colors="5"></Product>
                <Product image={Towel2} name="Product Name" price="XXX" offer="Get 25% Off"></Product>
                <Product image={Towel3} name="Product Name" price="XXX" colors="3"></Product>
            </div>
        </div>
    )
}
