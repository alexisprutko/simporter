import React, { Component } from 'react'
import RankingsTableHeader from './RankingsTableHeader'
import PropTypes from 'prop-types'
import RankingsTableItem from './RankingsTableItem'
import { Grid } from '@material-ui/core';
export default class RankingsTable extends Component {
  render() {
    const { data } = this.props
    return (
      <Grid
        style={{ maxWidth: "992px" }}
      >
        <RankingsTableHeader
          rank="RANK"
          brand="BRAND"
          name="NAME"
          sku="SKU"
          active="BRAND"
        />

        {
          data.map(elem => (
            <RankingsTableItem
              key={elem.id}
              name={elem.name}
              sku={elem.sku}
              duration={elem.duration}
              brand={elem.brand}
              move={elem.move}
              id={elem.id}
            />
          ))
        }
      </Grid>
    )
  }
}

RankingsTable.propTypes = {
  rank: PropTypes.string,
  brand: PropTypes.string,
  name: PropTypes.string,
  sku: PropTypes.string,
  expectedRank: PropTypes.string,
  active: PropTypes.oneOf(["NAME", "BRAND", "RANK", "SKU", "EXPECTEDRANK"]).isRequired
}

RankingsTable.defaultProps = {
  rank: null,
  brand: null,
  name: null,
  sku: null,
  expectedRank: null,
}   