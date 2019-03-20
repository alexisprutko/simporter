import React, { Component } from 'react'
import { scrollTop } from '../helpers/scroll';
import { Grid } from '@material-ui/core';
import { NavigateBefore } from '@material-ui/icons'
import { AnimationBox, Separator, BackLink } from '../components/ui';
import { CATEGORY, changeCategory, changeTable } from '../redux/ducks/rankingsBySubNav'
import RankingsCategory from '../components/RankingsCategory'
import RankingsTable from '../components/RankingsTable'
import ProductCard from '../components/ProductCard'
import { selectProduct } from '../redux/ducks/productCardCondition'
import TopDish from '../components/TopDish'
import Strings from '../constants/Strings'
import { connect } from 'react-redux'


class RankingsSub extends Component {
  componentWillUnmount = () => {
    scrollTop()
  }

  render() {
    const { overallRankings, productCardCondition: { active, data: { name, image, move } }, selectProduct } = this.props
    return (
      <AnimationBox
        container
      >
        {
          this.props.rankingsBySubNav.component === CATEGORY ?
            (
              <RankingsCategory handleClick={this.props.changeTable} />
            ) :
            (
              <Grid
                container
                direction="column"
              >
                <Separator vertical="1rem" />
                <BackLink
                  onClick={this.props.changeCategory}
                >
                  <NavigateBefore />
                  {Strings.BACK_T_R_S}
                </BackLink>
                <Separator vertical="1rem" />
                <TopDish
                  title={"OVERALL RANKINGS"}
                  name="500 SKUs"

                />
                <Separator vertical="3rem" />
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
                    rank={move ? move.num : false}
                  />}
                </Grid>
              </Grid>
            )
        }
      </AnimationBox>
    )
  }
}

const mapStateToProps = (state) => ({
  rankingsBySubNav: state.rankingsBySubNav,
  overallRankings: state.overallRankings,
  productCardCondition: state.productCardCondition,
})

const mapDispatchToProps = {
  changeCategory,
  changeTable,
  selectProduct,
}


export default connect(mapStateToProps, mapDispatchToProps)(RankingsSub)