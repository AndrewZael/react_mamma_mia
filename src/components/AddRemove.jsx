import React from 'react'
import BtnAddRemove from '../components/BtnAddRemove';

const AddRemove = ({ pizza, quantity }) => {
  return (
    <div className="btn-group">
      <BtnAddRemove pizza={pizza} type="remove" btn="primary" textBtn="-" />
      <input id="quantity-pizzas" readOnly value={quantity || 0} className="form-control text-center rounded-0" />
      <BtnAddRemove pizza={pizza} textBtn="+" />
    </div>
  )
}

export default AddRemove
