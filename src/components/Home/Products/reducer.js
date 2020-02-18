import { type } from './actions';

const initialState = {
  newProducts: [],
  featuredProducts: [],
}



export const products = (state=initialState, action) => {
  switch (type.PRODUCTS) {
    case action.type: {
      return {
          ...state,
          newProducts: action.payload.items.newProducts,
          featuredProducts: action.payload.items.featuredProducts,
      }
    }
    default: {
      return state
    }
  }
}