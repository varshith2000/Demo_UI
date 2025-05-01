import React from 'react';
import '../styles/GoodsDropdown.css';


const GoodsDropdown = ({ value, goodsList, onChange, onAddNew }) => (
  <select value={value} onChange={e => {
    if (e.target.value === '__add_new__') onAddNew();
    else onChange(e.target.value);
  }} className="goods-dropdown">
    <option value="">Select Good</option>
    {goodsList.map(g => <option key={g} value={g}>{g}</option>)}
    <option value="__add_new__">+ Add New Good</option>
  </select>
);

export default GoodsDropdown;
