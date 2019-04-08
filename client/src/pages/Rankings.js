import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import TopDish from '../components/TopDish'
import RankingsTable from '../components/RankingsTable'
import ProductCard from '../components/ProductCard'
import { Separator, AnimationBox } from '../components/ui';

import { connect } from 'react-redux'
import { scrollTop } from '../helpers/scroll';

import { selectProduct } from '../redux/ducks/productCardCondition'

class Rankings extends Component {
  componentWillUnmount = () => {
    scrollTop()
  }
  render() {
    const { overallRankings, productCardCondition: { active, data: { name, image, rank } }, selectProduct } = this.props
    return (
      <AnimationBox
        container
        direction="column"
        style={{ marginTop: 95 }}
      >
        <TopDish
          title={"OVERALL RANKINGS"}
          name="500 SKUs"

        />
        <Separator vertical="2rem" />
        <Grid
          container
          direction="row"
          justify="space-between"
        >

          <RankingsTable
            active="BRAND"
            data={overallRankings}
            selectProduct={selectProduct}
            productCardCondition={this.props.productCardCondition}


          />
          {active && <ProductCard
            title={name}
            image={image}
            rank={rank}
          />}
        </Grid>
      </AnimationBox>
    )
  }
}

const mapStateToProps = (state) => ({
  overallRankings: state.overallRankings,
  productCardCondition: state.productCardCondition,
})
const mapDispatchToProps = {
  selectProduct,
}

export default connect(mapStateToProps, mapDispatchToProps)(Rankings) 