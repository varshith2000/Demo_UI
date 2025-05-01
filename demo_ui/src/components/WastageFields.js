import React from 'react';
import '../styles/WastageFields.css';


const WastageFields = ({ wastage, onChange, onAdd, onRemove, readOnly = false }) => (
  <div className="wastage-fields">
    {wastage.map((w, i) => (
      <div key={i} className="wastage-row">
        <input type="text" placeholder="Wastage Name" value={w.name} onChange={e => !readOnly && onChange(i, { ...w, name: e.target.value })} readOnly={readOnly} />
        <input type="number" placeholder="Value" value={w.value} onChange={e => !readOnly && onChange(i, { ...w, value: e.target.value })} readOnly={readOnly} />
        <select value={w.type} onChange={e => !readOnly && onChange(i, { ...w, type: e.target.value })} disabled={readOnly}>
          <option value="%">%</option>
          <option value="val">Value</option>
        </select>
        {!readOnly && wastage.length > 1 && <button onClick={() => onRemove(i)}>-</button>}
      </div>
    ))}
    {!readOnly && <button onClick={onAdd}>+ Add Wastage</button>}
  </div>
);

export default WastageFields;
