import { type } from './actions';

const initialState = {
  items: []
}

export const mainSlider = (state=initialState, action) => {
  switch(action.type){
    case type.BANNERS: {
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