import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from './actions';
import { NavigationBar, Footer } from '../../index';
import { ProductItem } from '../../Home/ProductItem';
import { CollapseBlock } from '../../../components/Collapse/index';
import { Settings } from '../../../components/individualProducts/settings'
import { Redirect } from "react-router-dom"
import { ProductListItem } from '../../Home/productListItem'
import { getProductsDetalis } from './actions'

import './style.scss';

export const Category = (props) => {

  const [isGrid, setIsGrid] = useState(true)
  const [isList, setIsList] = useState(false)

  const [parameters, setParameters] = useState({
    category: "",
    type: "",
    subcategory: "",
    perPage: 15,
    orderBy: "price",
    order: "ASC",
    currentPage: 1,
    visibility: "catalog"
  })
  const hanldeChangeGrid = () => {
    setIsGrid(true)
    setIsList(false)
   
  }
  const handleChangeList = () => {
    setIsList(true)
    setIsGrid(false)
  
  }

  const { category } = props.match.params; //wine
  const { type } = props.match.params; //red
  const { subcategory } = props.match.params // shiraz

  useEffect(() => {
    let copyParameters = { ...parameters }
    copyParameters.category = category
    copyParameters.type = type ? type : ""
    copyParameters.subcategory = subcategory ? subcategory : ""
    setParameters(copyParameters)
    // console.log('parameters', parameters)
  }, [category])


const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories(category));
  }, [category])

  useEffect(() => {
    if(parameters.category){
      dispatch(getProductsDetalis(parameters));
    }
  }, [parameters])

  const productDetalis = useSelector(state => state.category.productDetalis);
  const categoryState = useSelector(state => state.category);
  const collapse = useSelector(state => state.collapse);

console.log('categoryState', categoryState);
  
  const { categories } = categoryState;
  const { products } = productDetalis;
  const { connections } = collapse;
  const { details } = categories;

  console.log('products',products) 

  let copyDetalis = Object.assign({}, details); 
  const changeCaseFirstLetter = (str) => {
    if (typeof str === 'string') {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return null;
  }

  const Categories = ['wine', 'spirits', 'beer', 'specials', 'liquor', 'cigars', 'gift-sets', 'pre-order', 'accessories', 'recommendations', 'non-alcoholic'];
  const Types = ['red', 'white', 'imported', 'domestic', 'sparkling', 'sake', 'new', '90pt', 'brandy', 'gin', 'liqueur', 'rum', 'tequila', 'vodka', 'scotch', 'whiskey', 'mixers', 'grappa', 'bourbon', 'mezcal', 'pisco', 'arark', 'rtd', 'gift-baskets', 'engraving', 'chocolates', 'decorative-bottles', 'gift-sets', 'wine-futures', 'spirits'];
  // const Subcatigories = ['shiraz', 'merlot', 'cabernet-sauvignon', 'malbec', 'pinot-noir', 'zinfandel', 'sangiovese', 'barbera', 'red-blends', 'rose-whine', 'sangria','port', 'chardonnay','sauvignon-blanc','semillon','moscato', 'pinot-grigio','gewurztraminer','riesling','white-blends','viognier']

  if (type === undefined && subcategory === undefined && !Categories.includes(category)) {
    return <Redirect to='/' />
  }
  if (subcategory === undefined && type !== undefined && (!Types.includes(type) || !Categories.includes(category))) {
    return <Redirect to='/' />
  }

  return (
    <>
      <NavigationBar/>
      <div className='catigory-container'>
        <header className="page-header" style={copyDetalis.image ? { height: 330} : { height: 15 }} >
          {copyDetalis.image && <img src= {`http://liquornearme.test/category-images/${copyDetalis.image}`}  alt="header"/>}
          <h2>{type ? `${type} ${category}` : category} </h2>
          {/*visible  */}
        </header>
        <div className="urls">
          <div className="innerUrls">
            <Link to="/">
              Home
            </Link>
            {category && '/ '}
            <span className="innerUrlsSpan">
              {/* <Link to={{pathname: `categories/${category}`}}>  */}
              {changeCaseFirstLetter(category)}
              {/* </Link>   */}
            </span>
            {type && ' /  '}
            <span className="innerUrlsSpan">
              {changeCaseFirstLetter(type)}{' '}
              {type && changeCaseFirstLetter(category)}
            </span>
            {subcategory && ' / '}
            <span className="innerUrlsSpan">
              {changeCaseFirstLetter(subcategory)}
            </span>
          </div>
        </div>
        <main>
          {(subcategory && <h4>{subcategory}</h4>) || <h4> {type ? `${type} ${category}` : category} </h4>}
          <div className="sort-container">
            <ul>
              {connections && connections.map((el, i) => (
                <Link to='./' key={i}><li key={i}>{el.name}</li></Link>
              ))}
            </ul>
          </div>
          <div className="main-content">
            <aside className="filters">
              <CollapseBlock category={category} parameters={parameters}/>
            </aside>
            <div className={isList ? "list" : 'product'} >
              <div className="settings-top-wrapper">
                <Settings handleChangeList={handleChangeList} hanldeChangeGrid={hanldeChangeGrid}
                  isGrid={isGrid} isList={isList} />
              </div>
              {products && products.map(el => (
                <Fragment key={el.id} >
                  {isGrid && <ProductItem
                    key={el.id}
                    price={el.price}
                    name={el.name}
                    src={`http://liquornearme.test/storage/products/${el.img_path}`}
                  />}
                  {isList && <ProductListItem
                    key={el.id}
                    price={el.price}
                    name={el.name}
                    description={el.description}
                    src={`http://liquornearme.test/storage/products/${el.img_path}`}
                  />}
                </Fragment>
              ))}
              <div className="settings-bottom-wrapper">
                <Settings handleChangeList={handleChangeList}
                  hanldeChangeGrid={hanldeChangeGrid}
                  isGrid={isGrid} isList={isList}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}






















// const clickOnSpirits =() =>{
//  let copyParameters = {...parameters}
//  copyParameters.Category ='spirits'
//  setParameters(copyParameters)
//   console.log('spirts', parameters)
// }
// const clickOnWine =() =>{
//   let copyParameters = {...parameters}
//   copyParameters.Category ='wine'
//   setParameters(copyParameters)
//    console.log('wine', parameters)
// }
