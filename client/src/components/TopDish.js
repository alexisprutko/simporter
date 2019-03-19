import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import { SmallDishBox, TextSpan, Separator } from '../components/ui'
import Colors from '../constants/Colors';


class TopDish extends Component {
    render() {
        const { title, name, desc } = this.props
        return (
            <SmallDishBox>
                <Grid
                    container
                    justify="space-between"
                    wrap="wrap"
                >
                    <Grid

                    >
                        <TextSpan
                            color={Colors.textBlue}
                            size="22px"
                            weight="500"
                        >{title}</TextSpan>
                        <Separator />
                        <TextSpan
                            color={Colors.mainBlue}
                            size="28px"
                            weight="500"
                        >
                            {name}
                        </TextSpan>
                    </Grid>
                    <TextSpan
                        color={Colors.textBlue}
                        size="12px"
                        style={{ maxWidth: "47%", marginTop: "1rem" }}
                    >
                        {desc}
                    </TextSpan>
                </Grid>
            </SmallDishBox>
        )
    }
}

export default TopDish;