import React from 'react'
import ShopCard from "./shop-card.component";
import { connect } from 'react-redux'
import { selectFilteredCategory } from '../redux/selectors/shop.selector'
import ShopNav from './shop-nav.components'
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';

class ShopCategories extends React.PureComponent {
  render() {
	const { categories } = this.props;
    return (
      <div className="shop">
        <ShopNav />
        <section className="shop-section">
          { (categories || categories !== undefined ) ? this.props.categories.items
              .map((item, i) => (
                  <ShopCard key={i} item={item} />
			  )) :
			  <Redirect to='/404'/>
          }
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>({
  categories: selectFilteredCategory(ownProps.match.params.categoryId)(state)
})


export default connect(mapStateToProps, null)(ShopCategories)