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
                style={{ padding: '12px 2px', boxShadow: '0px 4px 24px rgba(1, 106, 163, 0.04)', width: 992}}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    wrap="nowrap"

                >   { star && <TextSpan style={{marginLeft: 20}} ><Star /></TextSpan> }
                    <Separator horizontal="20px"/>
                    {rank && <RankingsTableHeaderElement weight='500' name={rank} active={active === "RANK"} />}
                    <Separator horizontal="4px"/>
                    {brand && <RankingsTableHeaderElement weight='500' name={brand} active={active === "BRAND"} />}
                    <Separator horizontal="64px"/>
                    {name && <RankingsTableHeaderElement name={name} weight='500' active={active === "NAME"} />}
                    <Separator horizontal="29%"/>
                    {sku && <RankingsTableHeaderElement name={sku} weight='500' active={active === "SKU"} />}
                    <Separator horizontal="2%"/>
                    {expectedRank && <RankingsTableHeaderElement name={expectedRank} weight='500' active={active === "EXPECTEDRANK"} />}
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