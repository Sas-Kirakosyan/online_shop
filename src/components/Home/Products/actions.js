import { FetchApi } from '../../../util/fetchApi';
import { brands } from '../../../util/service-urls';

export const type = {
  PRODUCTS: 'GET_PRODUCTS',
}

export const getProducts= () => async dispatch => {
  try{
    const result = await FetchApi.get(`${brands}`);
   
    dispatch({
      type: type.PRODUCTS,
      payload: {
        items: result.data
      }
    })
  }catch(e){
    console.error(e.message);
  }
}
