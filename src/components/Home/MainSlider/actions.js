import { FetchApi } from '../../../util/fetchApi';
// import { banners } from '../../../util/service-urls';
import { brands } from '../../../util/service-urls';

export const type = {
  BANNERS: 'GET_BANNERS'
}

export const getBanners = () => async dispatch => {
  const response = await FetchApi.get(`${brands}`);
  dispatch({
    type: type.BANNERS,
    payload: {
      items: response.data.banners,
    }
  })
}
