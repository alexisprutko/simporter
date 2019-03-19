import React, { Component } from 'react'
import { RectangleDish, NumTexSpan, TextSpan } from './ui'
import Colors from '../constants/Colors'
import { Grid } from '@material-ui/core'

export default class CategoryDishList extends Component {
    render() {
        const { elem: { title, active }, id } = this.props
        const color = active ? Colors.white : Colors.textBlue
        const Id = id + 1 < 10 ? "0" + (id + 1) : id + 1
        return (
            <RectangleDish active={active ? 1 : 0}>
                <Grid
                    style={{ height: "100%", position: "relative" }}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <NumTexSpan color={color}>{Id}</NumTexSpan>
                    <TextSpan
                        size="1.5rem"
                        color={color}
                    >
                        {title}
                    </TextSpan>
                </Grid>
            </RectangleDish>
        )
    }
}
