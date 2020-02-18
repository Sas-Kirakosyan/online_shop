import { FetchApi } from '../../../util/fetchApi';
import { categories } from '../../../util/service-urls';
import { types }  from '../../../util/service-urls';


export const getCategories = (argCategory) => async dispatch =>  {
  console.log(types,categories);
  try{
   const result = await FetchApi.get(`${types}?category=${argCategory}&visibility=catalog`);
   console.log('result',result)
   dispatch({
      type: 'GET_CATEGORIES',
      data: result,
    })
    dispatch({
      type: 'GET_RELATED_DATA',
      data: result.data
    })
  }catch(e){
    console.error(e.message);
  }
}
export const getProductsDetalis = (parameters) => async dispatch =>{
  console.log('before', parameters);
  let url = new URL(categories);
  Object.keys(parameters).forEach(key => url.searchParams.append(key, parameters[key]))
try{
 const response = await FetchApi.get(url)
    dispatch({
      type:'GET_PRODUCTS_DETALIS',
      data: response.data
    })
  }catch(e){
    console.error(e.message);
   }
}

// "category": "specials",
// "type": "red",
// "subcategory": "shiraz",
// "perPage": 9,
// "orderBy": "price",
// "order": "ASC",
// "currentPage": 1,
// "visibility":"catalog"






// Visibility
// perPage, currentPage, order, orderBy
// Category
// Type
// Subcategory
// perPage kara lini 9,15,30,60,90,120
// order kara lini ASC kam DESC
// orderBy kara lini id, best_seller, name, price, wine_score