import { FetchApi } from '../../../util/fetchApi';
import { brands } from '../../../util/service-urls';

export const type = {
  BRAND: 'GET_BRANDS'
}

export const getBrandProducts = () => async dispatch => {
  const response = await FetchApi.get(`${brands}`);

  dispatch({
    type: type.BRAND,
    payload: {
      items: response.data.brands,
    }
  })
}

