import React from 'react';
import GoodsDropdown from './GoodsDropdown';
import WastageFields from './WastageFields';
import '../styles/StageForm.css';


const StageForm = ({
  stage,
  idx,
  goodsList,
  onInputChange,
  onInputQtyChange,
  onAddInput,
  onRemoveInput,
  onOutputChange,
  onOutputQtyChange,
  onAddOutput,
  onRemoveOutput,
  onWastageChange,
  onAddWastage,
  onRemoveWastage,
  onProdTimeChange,
  onOutsourceChange,
  onAddNewGood,
  outputOptions = [],
  readOnly = false
}) => (
  <div className={`stage-form${readOnly ? ' read-only' : ''}`}>
    <div className="inputs">
      {stage.inputs.map((input, i) => (
        <div key={i} className="input-row">
          <GoodsDropdown value={input.name} goodsList={goodsList} onChange={val => !readOnly && onInputChange(i, val)} onAddNew={() => !readOnly && onAddNewGood('input')} />
          <input type="number" placeholder="Qty" value={input.qty} onChange={e => !readOnly && onInputQtyChange(i, e.target.value)} readOnly={readOnly} />
          {!readOnly && stage.inputs.length > 1 && <button onClick={() => onRemoveInput(i)}>-</button>}
        </div>
      ))}
      {!readOnly && <button onClick={onAddInput}>+ Add Input</button>}
    </div>
    <div className="center">
      <div><b>Production Stage {idx + 1}</b></div>
      <WastageFields wastage={stage.wastage} onChange={onWastageChange} onAdd={onAddWastage} onRemove={onRemoveWastage} readOnly={readOnly} />
      <div>
        <label>Production Time: </label>
        <input type="text" value={stage.prodTime} onChange={e => !readOnly && onProdTimeChange(e.target.value)} readOnly={readOnly} />
      </div>
      <div>
        <label>Outsource: </label>
        <input type="checkbox" checked={stage.outsource} onChange={e => !readOnly && onOutsourceChange(e.target.checked)} disabled={readOnly} />
      </div>
    </div>
    <div className="outputs">
      {stage.outputs.map((output, i) => (
        <div key={i} className="output-row">
          <GoodsDropdown value={output.name} goodsList={outputOptions.length ? outputOptions : goodsList} onChange={val => !readOnly && onOutputChange(i, val)} onAddNew={() => !readOnly && onAddNewGood('output')} />
          <input type="number" placeholder="Qty" value={output.qty} onChange={e => !readOnly && onOutputQtyChange(i, e.target.value)} readOnly={readOnly} />
          {!readOnly && stage.outputs.length > 1 && <button onClick={() => onRemoveOutput(i)}>-</button>}
        </div>
      ))}
      {!readOnly && <button onClick={onAddOutput}>+ Add Output</button>}
    </div>
  </div>
);

export default StageForm;
