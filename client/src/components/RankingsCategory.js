import React, { Component } from 'react'
import { TextSpan, Separator } from '../components/ui'
import { Grid } from '@material-ui/core'
import CategoryDishList from './CategoryDishList'
import data from '../testData/rankingsBySubcategory'
import Colors from '../constants/Colors'

export default class RankingsCategory extends Component {
    render() {
        return (
            <>
                <TextSpan
                    color={Colors.textBlue}
                    size="28px"
                >
                    Rankings by subcategory
                </TextSpan>
                <Separator horizontal="48px" />
                <Grid
                    container
                >
                    {
                        data.map((elem, index) => (
                            <CategoryDishList elem={elem} id={index} key={index}  handleClick={() => this.props.handleClick(elem)}/>
                        ))
                    }
                </Grid>
            </>
        )
    }
}
