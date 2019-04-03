import React, { Component } from 'react'
import RankingsTableHeader from './RankingsTableHeader'
import PropTypes from 'prop-types'
import RankingsTableItem from './RankingsTableItem'
import { TableBox } from '../ui'
export default class RankingsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: props.productCardCondition.data
    }
  }
  handleSelect = (data) => {
    this.setState({ activeItem: data })
    this.props.selectProduct(data)
  }
  render() {
    const { data } = this.props
    return (
      <TableBox
        style={{ maxWidth: "992px" }}
      >
        <RankingsTableHeader
          rank="RANK"
          brand="BRAND"
          name="NAME"
          sku="SKU"
          active="BRAND"
          expectedRank={this.props.expectedRank ? "Expected Rank" : false}
          star={this.props.star}

        />

        {
          data.map(elem => (
            <RankingsTableItem
              key={elem.id}
              name={elem.name}
              sku={elem.sku}
              duration={elem.duration}
              brand={elem.brand}
              move={elem.num > 0 ? { num: elem.num, type: true } : { num: elem.num, type: false }}
              id={elem.id}
              active={this.state.activeItem ? this.state.activeItem.id === elem.id : false}
              handleClick={() => this.handleSelect(elem)}
              star={this.props.star}
              expectedRank={elem.id}
            />
          ))
        }
      </TableBox>
    )
  }
}

RankingsTable.propTypes = {
  rank: PropTypes.string,
  brand: PropTypes.string,
  name: PropTypes.string,
  sku: PropTypes.string,
  expectedRank: PropTypes.string,
  active: PropTypes.oneOf(["NAME", "BRAND", "RANK", "SKU", "EXPECTEDRANK"]).isRequired,
  selectProduct: PropTypes.func.isRequired
}

RankingsTable.defaultProps = {
  rank: null,
  brand: null,
  name: null,
  sku: null,
  expectedRank: null,
}   