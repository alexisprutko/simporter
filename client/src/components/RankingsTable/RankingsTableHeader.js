import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper } from '@material-ui/core';
import Star from '@material-ui/icons/Star'
import RankingsTableHeaderElement from './RankingsTableHeaderElement'
import { Separator, TextSpan } from '../ui';


export default class RankingsTableHeader extends Component {
    render() {
        const { rank, brand, name, sku, expectedRank, active, star } = this.props
        return (
            <Paper
                style={{ padding: '12px 20px'}}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    wrap="nowrap"

                >   { star && <TextSpan ><Star /></TextSpan> }
                    <Separator horizontal="2%"/>
                    {rank && <RankingsTableHeaderElement name={rank} active={active === "RANK"} />}
                    <Separator horizontal="5%"/>
                    {brand && <RankingsTableHeaderElement name={brand} active={active === "BRAND"} />}
                    <Separator horizontal="20%"/>
                    {name && <RankingsTableHeaderElement name={name} active={active === "NAME"} />}
                    <Separator horizontal="20%"/>
                    {sku && <RankingsTableHeaderElement name={sku} active={active === "SKU"} />}
                    <Separator horizontal="2%"/>
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
    active: PropTypes.oneOf(["NAME", "BRAND", "RANK", "SKU", "EXPECTEDRANK"]).isRequired,
    expectedRank: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    star: PropTypes.bool
}

RankingsTableHeader.defaultProps = {
    rank: null,
    brand: null,
    name: null,
    sku: null,
    expectedRank: null,
    star: false

}   