import React from 'react';
import { FaListUl } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';
import ReactPaginate from 'react-paginate';

import './style.scss'

export function Settings(props) {
  return (

    <div className="settings-container"  >
      <div className="wrapper">
        <div className="item">
          <FiGrid onClick={props.hanldeChangeGrid} 
          style={props.isGrid? {color:'#ae0814'} : {color:'black'}}
          size='1.3em' className='grid-icon' />
          <FaListUl 
          onClick={props.handleChangeList} size='1.3em'
          style={props.isList? {color:'#ae0814'} : {color:'black'}}
          className='list-icon' />
        </div>


        <div className="item">
          <label htmlFor="sortby">Sort by</label>
          <select name="sortby" id="sortby">
            <option value="">Position</option>
            <option value="">best seller</option>
            <option value="">product name</option>
            <option value="">price</option>
            <option value="">wine score</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="showNumber">Show</label>
          <select name="sortby" id="showNumber">
            <option value="">Position</option>
            <option value="">best seller</option>
            <option value="">product name</option>
            <option value="">price</option>
            <option value="">wine score</option>
          </select>
        </div>
        <div className="item">
          <div className="text-xs-center">
            <ReactPaginate
              pageCount={3}
              pageRangeDisplayed={3}
             />
          </div>
        </div>
      </div>
    </div>

  )
}
