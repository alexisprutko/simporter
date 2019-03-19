import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper } from '@material-ui/core';
import RankingsTableHeaderElement from './RankingsTableHeaderElement'
import { Separator } from '../ui';


export default class RankingsTableHeader extends Component {
    render() {
        const { rank, brand, name, sku, expectedRank, active } = this.props
        return (
            <Paper
                style={{ padding: '12px 20px'}}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"

                >
                    {rank && <RankingsTableHeaderElement name={rank} active={active === "RANK"} />}
                    <Separator horizontal="5%"/>
                    {brand && <RankingsTableHeaderElement name={brand} active={active === "BRAND"} />}
                    <Separator horizontal="20%"/>
                    {name && <RankingsTableHeaderElement name={name} active={active === "NAME"} />}
                    <Separator horizontal="30%"/>
                    {sku && <RankingsTableHeaderElement name={sku} active={active === "SKU"} />}
                    <Separator horizontal="5%"/>
                    {expectedRank && <RankingsTableHeaderElement name={expectedRank} active={active === "EXPECTEDRANK"} />}
                </Grid>
            </Paper>
        )
    }
}
RankingsTableHeader.propTypes = {
    rank: PropTypes.string,
    brand: PropTypes.string,
    name: PropTypes.string,
    sku: PropTypes.string,
    expectedRank: PropTypes.string,
    active: PropTypes.oneOf(["NAME", "BRAND", "RANK", "SKU", "EXPECTEDRANK"]).isRequired
}

RankingsTableHeader.defaultProps = {
    rank: null,
    brand: null,
    name: null,
    sku: null,
    expectedRank: null,
}   