

const initialState = {
  categories: [],
  productDetalis: [],

  }

export const category = (state=initialState, action) => {
  switch(action.type){
    case 'GET_CATEGORIES': {
      return {
        ...state,
        categories: action.data.data,
      }
    }
    case 'GET_PRODUCTS_DETALIS' : {
      return {
        ...state,
        productDetalis: action.data
      }
}
    default: {
      return state
    }
  }
}