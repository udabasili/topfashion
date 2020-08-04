import React from 'react'
import ShopCard from "./shop-card.component";
import { connect } from 'react-redux'
import { selectFilteredCategory } from '../redux/selectors/shop.selector'
import ShopNav from './shop-nav.components'
import PropTypes from "prop-types";

class ShopCategories extends React.PureComponent {
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

ShopCategories.propTypes = {
  addItem: PropTypes.func.isRequired,
  addError: PropTypes.func.isRequired,
  history: PropTypes.object,
  item: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(ShopCategories)