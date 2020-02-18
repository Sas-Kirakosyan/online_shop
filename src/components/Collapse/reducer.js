const initialState = {
  connections: [],
  manufacturer: [],
  countries: [],
}
// action from category actions 
export const collapse = (state=initialState, action) => {
  switch(action.type){
    case 'GET_RELATED_DATA': {
      // console.log('action.data', action.data);
      return {
        ...state,
        manufacturer: action.data.manufacturers,
        connections: action.data.connections,
        countries: action.data.countries
      }
    }
    default: {
      return state
    }
  }
}