import { type } from './actions';

const initialState = {
  items: []
}

export const brandSlider = (state=initialState, action) => {
  switch(action.type){
    case type.BRAND: {
      return {
        ...state,
        items: action.payload.items
      }
    }
    default: {
      return state
    }
  }
}