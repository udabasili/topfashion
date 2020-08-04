import React from 'react'
import ShopNav from './shop-nav.components'
import ItemCard from './shop-card.component'
import { connect } from 'react-redux'
import { selectItems } from '../redux/selectors/shop.selector'


class ShopOverview extends React.PureComponent {
  render() {
    return (
      <div className="shop">
        <ShopNav/>
        <section className="shop-section">
            {this.props.categories.map(({ id, title, items, match}, i) => (
              items
                .map((item, i) => (
                    <ItemCard key={i} item={item} />
                )
              )
            
            )
        )}  
        </section>
      </div>
    )
  }
}




const mapStateToProps = (state) =>({
  categories: selectItems(state)
})
export default connect(mapStateToProps, null)(ShopOverview)