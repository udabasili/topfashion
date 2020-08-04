import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ShopOverview from '../components/shop-overview.component'
import ShopCategories from '../components/shop-categories.component'

const  Shop = (props) => {
  const {match} = props
  return (
    <Switch>
      <Route exact path={`${match.path}/all`} component={ShopOverview}/>
      <Route exact path={`${match.path}/:categoryId`} component={ShopCategories}/>
    </Switch>
    )
    
}


export default Shop;
