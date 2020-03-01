import React, { Component } from 'react'
import ShopCard from "./shop-card.component";
import { connect } from 'react-redux'
import { selectFilteredCategory } from '../redux/selectors/shop.selector'
import ShopNav from './shop-nav.components'


class ShopCategories extends Component {
  render() {
      
    return (
      <div className="shop">
        <ShopNav />
        <section className="shop-section">
                {this.props.categories.items
                    .map((item, i) => (
                        <ShopCard key={i} item={item} />
                    )
                )}
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>({
  categories: selectFilteredCategory(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps, null)(ShopCategories)