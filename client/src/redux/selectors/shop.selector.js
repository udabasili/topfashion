import {createSelector} from "reselect";

export const selectCategory = state => state.category

const categoryId= {
    hats: 1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

export const selectItems = createSelector(
    [selectCategory],
    shop => shop.item
)

export const selectFilteredCategory = routeName =>
    createSelector(
        [selectItems],
        categories => (routeName ? categories ?
            categories.find(category => category.id === categoryId[routeName]) : null : categories)
    )
    
