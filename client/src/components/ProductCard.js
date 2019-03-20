import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper, Grid } from '@material-ui/core'
import { TextSpan, ImageBox, ProductCardBox, Separator, TextBox } from './ui';
import Colors from '../constants/Colors';
import numberTransformer from '../helpers/numberAdder'

export default class ProductCard extends Component {
    render() {
        const { title, rank, image } = this.props
        return (
            <Paper
                style={{ maxHeight: '530px', width: "480px", marginRight: "48px" }}
            >
                <ProductCardBox
                    container
                    direction="column"
                    alignItems="center"


                >
                    <Separator vertical="90px" />
                    <TextSpan
                        color={Colors.mainBlue}
                        size="1.5rem"
                        weight="500"
                    >
                        {title}
                    </TextSpan>
                    <Separator vertical="30px" />
                    <TextSpan
                        size="1.1rem"
                        color={Colors.textBlue}
                    >
                        RANK:
                    <TextBox> {numberTransformer(rank)} </TextBox>
                    </TextSpan>
                    <Separator vertical="50px" />
                    <ImageBox
                        image={image}
                    />

                </ProductCardBox>
            </Paper>
        )
    }
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

ProductCard.defaultProps = {

}